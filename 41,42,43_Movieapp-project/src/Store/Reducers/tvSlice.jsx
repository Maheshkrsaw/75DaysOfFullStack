import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const tvslice = createSlice({
  name: 'tv',
  initialState,
  reducers: {
  loadtv:(state,action)=>{
    state.info=action.payload;
  },
  removetv:(state,action)=>{
    state.info=null;
  }
  },
})

// Action creators are generated for each case reducer function
export const { loadtv, removetv } = tvslice.actions

export default tvslice.reducer