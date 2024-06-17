import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { loginUserThunk, updateUserThunk } from "./userThunk";

const initialState = {
  isLoading: false,
  user: null,
  users : null,
};

export const loginUser = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    return loginUserThunk("/auth/login",user,thunkAPI)
  }
);

export const updateUser = createAsyncThunk(
  "user/update",
  async(user ,thunkAPI) => {
    return updateUserThunk("/auth/update" ,user,thunkAPI)
  }
);


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        if(user.isAdmin){
          state.user = user;
          toast.success(`Welcome Back ${user.username}`);
        }else {
          toast.error(`You are not authorized`);
        }
       
      })

      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })

      // update user
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        // console.log(payload)
        const { user } = action.payload;
        console.log(user)
        state.user = user ;
        state.isLoading = false;
        if(action.meta.arg.password) {
          toast.success(`Password Updated Successfully`);
          state.user = null ;
          return
        }else {
          toast.success(`User Updated Successfully`);
        }
        
      })

      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
