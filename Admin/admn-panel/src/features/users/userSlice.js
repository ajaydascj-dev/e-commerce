import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  allUsersThunk,
  loginUserThunk,
  updateUserThunk,
  updateRoleThunk,
  deleteUserThunk,
} from "./userThunk";

const initialState = {
  isLoading: false,
  user: null,
  users: null,
  slideOpened: false,
};

export const loginUser = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    return loginUserThunk("/auth/login", user, thunkAPI);
  }
);

export const updateUser = createAsyncThunk(
  "user/update",
  async (user, thunkAPI) => {
    return updateUserThunk("/auth/update", user, thunkAPI);
  }
);

export const allUsers = createAsyncThunk(
  "users/allUsers",
  async (_, thunkAPI) => {
    return allUsersThunk("/", thunkAPI);
  }
);

export const updateRole = createAsyncThunk(
  "user/roleUpdate",
  async ({ values }, thunkAPI) => {
    return updateRoleThunk(
      `/auth/update/${values.id}`,
      { isAdmin: values.isAdmin },
      thunkAPI
    );
  }
);

export const removeUser = createAsyncThunk(
  "user/delete",
  async ({ values }, thunkAPI) => {
    return deleteUserThunk(`/auth/delete/${values.id}`, thunkAPI);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.users = null;
      state.isLoading = false;
    },
    openSlide: (state) => {
      state.slideOpened = true;
    },
    closeSlide: (state) => {
      state.slideOpened = false;
    },

    setUser : (state,{payload}) => {
      console.log(payload)
      const newUser = {...payload._doc } ;
      newUser.token = payload.token
      console.log(newUser)
      if (newUser.isAdmin) {
        state.user = newUser;
        toast.success(`Welcome Back ${newUser.username}`);
      } else {
        toast.error(`You are not authorized`);
      }
       
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
        if (user.isAdmin) {
          state.user = user;
          toast.success(`Welcome Back ${user.username}`);
        } else {
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
        const { user } = action.payload;
        console.log(user);
        state.user = user;
        state.isLoading = false;
        if (action.meta.arg.password) {
          toast.success(`Password Updated Successfully`);
          state.user = null;
          return;
        } else {
          toast.success(`User Updated Successfully`);
        }
      })

      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })

      // get all users

      .addCase(allUsers.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(allUsers.fulfilled, (state, { payload }) => {
        const { users } = payload;
        state.users = users.filter((user) => user._id !== state.user._id);
        state.isLoading = false;
      })

      .addCase(allUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      //Update Role
      .addCase(updateRole.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(updateRole.fulfilled, (state, action) => {
        console.log(action.payload.user);
        toast.success("Role switched successfully");

        state.users = state.users.filter(
          (user) => user._id !== action.meta.arg.values.id
        );
        const previousUsers = state.users;
        state.users = [action.payload.user, ...previousUsers];
      })

      .addCase(updateRole.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })

      // Delete User

      .addCase(removeUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(removeUser.fulfilled, (state, action) => {
        console.log(action.payload);
        toast.success("User deleted sucessfully ");

        state.users = state.users.filter(
          (user) => user._id !== action.meta.arg.values.id
        );

        state.slideOpened = false;
      })

      .addCase(removeUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { logoutUser, openSlide, closeSlide ,setUser } = userSlice.actions;
export default userSlice.reducer;
