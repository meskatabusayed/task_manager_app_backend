import { Router } from 'express';
import { authControllers } from './auth.controller.js';

const router = Router();

router.post('/register', authControllers.registerUser);

export const authRouters = router;
