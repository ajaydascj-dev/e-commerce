import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  user: null,
};

export const loginUser = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    console.log(`Logine user ${user}`)
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,
});

export default userSlice.reducer;
