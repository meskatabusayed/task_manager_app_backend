import { defaultProfileImage, USER_ROLE } from './user.constant.js';
import type { TUser } from './user.interface.js';
import { User } from './user.model.js';

const createAdminIntoDB = async (payload: TUser) => {
  const { name, email, password, profileImage } = payload;

  //find user
  const isExistingUser = await User.findOne({ email });
  if (isExistingUser) {
    throw new Error('User Already Exist');
  }

  //create user
  const result = await User.create({
    name,
    email,
    password,
    role: USER_ROLE.ADMIN,
    profileImage: profileImage || defaultProfileImage,
  });

  return result;
};

export const userServices = {
  createAdminIntoDB,
};
