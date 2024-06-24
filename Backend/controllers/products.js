import asyncHandler from "express-async-handler";

const addProduct = asyncHandler(async(req,res) => {
    console.log(req.body)
})

export {addProduct}