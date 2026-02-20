/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 * @version 1.0.0
 * @file auth.routes.ts
 */

/*================================================ Node Modules ==================================================*/
import {
  forgotPasswordController,
  getMeController,
  loginController,
  logoutController,
  refreshTokenController,
  registerController,
  resetPasswordController,
} from "@controller/auth.controller";
import { Router, type Request, type Response } from "express";

const router: Router = Router();

/*================================================ Public Routes ==================================================*/
router.post("/register", registerController);
router.post("/login", loginController);
/*================================================ Protected Routes ==================================================*/
// TODO: add Authenticate middleware
router.post("/logout", logoutController);

router.post("/refresh", refreshTokenController);
router.post("/forgot-password", forgotPasswordController);
router.post("/reset-password", resetPasswordController);
router.get("/me", getMeController);

/*================================================ Export AuthRoutes ==================================================*/
export { router as AuthRoutes };
