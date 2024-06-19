import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAlertModalOpen : false 
}

const alertModalSlice = createSlice({
    name : "alert",
    initialState ,
    reducers : {
        toggleAlertModal: (state) => {
            state.isAlertModalOpen = !state.isAlertModalOpen ;
          },
    }
})

export const { toggleAlertModal } = alertModalSlice.actions;
export default alertModalSlice.reducer;