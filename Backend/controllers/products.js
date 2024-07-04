import asyncHandler from "express-async-handler";
import productServices from "../services/products.js";
import BadRequestError from "../errors/bad-request.js";
import {cloudinary} from "../config/cloudinary.js"

const generateSignature = asyncHandler(async(req,res) => {
  const {folder} = req.body ;
 
  if(!folder) {
     throw new BadRequestError("Folder is required") ;
  }
 console.log(folder);
  const timestamp = Math.round((new Date).getTime() / 1000);
  const signature = cloudinary.utils.api_sign_request({
    timestamp,
    folder
  },process.env.API_SECRET_KEY);

  res.status(200).json({
    timestamp , signature
  })
})

const addProduct = asyncHandler(async (req, res) => {
  // const { product } = req.body;
  console.log(req.body)
  // const imgUpload = await cloudinary.uploader.upload(image, {
  //   folder: "products",
  //   use_filename: true,
  //   unique_filename: false,
  //   overwrite: true,
  // });

  // if(imgUpload) {
  //    newProduct.image = imgUpload. secure_url ;
  //    const result = await productServices.productAdd(newProduct) ;
  // }
});

export { addProduct , generateSignature };
