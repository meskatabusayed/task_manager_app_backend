import { Router } from 'express';
import { userControllers } from './user.controller.js';
import { auth } from '../../middlewares/auth.js';
import { USER_ROLE } from './user.constant.js';

const router = Router();

router.post('/create-admin', auth(USER_ROLE.ADMIN),  userControllers.createAdmin);

export const userRouter = router;


