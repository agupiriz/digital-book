import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  selectedBook: null,
  selectedBookToUpdate: null
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBookStore: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
    updateBookStore: (state, action) => {
      const index = state.books.findIndex(book => book.id === action.payload);
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    },
    selectBook: (state, action) => {
      state.selectedBook = action.payload;
    },
    deselectBook: (state) => {
      state.selectedBook = null;
    },
    selectBookToUpdate: (state, action) => {
      state.selectedBookToUpdate = action.payload;
    },
    deselectBookToUpdate: (state) => {
      state.selectedBookToUpdate = null;
    },
    setBooks: (state, action) => {
      state.books = action.payload;
    },
  },
});

export const { addBook, removeBookStore, updateBookStore, selectBook, deselectBook, setBooks, selectBookToUpdate, deselectBookToUpdate } = bookSlice.actions;

export default bookSlice.reducer;