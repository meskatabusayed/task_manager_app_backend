import config from "../../config/index.js";

export const USER_STATUS = {
  ACTIVE: "ACTIVE",
  BLOCKED: "BLOCKED",
} as const;

export const USER_ROLE = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;

export const defaultProfileImage = config.default_profile_image || "https://i.ibb.co/7nssn2D/au4.jpg";
