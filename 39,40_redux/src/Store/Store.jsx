import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from './reducers/Userreducer'
import  productReducer  from './reducers/ProductReducers'


export const store = configureStore({
  reducer: {
    userReducer:userReducer,
    productReducer:productReducer,
  },
})
