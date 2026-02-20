/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 * @version 1.0.0
 * @file env.validation.ts
 */

/*================================================ Node Modules ================================================*/
import { z } from "zod";

/*================================================ Export EnvSchema ================================================*/
export const envSchema = z.object({
  port: z.coerce.number(),
  node_env: z.enum(["development", "production"]),

  // database
  mongodb_uri: z.string(),
  db_name: z.string().default("Shoply"),

  // jwt
  access_token_secret: z.string().min(32),
  access_token_expires_in: z.string(),
  refresh_token_secret: z.string().min(32),
  refresh_token_expires_in: z.string(),

  // cors
  admin_domain: z.string(),
  frontend_domain: z.string(),

  // Security
  salt_round: z.coerce.number().default(12),
  cookie_secret: z.string().min(32),

  // cloudinary
  cloudinary_cloud_name: z.string().optional(),
  cloudinary_api_key: z.string().optional(),
  cloudinary_api_secret: z.string().optional(),

  // rate-limit
  rate_limit_max: z.coerce.number().default(100),
  rate_limit_window_ms: z.coerce.number().default(60000),

  // File-uploads
  max_upload_file: z.number(),
  upload_folder: z.string().default("Shoply"),

  // Debug
  log_level: z.string().default("debug"),
  // Json
  json_limit: z.string().default("50mb"),

  // TODO: add Stripe and SMTP later
});
