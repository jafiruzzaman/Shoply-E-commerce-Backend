/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 * @version 1.0.0
 * @file loadEnv.config.ts
 */

/*================================================ Node Modules ================================================*/
import dotenv from "dotenv";
import path from "node:path";

/*================================================ Export LoadEnv ================================================*/
export const loadEnv = () => {
  const nodeEnv = process.env.NODE_ENV || "development";
  const envFile =
    nodeEnv === "production"
      ? ".env.production.local"
      : ".env.development.local";
  dotenv.config({
    path: path.resolve(process.cwd(), envFile),
  });
  console.log(`✅ Loaded ${envFile}`);
};
