import asyncHandler from "express-async-handler";
import { categories } from "../models/categories.js";
import mongoose from "mongoose";

const addCategory = asyncHandler(async (data) => {
  const { name } = data;
  const newCategory = new categories({ name });
  const result = await newCategory.save();
  return result;
});

const allCategory = asyncHandler(async () => {
  const result = categories.find({});
  return result;
});

const findbyId = asyncHandler(async (id) => {
  const result = categories.findById(id);
  return result;
});
const deleteCategory = asyncHandler(async (id) => {
  const result = categories.deleteOne({ _id: id });
  return result;
});
export default { addCategory, allCategory, deleteCategory, findbyId };
