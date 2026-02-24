/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 * @version 1.0.0
 * @file authenticate.middleware.ts
 */

/*================================================ Node Modules ================================================*/
import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
/*================================================ Custom Modules ================================================*/
import { env } from "@config/env.config";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get Token
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "No Token Provided",
      });
    }
    // Spilt Token
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Invalid token format",
      });
    }
    // Decode Token
    const decoded = jwt.verify(token, env.access_token_secret);
    req.user = decoded as any;
    next();
  } catch (error) {}
};
