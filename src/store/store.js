import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import bookSlice from './bookSlice';
import authorSlice from './authorSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    book: bookSlice,
    author: authorSlice,
  },
});