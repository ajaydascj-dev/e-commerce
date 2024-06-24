import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addCategoryThunk, getCategoryThunk } from "./categoryThunk";

const initialState = {
  isLoading: false,
  category: null,
};

// Get all categories
export const getCategories = createAsyncThunk(
  "category/allCategories",
  async (_, thunkAPI) => {
    return getCategoryThunk("/", thunkAPI);
  }
);

export const addCategory = createAsyncThunk(
  "category/add",
  async (category, thunkAPI) => {
    return addCategoryThunk("/", category, thunkAPI);
  }
);
const categorySlice = createSlice({
  name: "category",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.category = payload.data;
        state.isLoading = false;
      })

      .addCase(getCategories.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      // Adding categories
      .addCase(addCategory.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(addCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        const previousCategory = state.category;
        state.category = [payload.data, ...previousCategory];
      })

      .addCase(addCategory.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export default categorySlice.reducer;
