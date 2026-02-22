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
import { AuthRoutes } from "@routes/auth.routes";

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

/*================================================ morgan Configuration ================================================*/
app.use(morgan(env.node_env === "development" ? "dev" : "combined"));

/*================================================ Express Json Configuration ================================================*/
app.use(
  express.json({
    limit: env.json_limit,
  })
);

/*================================================ Express Static Configuration ================================================*/
app.use(express.static("public"));

// TODO: Add Routes Here
app.use("/api/v1/auth", AuthRoutes);
// TODO: Add globalErrorHandler

/*================================================ Export App ================================================*/
export { app };
