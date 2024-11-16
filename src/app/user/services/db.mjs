import AppError from "../../../utils/appError.mjs";
import User from "../model/userSchema.mjs";
import bcrypt from "bcrypt";
import { userTokenService } from "./common.mjs";

//=================== user register ====================

export const userRegisterDb = async (userName, email, password) => {
  const findUser = await User.findOne({ email: email });

  // check if the user already exists
  if (findUser) {
    throw new AppError(
      "User already exist",
      "Field validation error:User already exist",
      409
    );
  }

  // hash the user's password
  const hashedPassword = await bcrypt.hash(password, 10);

  //create a new user
  const createNewUser = new User({
    userName: userName,
    email: email,
    password: hashedPassword,
  });

  //save the user to the database
  await createNewUser.save();
  return createNewUser;
};

//====================== user login ========================

export const userLoginDb = async (email, password) => {
  const findUser = await User.findOne({ email: email });

  //if user not found, throw an error
  if (!findUser) {
    throw new AppError(
      "User not found",
      "Field validation error:User not found",
      404
    );
  }

  // compare the provided password with the hashed password in the database
  const comparePassword = await bcrypt.compare(password, findUser?.password);

  // if the password is incorrect, throw an error
  if (!comparePassword) {
    throw new AppError(
      "Wrong Password",
      "Field validation error:Wrong Password",
      401
    );
  }

  // generate a token using the user's ID
  const token = await userTokenService(findUser?._id);
  const userName = findUser?.userName;
  return {token,userName,};
};
