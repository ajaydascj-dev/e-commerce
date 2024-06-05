import asyncHandler from "express-async-handler";
import userServices from "../services/user.js";
import { generateToken } from "../utils/createToken.js";
import bcrypt from "bcrypt";

// New User
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new Error("Please fill all the input fields.");
  }

  const userExist = await userServices.existingUser(email);
  if (userExist) throw new Error("User already Exist");

  const newUser = await userServices.createUser(req.body);

  generateToken(res, newUser._id, newUser.isAdmin);

  res.status(201).json({
    _id: newUser._id,
    username: newUser.username,
    email: newUser.email,
    isAdmin: newUser.isAdmin,
  });
});

// login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("Please fill all the input fields.");
  }

  const existingUser = await userServices.existingUser(email);

  if (existingUser) {
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (isPasswordValid) {
      generateToken(res, existingUser._id, existingUser.isAdmin);

      res.status(201).json({
        _id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        isAdmin: existingUser.isAdmin,
      });
      return;
    } else {
      res.status(401);
      throw new Error("Wrong password");
    }
  }

  throw new Error("This mail doesn't have an account.Please register");
});

// Logout User
const userLogout = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(),
  });

  res.status(200).json({
    message: "Logged out successfully",
  });
});

// List all users
const listUsers = asyncHandler(async (req, res) => {
  const users = await userServices.allUser();
  res.status(200).json({
    status: "success",
    data: users,
  });
});

// Get user by id
const userById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const user = await userServices.findbyId(id);
  if (user) {
    res.json({
      status: "success",
      data: user,
    });
  } else {
    res.status(404);
    throw new Error("User not Found");
  }
});

// update user by id
const updateUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = await userServices.findbyId(id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.address = req.body.address || user.address;

    if (req.body.password) {
      const saltRounds = 10;
      //bycrypting user password
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
      user.password = hashedPassword;
    }
    const updatedUser = await user.save();
    res.json({
      data: updatedUser,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

// Delete User

const removeUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleteUser = await userServices.deleteUser(id);
  if (deleteUser.deletedCount != 0) {
    res.status(200).json({
      status: "success",
      message: "Deleted Successfully",
    });
    return;
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

export {
  registerUser,
  loginUser,
  userLogout,
  listUsers,
  userById,
  updateUser,
  removeUser,
};
