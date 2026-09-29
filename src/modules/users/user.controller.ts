import type { Request, Response } from "express";
import { userServices } from "./user.service.js";

const createAdmin = async (req : Request , res : Response) => {
    try {

        const result = await userServices.createAdminIntoDB(req.body);
        res.status(201).json({
            success : true,
            message : "Admin created successfully",
            data : result
        })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : 
            error  instanceof Error ? error.message : "Something Went Wrong" ,
        })
    }
}


export const userControllers = {
    createAdmin
}