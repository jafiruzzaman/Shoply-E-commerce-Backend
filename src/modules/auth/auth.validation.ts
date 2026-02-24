/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 * @version 1.0.0
 * @file env.validation.ts
 */

/*================================================ Node Modules ==================================================*/
import { z } from "zod";

export const registerSchema = z.object({
  firstName: z.string().min(3, "Fist Name must be at-least 3 characters."),
  lastName: z.string().min(3, "Fist Name must be at-least 3 characters."),
  email: z.email(),
  password: z.string().min(8, "password must be at-least 8 characters"),
});

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8, "password must be at-least 8 characters"),
});
