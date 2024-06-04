import mongoose from "mongoose";

const categoriesModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "provide category name"],
  }
});

const categories = mongoose.model("Categories", categoriesModel);
export { categories };
