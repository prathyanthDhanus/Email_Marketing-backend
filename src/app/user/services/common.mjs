import jwt from "jsonwebtoken";

//=================== token generation service ===================

export const userTokenService = async (userId) => {
  const payload = { id: userId };
  const secret = process.env.USERSECRET_KEY;
  const options = { expiresIn: "1d" }; // token expires in 1 day

  // generate and return the token
  return jwt.sign(payload, secret, options);
};
