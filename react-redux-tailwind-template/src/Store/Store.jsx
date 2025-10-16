import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/CounterSlice.jsx'   // ✅ fixed path

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
