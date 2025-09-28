import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const tvslice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    loadTv: (state, action) => {
      state.info = action.payload;
    },
    removeTv: (state) => {
      state.info = null;
    },
  },
});

// Action creators
export const { loadTv, removeTv } = tvslice.actions;

export default tvslice.reducer;
