/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 * @version 1.0.0
 * @file env.config.ts
 */

/*================================================ Node Modules ==================================================*/
import { z } from "zod";
import ms from "ms";

/*================================================ Custom Modules ==================================================*/
import { envSchema } from "@config/env.validation";

/*================================================ Parse ENV ==================================================*/
const parsedENV = envSchema.safeParse({
  // Server
  port: process.env.PORT,
  node_env: process.env.NODE_ENV,

  // Database
  mongodb_uri: process.env.MONGODB_URI,
  db_name: process.env.DB_NAME,

  // JWT
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  access_token_expires_in: process.env.ACCESS_TOKEN_EXPIRES_IN,
  refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
  refresh_token_expires_in: process.env.REFRESH_TOKEN_EXPIRES_IN,

  // CORS
  admin_domain: process.env.ADMIN_DOMAIN,
  frontend_domain: process.env.FRONTEND_DOMAIN,

  // Security
  salt_round: process.env.SALT_ROUND,
  cookie_secret: process.env.COOKIE_SECRET,

  // Cloudinary
  cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,

  // Rate-limit
  rate_limit_max: process.env.RATE_LIMIT_MAX,
  rate_limit_window_ms: process.env.RATE_LIMIT_WINDOW_MS,

  // File uploads
  max_upload_file: process.env.MAX_UPLOAD_FILE,
  upload_folder: process.env.UPLOAD_FOLDER,

  // Debug
  log_level: process.env.LOG_LEVEL,
  json_limit: process.env.JSON_LIMIT,

  // TODO: ADD Stripe & SMTP
});

/*================================================ Throw if Invalid ================================================*/
if (!parsedENV.success) {
  console.error("❌ Invalid ENVironment variables");
  console.error(z.flattenError(parsedENV.error));
  process.exit(1);
}

/*================================================ Export ENV ================================================*/
const ENV = parsedENV.data;

export const env = {
  // Server
  port: ENV.port,
  node_env: ENV.node_env,

  // Database
  mongodb_uri: ENV.mongodb_uri,
  db_name: ENV.db_name,

  // JWT
  access_token_secret: ENV.access_token_secret,
  access_token_expires_in: ENV.access_token_expires_in as ms.StringValue,
  refresh_token_secret: ENV.refresh_token_secret,
  refresh_token_expires_in: ENV.refresh_token_expires_in as ms.StringValue,

  // CORS
  admin_domain: ENV.admin_domain,
  frontend_domain: ENV.frontend_domain,

  // Security
  salt_round: ENV.salt_round,
  cookie_secret: ENV.cookie_secret,

  // Cloudinary
  cloudinary_cloud_name: ENV.cloudinary_cloud_name,
  cloudinary_api_key: ENV.cloudinary_api_key,
  cloudinary_api_secret: ENV.cloudinary_api_secret,

  // Rate-limit
  rate_limit_max: ENV.rate_limit_max,
  rate_limit_window_ms: ENV.rate_limit_window_ms,

  // File uploads
  max_upload_file: ENV.max_upload_file,
  upload_folder: ENV.upload_folder,

  // Debug
  log_level: ENV.log_level,
  json_limit: ENV.json_limit,
};
