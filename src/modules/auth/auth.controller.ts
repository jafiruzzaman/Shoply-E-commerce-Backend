/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 * @version 1.0.0
 * @file auth.routes.ts
 */

/*================================================ Node Modules ==================================================*/
import { type NextFunction, type Request, type Response } from "express";

/*================================================ Custom Modules ==================================================*/
import { env } from "@config/env.config";
import { AuthService } from "@modules/auth/auth.services";

export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }
  try {
    const user = await AuthService.register({
      firstName,
      lastName,
      email,
      password,
    });
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error Found in register controller`, error.message);
      next(error);
    }
  }
};
export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }
  try {
    const { user, accessToken, refreshToken } = await AuthService.login({
      email,
      password,
    });
    return res
      .status(200)
      .cookie("token", refreshToken, {
        httpOnly: env.node_env === "production" ? true : false,
        secure: true,
        sameSite: env.node_env === "production" ? "strict" : "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .json({
        success: true,
        message: "User loggedIn successfully",
        data: user,
        accessToken,
      });
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error Found in login controller`, error.message);
      next(error);
    }
  }
};
export const logoutController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId, role } = req.user;
  console.log(userId, role);

  try {
    const user = await AuthService.logout(userId);
    console.log("user", user);
    return res.status(200).json({
      success: true,
      message: "User logout successfully",
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error Found in logout controller`, error.message);
      next(error);
    }
  }
};
export const refreshTokenController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.user;
  try {
    return res.status(200).json({
      success: true,
      message: "Token refreshed successfully",
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error Found in refreshToken controller`, error.message);
      next(error);
    }
  }
};
export const getMeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.user;
  try {
    const user = await AuthService.getMe(userId.toString());
    console.log(`user id`, user);

    return res.status(200).json({
      success: true,
      message: "Get Current User",
      data: user,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error Found in getMe controller`, error.message);
      next(error);
    }
  }
};
export const forgotPasswordController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.user;
  try {
    return res.status(200).json({
      success: true,
      message: "send Resent link to your email",
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error Found in getMe controller`, error.message);
      next(error);
    }
  }
};
export const resetPasswordController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.user as any;
  try {
    return res.status(200).json({
      success: true,
      message: "Password reset successful",
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error Found in getMe controller`, error.message);
      next(error);
    }
  }
};
