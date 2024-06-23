import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const intialState = {
    isLoading : false,
    category : null ,

}

const categorySlice = createSlice({
    namme : "category" ,
    initialState ,
    
})