import { productFetch } from "../../utils/axios";

export const addPrroductThunk = async(url , product ,thunkAPI) => {
    try {
        const resp = await productFetch.post(url , product , {
            headers: {
                Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
              },
        })

        return resp.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
}