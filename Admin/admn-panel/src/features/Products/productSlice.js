import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { addPrroductThunk } from "./productThunk";

const initialState = {
    isLoading : false ,
    products : [],
}

export const addProduct = createAsyncThunk(
    "product/add" ,
    async(product , thunkAPI) => {
        return addPrroductThunk('/add' , product , thunkAPI)
    }
)
const productSlice = createSlice({
    name : "products" ,
    initialState,


})


export default productSlice.reducer ;