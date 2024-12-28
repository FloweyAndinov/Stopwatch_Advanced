import { configureStore } from '@reduxjs/toolkit';
import timesReducer from './timesSlice';

const store = configureStore({
  reducer: {
    times: timesReducer, // Add all your reducers here
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;