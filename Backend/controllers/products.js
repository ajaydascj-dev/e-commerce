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
    const result = await productServices.productAdd(req.body) ;

    res.status(201).json(
      {
        product : result
      }
    )

});

export { addProduct , generateSignature };
