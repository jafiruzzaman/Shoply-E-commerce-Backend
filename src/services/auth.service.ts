/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 * @version 1.0.0
 * @file auth.service.ts
 */

/*================================================ Node Modules ==================================================*/

/*================================================ Custom Modules ==================================================*/
import { generateHashedPassword } from "@lib/password";
import { AuthRepository } from "repository/auth.repository";

/*================================================ Export AuthService ==================================================*/
type IRegister = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export class AuthService {
  static async register({ firstName, lastName, email, password }: IRegister) {
    // Check if user is already exist
    const existingUser = await AuthRepository.finByEmail(email);
    if (existingUser) {
      throw new Error("Email Already Exist");
    }
    // Generate Hashed-Password
    const hashedPassword = await generateHashedPassword(password);

    // Save Register Info 
    return AuthRepository.createUser({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
  }
}
