import config from '../../config/index.js';
import { defaultProfileImage, USER_ROLE, USER_STATUS } from '../users/user.constant.js';
import type { TUser } from '../users/user.interface.js';
import { User } from '../users/user.model.js';
import type { TLoginUser } from './auth.interface.js';
import { isPasswordMatch } from './auth.utils.js';
import jwt from 'jsonwebtoken';

const registerUser = async (payload: TUser) => {
  const { name, email, password, profileImage } = payload;

  //check existing user
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error('User Already Exist');
  }

  const result = await User.create({
    name,
    email,
    password,
    role: USER_ROLE.USER,
    profileImage: profileImage || defaultProfileImage,
  });

  const { password: _, ...user } = result.toObject();

  return user;
};


const loginUser = async(payload : TLoginUser) => {
  const {email , password} = payload;

  const user = await User.findOne({email}).select("+password");

  if(!user){
    throw new Error("Invalid email or Password");
  }

  if(user.status === USER_STATUS.BLOCKED){
    throw new Error("User is Blocked");
  }

  if(user.isDeleted){
    throw new Error("User account is no longer available")
  }

  const passwordMatch = isPasswordMatch(password , user.password);

  if(!await passwordMatch){
    throw new Error("Invalid email or Password");
  }

  const jwtPayload = {
    email : user.email,
    role : user.role
  }

  const accessToken = jwt.sign(jwtPayload , config.jwt_access_secret as string , {
    expiresIn : config.jwt_access_secret_expire_in
  });

  const refreshToken = jwt.sign(jwtPayload , config.jwt_refresh_secret as string,
    {
      expiresIn : config.jwt_refresh_secret_expire_in
    }
  )

  return {
    accessToken,
    refreshToken
  }
}

export const authServices = {
  registerUser,
  loginUser,

};
