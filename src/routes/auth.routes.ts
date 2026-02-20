/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 * @version 1.0.0
 * @file auth.routes.ts
 */

/*================================================ Node Modules ==================================================*/
import { Router, type Request, type Response } from "express";

const router: Router = Router();

/*================================================ Public Routes ==================================================*/
router.post("/register", (_: Request, res: Response) => {
  res.status(201).json({
    success: true,
    message: "User registered successfully",
  });
});
router.post("/login", (_: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "User loggedIn successfully",
  });
});
/*================================================ Protected Routes ==================================================*/
router.post("/logout", (_: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "User logout successfully",
  });
});

router.post("/refresh", (_: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "token refresh successfully",
  });
});
router.post("/forgot-password", (_: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "send Resent link to your email",
  });
});
router.post("/reset-password", (_: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Password reset successful",
  });
});
// TODO: add Authenticate middleware
router.get("/me", (_: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Get Current User",
  });
});

/*================================================ Export AuthRoutes ==================================================*/
export { router as AuthRoutes };
