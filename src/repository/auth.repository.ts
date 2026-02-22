/**
 * @copyright 2026 Mohammad Jafiruzzaman
 * @version 1.0.0
 * @file auth.repository.ts
 */

/*================================================ Custom Modules ==================================================*/
import type { IUser } from "@interface/user.interface";
import { userModel } from "@model/user.model";

/*================================================ Export AuthRepository ==================================================*/
export class AuthRepository {
  static async createUser(payload: Partial<IUser>): Promise<IUser> {
    return await userModel.create(payload);
  }
  static async finByEmail(email: string): Promise<IUser | null> {
    return await userModel.findOne({ email });
  }
  static async findById(id: string): Promise<IUser | null> {
    return await userModel.findById(id);
  }
  static async updatePassword(userId: string, updatePassword: string) {
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
  static async updateUser(userId: string, payload: any) {
    return await userModel.findByIdAndUpdate(
      userId,
      {
        ...payload,
      },
      {
        returnDocument: "before",
      }
    );
  }
}
