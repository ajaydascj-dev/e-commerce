import asyncHandler from "express-async-handler";
import categoryServices from "../services/categories.js";

const newCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  if (!name) throw new Error("Category name is required");
  console.log(name)
  const newCategory = await categoryServices.addCategory(req.body);

  res.status(201).json({
    data : newCategory,
  });
});

const listCategories = asyncHandler(async (req, res) => {
  const categories = await categoryServices.allCategory();

  res.status(200).json({
    data : categories,
  });
});

const removeCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const deleteCategory = await categoryServices.deleteCategory(id);
  if (deleteCategory.deletedCount != 0) {
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

const updateCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const category = await categoryServices.findbyId(id);

  if (category) {
    category.name = req.body.name || user.name;
    const updatedCategory = await category.save();
    res.json({
      data: updatedCategory,
    });
  } else {
    res.status(404);
    throw new Error("category Not Found");
  }
});
export { newCategory, listCategories, removeCategory , updateCategory};
