import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authors: []
};

export const authorSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {
    setAuthors: (state, action) => {
      state.authors = action.payload;
    },
  },
});

export const { setAuthors } = authorSlice.actions;

export default authorSlice.reducer;