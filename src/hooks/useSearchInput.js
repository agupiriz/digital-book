import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchBooksByTitle from '../services/books/fetchBooksByTitle';
import { setBooks } from '../store/bookSlice';

const useSearchInput = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [searchTerm]);
 
    useEffect(() => {
        filterBooks(debouncedSearchTerm);
    }, [debouncedSearchTerm]);

    const filterBooks = useCallback(async (title) => {
        setSearchResults(true);
        setError(null);
        try {
            const filteredBooks = await fetchBooksByTitle(title);
            if (filteredBooks)
                dispatch(setBooks(filteredBooks));
        } catch (err) {
            setError(err.message || 'No se encontro libros');
        } finally {
            setLoadingSearch(false);
        }
    }, [dispatch]);

    const searchInput = (value) => {
        if (value)
            setLoadingSearch(true);
        setSearchTerm(value);
    };

    return {
        searchInput,
        loadingSearch,
        searchResults
    };
};

export default useSearchInput;