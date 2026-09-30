import bcrypt from "bcryptjs";

 export const isPasswordMatch = async (plainPassword : string , hashPassword : string) => {
    const isMatch = await bcrypt.compare(plainPassword , hashPassword);
    return isMatch;

  }
