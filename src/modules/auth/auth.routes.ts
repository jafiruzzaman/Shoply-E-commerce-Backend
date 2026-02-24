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
} from "modules/auth/auth.controller";
import { Router } from "express";
import { authenticate } from "@middlewares/authenticate.middleware";

const router: Router = Router();

/*================================================ Public Routes ==================================================*/
router.post("/register", registerController);
router.post("/login", loginController);
/*================================================ Protected Routes ==================================================*/
router.post("/logout", authenticate, logoutController);
router.post("/refresh", authenticate, refreshTokenController);
router.post("/forgot-password", authenticate, forgotPasswordController);
router.post("/reset-password", authenticate, resetPasswordController);
router.get("/me", authenticate, getMeController);

/*================================================ Export AuthRoutes ==================================================*/
export { router as AuthRoutes };
