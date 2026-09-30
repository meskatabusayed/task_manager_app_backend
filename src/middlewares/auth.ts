import type { NextFunction, Request, Response } from "express";
import { USER_ROLE, USER_STATUS } from "../modules/users/user.constant.js";
import jwt, { type JwtPayload } from "jsonwebtoken";
import config from "../config/index.js";
import { User } from "../modules/users/user.model.js";



export const auth = (...requiredRoles : (keyof typeof USER_ROLE)[]) => {
    return async (
        req : Request,
        res : Response,
        next : NextFunction
    ) :  Promise<void> => {

        try {
            const authorization = req.headers.authorization;

            if(!authorization){
                throw new Error("You are not authorizedd");

            }

            const [bearer , token] = authorization.split(" ");

            if(bearer !== "Bearer" || !token ){
                throw new Error("Invalid Authorization Format");
            }

            //verify JWT

            const decode = jwt.verify(token , config.jwt_access_secret as string) as JwtPayload;

            const {email , role} = decode;

            if(!email || !role){
                throw new Error("Invalid Token");


            }

            const user = await User.findOne({email});

            if(!user){
                throw new Error("User Not Found");


            }

            if(user.status === USER_STATUS.BLOCKED){
                throw new Error("User Is Blocked");
            }

            if(user.isDeleted){
                throw new Error("User No longer Available")
            }

             // 6. Check role
      if (
        requiredRoles.length > 0 &&
        !requiredRoles.includes(role)
      ) {
        throw new Error(
          "You are not authorized to access this route"
        );
      }

next()

        } catch (error) {
            next(error);
            
        }

    }
}