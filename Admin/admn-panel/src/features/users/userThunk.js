import userFetch from "../../utils/axios";
import { logoutUser } from "./userSlice";

export const loginUserThunk = async (url , user , thunkAPI) => {
    try {
        const resp = await userFetch.post(url, user);
        return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    
}

export const updateUserThunk = async(url ,user , thunkAPI) => {
    try{
        const resp = await userFetch.put(url , user ,{
           headers : {
            Authorization : `Bearer ${thunkAPI.getState().user.user.token}`
           }
        } )
        return resp.data
    }catch(error) {
      if(error.response.status === 401 ){
        thunkAPI.dispatch(logoutUser());
        return thunkAPI.rejectWithValue("UnAuthorized Logging out ....")
      }
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
}

export const allUsersThunk = async(url, thunkAPI) => {
  try {
    const resp = await userFetch.get(url ,{
      headers : {
       Authorization : `Bearer ${thunkAPI.getState().user.user.token}`
      }
   } )
   return resp.data;

  }catch(error) {
    console.log(error)
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
}

const updateRoleThunk = async(url,role,thunkAPI) => {
  console.log(url,role,thunkAPI)
  try {
  //   const resp = await userFetch.put(url,role ,{
  //     headers : {
  //      Authorization : `Bearer ${thunkAPI.getState().user.user.token}`
  //     }
  //  } )
  //  return resp.data;

  }catch(error) {
    console.log(error)
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
}