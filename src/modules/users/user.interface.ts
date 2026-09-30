import type { USER_ROLE, USER_STATUS } from './user.constant.js';

export type TUser = {
  name: string;
  email: string;
  password: string;
  userId: string;
  status: keyof typeof USER_STATUS;
  role: keyof typeof USER_ROLE;
  profileImage?: string;
  isDeleted: boolean;
};
