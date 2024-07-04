import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  saleprice: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    required: [true, "image is required"],
  },
  ads: {
    type: String,
  },
  specifications: [
    {
      key: {
        type: String,
        required: [true, "key is required"],
      },
      value: {
        type: String,
        required: [true, "value is required"],
      },
    },
  ],
  description: {
    type: String,
    required: [true, "description is required"],
  },
  categoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
    required: [true, "category id is required"],
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: [true, "category id is required"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

const products = mongoose.model("Products", productSchema);

export { products };
