import mongoose from "mongoose";

const userModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    address: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    isAdmin: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const user = mongoose.model("Users", userModel);

export { user };
