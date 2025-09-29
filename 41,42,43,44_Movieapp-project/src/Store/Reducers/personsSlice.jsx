// path: 41,42,43,44_Movieapp-project/src/Store/Reducers/personsSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null, // single person details
};

export const personsSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    loadperson: (state, action) => {
      state.info = action.payload;
    },
    removeperson: (state) => {
      state.info = null;
    },
  },
});

export const { loadperson, removeperson } = personsSlice.actions;

export default personsSlice.reducer;
