import { user } from "../models/user.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";

//Checking if user exist
const existingUser = asyncHandler(async (email) => {
  const result = await user.findOne({ email });
  return result;
});

const findbyId = asyncHandler(async (id) => {
  const result = await user.findById({_id : id});
  return result;
});
// Register new user
const createUser = asyncHandler(async (data) => {
  const { username, email,address, password  } = data;
  const saltRounds = 10;
  //bycrypting user password
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const newUser = new user({ username, email,address, password: hashedPassword });
  const result = await newUser.save();
  return result;
});

// Get all users

const allUser = asyncHandler(async () => {
  const result = await user.find({}).select("-password");
  return result;
});

const deleteUser = asyncHandler(async (id) => {
  const result = await user.deleteOne({_id : id});
  return result ;
})
export default { existingUser, createUser, allUser , findbyId , deleteUser};
