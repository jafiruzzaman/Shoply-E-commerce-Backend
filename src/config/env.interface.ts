/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 * @version 1.0.0
 * @file env.interface.ts
 */

/*================================================ Export Env Interface ================================================*/
export interface IEnv {
  // Server
  port: number;
  node_env: string | "development" | "production";

  // Database
  mongodb_uri: string;
  db_name: string | "shoply";

  // JWT
  access_token_secret: string;
  access_token_expires_in: string | number;
  refresh_token_secret: string;
  refresh_token_expires_in: string | number;

  // CORS
  admin_domain: string;
  frontend_domain: string;

  // Security
  salt_round: number;
  cookie_secret: string;

  // Cloudinary
  cloudinary_cloud_name: string;
  cloudinary_api_key: string;
  cloudinary_api_secret: string;

  // rate-limit
  rate_limit_max: number;
  rate_limit_window_ms: number;

  // stripe
  stripe_success_url: string;
  stripe_cancel_url: string;
  stripe_secret_key: string;
  stripe_webhooK_secret: string;

  // uploads
  max_file_size: number;
  upload_folder: string;

  // debug
  log_level: string | "debug";
}
