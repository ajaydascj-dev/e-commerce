import { products } from "../models/Products.js";
import asyncHandler from "express-async-handler";


// Add Product 

const productAdd = asyncHandler(async (data) => {
   console.log(data)
    const newProduct = new products(data);
    const result = await newProduct.save();
    console.log(result)
    return result;
  });


  export default {productAdd}