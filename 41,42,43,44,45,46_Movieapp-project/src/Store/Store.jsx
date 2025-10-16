import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './Reducers/Movieslice';
import tvReducer from './Reducers/tvSlice';
import personReducer from './Reducers/personsSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    tv: tvReducer,
    persons: personReducer,
  },
});
