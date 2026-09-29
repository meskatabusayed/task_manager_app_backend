import { Schema , model} from "mongoose";
import type { TUser } from "./user.interface.js";
import { USER_ROLE, USER_STATUS } from "./user.constant.js";
import crypto from "crypto";

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
        unique : [true, "User is must be unique"],
        trim : true
    },
    status : {
        type : String,
        enum : Object.values(USER_STATUS),
        default : USER_STATUS.ACTIVE
    },

    role : {
        type : String,
        required : [true , "Role must be required"],
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

userSchema.pre('save' , async function(){
    
    if(!this.userId){
        this.userId = await crypto.randomBytes(6).toString("hex").toUpperCase();
    }

  
})


export const User = model<TUser>("User" , userSchema);