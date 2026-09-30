import dotenv from 'dotenv';
import type { StringValue } from 'ms';
dotenv.config();

export default {
  port: process.env.PORT || 5000,
  db_url: process.env.DB_URL,
  default_profile_image: process.env.DEFAULT_PROFILE_IMAGE,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt_access_secret : process.env.JWT_ACCESS_SECRET,
  jwt_refresh_secret : process.env.JWT_REFRESH_SECRET,
  jwt_access_secret_expire_in : process.env.JWT_ACCESS_SECRET_EXPIRE_IN as StringValue,
  jwt_refresh_secret_expire_in : process.env.JWT_REFRESH_SECRET_EXPIRE_IN as StringValue,
  node_env : process.env.NODE_ENV,
  
  
};


