/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 * @version 1.0.0
 * @file user.model.ts
 */

/*================================================ Node Modules ==================================================*/
import { Schema, model, Types } from "mongoose";

/*================================================ Custom Modules ==================================================*/
import type { IUser } from "@modules/user/user.interface";

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "First name at-least 3 characters"],
      maxlength: [50, "First name can't be more than 50 characters"],
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "Last name at-least 3 characters"],
      maxlength: [50, "Last name can't be more than 50 characters"],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: [8, "Password at-least 8 characters"],
    },
    address: [
      {
        type: Types.ObjectId,
        ref: "Address",
      },
    ],
    cart: [
      {
        type: Types.ObjectId,
        ref: "Cart",
      },
    ],
    wishlist: [
      {
        type: Types.ObjectId,
        ref: "Wishlist",
      },
    ],
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    reviews: [
      {
        type: Types.ObjectId,
        ref: "Review",
      },
    ],
    refreshToken: {
      type: String,
      default: null,
    },
    cards: [
      {
        type: Types.ObjectId,
        ref: "Card",
      },
    ],
    orders: [
      {
        type: Types.ObjectId,
        ref: "Order",
      },
    ],
    resetPasswordToken: {
      type: String,
      default: null,
    },
    resetPasswordExpires: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export const userModel = model<IUser>("User", userSchema);
