import asyncHandler from "../middlewares/asyncHandler.js";
import userServices from "../services/user.js";

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new Error("Please fill all the input fields.");
  }

  const userExist = await userServices.existingUser(email);
  if (userExist) res.status(400).json({ message : "User already exists"});

  const newUser = await userServices.userRegister(req.body);
  console.log(newUser);
//   res.status(201).json({
//     _id: newUser._id,
//     username: newUser.username,
//     email: newUser.email,
//     isAdmin: newUser.isAdmin,
//   });

});

export { createUser };
