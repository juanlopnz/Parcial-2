import {configureStore} from '@reduxjs/toolkit';
import { postSlice } from './slices/postSlices';

export const store = configureStore({
  reducer: {
    post: postSlice.reducer,
  }
})