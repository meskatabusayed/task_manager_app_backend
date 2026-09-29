import { defaultProfileImage, USER_ROLE } from "../users/user.constant.js";
import type { TUser } from "../users/user.interface.js";
import { User } from "../users/user.model.js";

const registerUser = async (payload : TUser) => {
    const {name , email , password , profileImage} = payload;

    //check existing user
    const existingUser = await User.findOne({email});

    if(existingUser){
        throw new Error("User Already Exist");
    }

    const result = await User.create({
        name,
        email,
        password,
        role : USER_ROLE.USER,
        profileImage : profileImage || defaultProfileImage
    });

    return result;
}


export const authServices = {
    registerUser,


}