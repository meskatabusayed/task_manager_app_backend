import type { Request, Response } from 'express';
import { authServices } from './auth.service.js';
import config from '../../config/index.js';

const registerUser = async (req: Request, res: Response) => {
  try {
    const result = await authServices.registerUser(req.body);
    res.status(201).json({
      success: true,
      message: 'User Registration successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Something Went Wrong',
    });
  }
};


const loginUser = async(req : Request , res : Response) => {
  try {
     const {accessToken , refreshToken} = await authServices.loginUser(req.body);
     res.cookie("refreshToken" , refreshToken , {
      httpOnly : true,
      secure : config.node_env === "Production"

     })

     res.status(201).json({
      success : true,
      message : "User Login Successfully",
      data : {
        accessToken
      }
     })

  } catch (error) {
    res.status(500).json({
      success : false,
      message : 
      error instanceof Error ? error.message : "Something Went Wrong"
    })
    
  }

}

export const authControllers = {
  registerUser,
  loginUser,
};
