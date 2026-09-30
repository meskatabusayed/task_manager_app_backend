import { Router } from 'express';
import { authControllers } from './auth.controller.js';

const router = Router();

router.post('/register', authControllers.registerUser);
router.post('/login' , authControllers.loginUser);

export const authRouters = router;
