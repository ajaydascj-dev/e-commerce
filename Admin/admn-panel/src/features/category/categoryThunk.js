import { categoryFetch } from "../../utils/axios";

export const getCategoryThunk = async (url, thunkAPI) => {
  try {
    const resp = await categoryFetch(url, {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });

    return resp.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

export const addCategoryThunk = async (url, category, thunkAPI) => {

  try {
    const resp = await categoryFetch.post(url, category, {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });

    return resp.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};
