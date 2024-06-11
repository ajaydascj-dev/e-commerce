import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import userFetch from "../../utils/axios";

const initialState = {
  isLoading: false,
  user: null,
};

export const loginUser = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    try {
      const resp = await userFetch.post("/auth/login", user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true ;
      })

      .addCase(loginUser.fulfilled, (state, {payload}) => {
        const {user} = payload;
        state.isLoading = false ;
        state.user = user ;
        toast.success(`Hello There ${user.username}`)
      })

      .addCase(loginUser.rejected, (state , {payload}) => {
            state.isLoading = false ;
            toast.error(payload)
      });
  },
});

export default userSlice.reducer;
