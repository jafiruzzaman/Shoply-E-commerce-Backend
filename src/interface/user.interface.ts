/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 * @version 1.0.0
 * @file user.interface.ts
 */

/*================================================ Node Modules ==================================================*/
import type { Document, Types } from "mongoose";

/*================================================ Export IUser ==================================================*/
export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "user" | "admin";
  address: Types.ObjectId[];
  cards: Types.ObjectId[];
  refreshToken?: string;
  cart: Types.ObjectId[];
  wishlist: Types.ObjectId[];
  orders: Types.ObjectId[];
  reviews: Types.ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
}
