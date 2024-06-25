import asyncHandler from "express-async-handler";
import productServices from "../services/products.js";
import { cloudinary } from "../config/cloudinary.js";
const addProduct = asyncHandler(async (req, res) => {
  const { image, ...newProduct } = req.body;

  const imgUpload = await cloudinary.uploader.upload(image, {
    folder: "products",
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  });

  if(imgUpload) {
     newProduct.image = imgUpload. secure_url ;
     const result = await productServices.productAdd(newProduct) ;
  }
});

export { addProduct };
