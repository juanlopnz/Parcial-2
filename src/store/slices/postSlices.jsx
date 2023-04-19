import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  page: 0,
  post: [],
  isLoading: false
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.isLoading = true;
    },
    setPost: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    }
  }
});

export const { startLoading, setPost } = postSlice.actions