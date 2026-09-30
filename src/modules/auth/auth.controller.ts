import type { Request, Response } from 'express';
import { authServices } from './auth.service.js';

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

export const authControllers = {
  registerUser,
};
