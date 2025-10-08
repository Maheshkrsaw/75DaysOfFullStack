import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const Movieslice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    loadMovie: (state, action) => {
      state.info = action.payload;
    },
    removeMovie: (state, action) => {
      state.info = null;
    },
  },
});

// Action creators generated from reducers
export const { loadMovie, removeMovie } = Movieslice.actions;

export default Movieslice.reducer;
