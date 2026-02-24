/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 * @version 1.0.0
 * @file generate-token.ts
 */

/*================================================ Node Modules ==================================================*/
import jwt from "jsonwebtoken";

/*================================================ Custom Modules ==================================================*/
import { env } from "@config/env.config";

const signAccessToken = (userId: string, role: string) => {
  return jwt.sign(
    {
      userId,
      role,
    },
    env.access_token_secret,
    {
      algorithm: "HS256",
      expiresIn: env.access_token_expires_in,
    }
  );
};

const signRefreshToken = (userId: string, role: string) => {
  return jwt.sign(
    {
      userId,
      role,
    },
    env.refresh_token_secret,
    {
      algorithm: "HS256",
      expiresIn: env.refresh_token_expires_in,
    }
  );
};

export { signAccessToken, signRefreshToken };
