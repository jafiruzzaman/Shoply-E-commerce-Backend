/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 * @version 1.0.0
 * @file app.ts
 */

/*================================================ Node Modules ================================================*/
import express, { type Express } from "express";
import cookieParser from "cookie-parser";
import cors, { type CorsOptions } from "cors";
import helmet from "helmet";
import morgan from "morgan";

/*================================================ Custom Modules ================================================*/
import { env } from "@config/env.config";

/*================================================ Express App ================================================*/
const app: Express = express();

/*================================================ Cors Configuration ================================================*/
const corsConfiguration: CorsOptions = {
  methods: ["POST", "GET", "PATCH", "DELETE", "PUT"],
  allowedHeaders: ["Authorization", "Content-Type", "Accept"],
  origin: [env.admin_domain, env.frontend_domain],
  maxAge: 600,
};
app.use(cors(corsConfiguration));

/*================================================ cookieParser Configuration ================================================*/
app.use(cookieParser(env.cookie_secret));

/*================================================ helmet Configuration ================================================*/
app.use(
  helmet({
    contentSecurityPolicy: true,
    crossOriginEmbedderPolicy: false,
    hsts:
      env.node_env === "production"
        ? {
            includeSubDomains: true,
            maxAge: 31536000,
            preload: true,
          }
        : false,
  })
);

/*================================================ helmet Configuration ================================================*/
app.use(morgan(env.node_env === "development" ? "dev" : "combined"));

// TODO: Add Routes Here

// TODO: Add globalErrorHandler

/*================================================ Export App ================================================*/
export { app };
