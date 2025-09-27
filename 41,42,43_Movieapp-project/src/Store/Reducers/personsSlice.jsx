// personsSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = { persons: [] };

const personsSlice = createSlice({
  name: 'persons',
  initialState,
  reducers: {
    setPersons: (state, action) => { state.persons = action.payload; },
  },
});

export const { setPersons } = personsSlice.actions;
export default personsSlice.reducer;
