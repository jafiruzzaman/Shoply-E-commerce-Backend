import type { IUser } from "@interface/user.interface";
import { userModel } from "@model/user.model";

/**
 * @copyright 2026 Mohammad Jafiruzzaman
 * @version 1.0.0
 * @file auth.repository.ts
 */
export class AuthRepository {
  async createUser(payload: Partial<IUser>): Promise<IUser> {
    return await userModel.create(payload);
  }
  async finByEmail(email: string): Promise<IUser | null> {
    return await userModel.findOne({ email });
  }
  async findById(id: string): Promise<IUser | null> {
    return await userModel.findById(id);
  }
  async updatePassword(userId: string, updatePassword: string) {
    return await userModel.findByIdAndUpdate(
      userId,
      {
        password: updatePassword,
      },
      {
        new: true,
      }
    );
  }
}
