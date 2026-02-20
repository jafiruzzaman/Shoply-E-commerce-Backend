/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 * @version 1.0.0
 * @file env.config.ts
 */

/*================================================ Node Modules ================================================*/
import ms from "ms";
/*================================================ Custom Modules ================================================*/
import { envSchema } from "@validation/env.validation";

const parsedENV = envSchema.safeParse(process.env);
if (!parsedENV.success) {
  console.error("❌ Invalid ENVironment variables");
  console.error(parsedENV.error.message);
  process.exit(1);
}
const ENV = parsedENV.data;

/*================================================ Export ENV ================================================*/
export const env = {
  // Server
  port: ENV.port,
  node_env: ENV.node_env,

  // Cors
  admin_domain: ENV.admin_domain,
  frontend_domain: ENV.frontend_domain,

  // database
  mongodb_uri: ENV.mongodb_uri,
  db_name: ENV.db_name,

  // Jwt
  access_token_secret: ENV.access_token_secret,
  access_token_expires_in: ENV.access_token_expires_in as ms.StringValue,
  refresh_token_secret: ENV.refresh_token_secret,
  refresh_token_expires_in: ENV.refresh_token_expires_in as ms.StringValue,

  // Security
  salt_round: ENV.salt_round,
  cookie_secret: ENV.cookie_secret,

  // Rate-limit
  rate_limit_max: ENV.rate_limit_max,
  rate_limit_window_ms: ENV.rate_limit_window_ms,

  // Cloudinary
  cloudinary_cloud_name: ENV.cloudinary_cloud_name,
  cloudinary_api_key: ENV.cloudinary_api_key,
  cloudinary_api_secret: ENV.cloudinary_api_secret,

  // Debug
  log_level: ENV.log_level,

  // Json
  json_limit: ENV.json_limit,

  // Uploads
  upload_folder: ENV.upload_folder,
  max_upload_file: ENV.max_upload_file,
  
};
