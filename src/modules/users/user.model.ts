import { Schema , model} from "mongoose";
import type { TUser } from "./user.interface.js";
import { USER_ROLE, USER_STATUS } from "./user.constant.js";


export const userSchema = new Schema<TUser>({
    name : {
        type : String,
        required : [true, "Name is Required"],
        trim: true,
    },
    email : {
        type : String,
        required : [true, "Email is Required"],
        unique : [true, "Email must be unique"],
        lowercase : true,
        trim : true,
    },
    password : {
        type : String,
        required : [true, "Password is Required"],
        trim : true,
        select : false

    },
    userId : {
        type : String,
        required : [true, "User id must be Required"],
        trim : true
    },
    status : {
        type : String,
        enum : Object.values(USER_STATUS),
        default : USER_STATUS.ACTIVE
    },

    role : {
        type : String,
        role : [true , "Role must be required"],
        enum : Object.values(USER_ROLE),

    },
    profileImage : {
        type : String,
        required : false,

    },

    isDeleted : {
        type : Boolean,
        default : false
    }
});




export const User = model<TUser>("User" , userSchema);