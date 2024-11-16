import AppError from "../../utils/appError.mjs";
import { userRegisterDb, userLoginDb } from "./services/db.mjs";

//================== user register ================

export const userRegister = async (req, res) => {
  const { userName, email, password } = req.body;

  //validate required fields
  if (!userName || !email || !password) {
    throw new AppError(
      "Username, Email, and Password are required",
      "Field validation error:Username, Email, and Password are required",
      403
    );
  }

 //create new user
  const newUser = await userRegisterDb(userName, email, password);
  return res.status(201).json({
    status: "success",
    message: "User registered successfully",
    data: newUser,
  });
};

//================== user login ================

export const userLogin = async (req, res) => {

  const { email, password } = req.body;

  //validate required fields
  if (!email || !password) {
    throw new AppError(
      " Email, and Password are required",
      "Field validation error:Email, and Password are required",
      403
    );
  }

  //log in the user
  const logUser = await userLoginDb(email,password);
  return res.status(200).json({
    status: "success",
    message: "User Logged in successfully",
    data: logUser,
  });
};
