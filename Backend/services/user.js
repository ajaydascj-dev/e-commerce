import { user } from "../models/user.js";
import asyncHandler from "../middlewares/asyncHandler.js";

//Checking if user exist
const existingUser = async (email) => {
  const result = await user.findOne({ email });
  return result;
};

// Register new user
const userRegister = async (data) => {
  const { username, email, password } = data;
  const newUser = new user({ username, email, password });
  const result = await newUser.save();
  return result;
};

export default { existingUser, userRegister };
