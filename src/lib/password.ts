/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 * @version 1.0.0
 * @file auth.service.ts
 */

/*================================================ Node Modules ==================================================*/
import bcrypt from "bcrypt";

/*================================================ Custom Modules ==================================================*/
import { env } from "@config/env.config";
import { userModel } from "@model/user.model";
import type { IUser } from "@interface/user.interface";

export const generateHashedPassword = async (
  password: string
): Promise<string> => {
  return await bcrypt.hash(password, env.salt_round);
};

export const comparePassword = async (
  userId: string,
  password: string
): Promise<boolean> => {
  const user: IUser | null = await userModel.findById(userId);
  return await bcrypt.compare(password, user?.password as string);
};
