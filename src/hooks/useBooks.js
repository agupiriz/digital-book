import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBooks from '../services/books/fetchBooks';
import { deselectBookToUpdate, removeBookStore, selectBook, selectBookToUpdate, setBooks, updateBookStore } from '../store/bookSlice';
import postBook from '../services/books/postBook';
import deleteBook from '../services/books/deleteBook';
import { useSnackbar } from 'notistack';
import updateBook from '../services/books/updateBook';

const useBooks = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.book.books);
    const bookToUpdate = useSelector((state) => state.book.selectedBookToUpdate);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { enqueueSnackbar } = useSnackbar()

    const loadBooks = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const fetchedBooks = await fetchBooks();
            if (fetchedBooks?.items)
                dispatch(setBooks(fetchedBooks?.items));
        } catch (err) {
            setError(err.message || 'Error al cargar los libros');
        } finally {
            setLoading(false);
        }
    }, [dispatch]);

    const addBook = useCallback(async (bookData) => {
        setLoading(true);
        setError(null);
        try {
            const newBook = await postBook(bookData);
            if (newBook)
                enqueueSnackbar("Libro creado", {
                    variant: "success",
                    persist: false,
                });
        } catch (err) {
            setError(err.message || 'Error al agregar el libro');
        } finally {
            setLoading(false);
        }
    }, [dispatch]);

    const removeBook = useCallback(async (bookId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await deleteBook(bookId);
            if (response) {
                dispatch(removeBookStore(response.id));
                enqueueSnackbar("Libro eliminado", {
                    variant: "success",
                    persist: false,
                });
            }
        } catch (err) {
            setError(err.message || 'Error al eliminar el libro');
        } finally {
            setLoading(false);
        }
    }, [dispatch]);

    const fetchUpdateBook = useCallback(async (bookId, bookData) => {
        setLoading(true);
        setError(null);
        try {
            const updatedBook = await updateBook(bookId, bookData);
            if (updatedBook) {
                dispatch(updateBookStore(updatedBook));
                enqueueSnackbar("Libro actualizado", {
                    variant: "success",
                    persist: false,
                });
            }
            dispatch(deselectBookToUpdate());
        } catch (err) {
            setError(err.message || 'Error al actualizar el libro');
        } finally {
            setLoading(false);
        }
    }, [dispatch]);

    const selectBookDetail = (book) => {
        dispatch(selectBook(book))
    }
    
    const doSelectBookToUpdate = (book) => {
        dispatch(selectBookToUpdate(book))
    }

    return {
        books,
        loadBooks,
        addBook,
        removeBook,
        fetchUpdateBook,
        selectBookDetail,
        doSelectBookToUpdate,
        bookToUpdate,
        loading,
        error,
    };
};

export default useBooks;