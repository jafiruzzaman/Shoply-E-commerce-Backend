/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 * @version 1.0.0
 * @file env.validation.ts
 */

import { z } from "zod";

export const envSchema = z.object({
  port: z.coerce.number().default(5000),
  node_env: z.enum(["development", "production"]).default("development"),

  // database
  mongodb_uri: z.string().optional(),
  db_name: z.string().default("Shoply"),

  // JWT
  access_token_secret: z.string().min(32),
  access_token_expires_in: z.string(),
  refresh_token_secret: z.string().min(32),
  refresh_token_expires_in: z.string(),

  // CORS
  admin_domain: z.string(),
  frontend_domain: z.string(),

  // Security
  salt_round: z.coerce.number().default(12),
  cookie_secret: z.string().min(32),

  // Cloudinary
  cloudinary_cloud_name: z.string().optional(),
  cloudinary_api_key: z.string().optional(),
  cloudinary_api_secret: z.string().optional(),

  // Rate-limit
  rate_limit_max: z.coerce.number().default(100),
  rate_limit_window_ms: z.coerce.number().default(60000),

  // File uploads
  max_upload_file: z.coerce.number(),
  upload_folder: z.string().default("Shoply"),

  // Debug
  log_level: z.string().default("debug"),
  json_limit: z.string().default("50mb"),
});
