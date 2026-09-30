import { Router } from 'express';
import { userControllers } from './user.controller.js';

const router = Router();

router.post('/create-admin', userControllers.createAdmin);

export const userRouter = router;
