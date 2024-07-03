import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPopupOpen: false,
};

const PopupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    togglePopupModal: (state) => {
      state.isPopupOpen = !state.isPopupOpen;
    },
  },
});

export const { togglePopupModal } = PopupSlice.actions;
export default PopupSlice.reducer;
