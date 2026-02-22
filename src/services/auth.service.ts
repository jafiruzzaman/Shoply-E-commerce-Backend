/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 * @version 1.0.0
 * @file auth.service.ts
 */

/*================================================ Node Modules ==================================================*/

/*================================================ Custom Modules ==================================================*/
import { signAccessToken, signRefreshToken } from "@lib/generate-token";
import { comparePassword, generateHashedPassword } from "@lib/password";
import { AuthRepository } from "repository/auth.repository";

/*================================================ Export AuthService ==================================================*/
interface ILogin {
  email: string;
  password: string;
}
interface IRegister extends ILogin {
  firstName: string;
  lastName: string;
}
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

  // login
  static async login({ email, password }: ILogin) {
    // check if user exist or not
    const userInDB = await AuthRepository.finByEmail(email);
    if (!userInDB) {
      throw new Error("User Not Found");
    }
    // Check Password
    const isMatch = comparePassword(userInDB._id.toString(), password);
    if (!isMatch) {
      throw new Error("Invalid User credentials");
    }
    // Generate Token and save it to database
    const refreshToken = signRefreshToken(
      userInDB._id.toString(),
      userInDB.role
    );
    console.log("refresh token", refreshToken);

    const accessToken = signAccessToken(userInDB._id.toString(), userInDB.role);
    const user = await AuthRepository.updateUserById(userInDB._id.toString(), {
      refreshToken,
    });
    console.log(`user ${user}`);

    return { user, accessToken, refreshToken };
  }
}
