import jwt from "jsonwebtoken";

//=================== token generation service ===================

export const userTokenService = async (userId) => {
  const payload = { id: userId };
  const secret = process.env.JWT_SECRET || "your_secret_key";
  const options = { expiresIn: "1d" }; // token expires in 1 day

  // generate and return the token
  return jwt.sign(payload, secret, options);
};
