import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const movieslice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
  loadMovie:(state,action)=>{
    state.info=action.payload;
  },
  removeMovie:(state,action)=>{
    state.info=null;
  }
  },
})

// Action creators are generated for each case reducer function
export const { loadMovie, removeMovie } = movieslice.actions

export default movieslice.reducer