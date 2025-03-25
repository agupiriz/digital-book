import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthors } from '../store/authorSlice';
import fetchAuthors from '../services/authors/fetchAuthors';

const useAuthors = () => {
    const dispatch = useDispatch();
    const authors = useSelector((state) => state.author.authors);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadAuthors = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const fetchedAuthors = await fetchAuthors();
            if (fetchedAuthors)
                dispatch(setAuthors(fetchedAuthors));
        } catch (err) {
            setError(err.message || 'Error al cargar los libros');
        } finally {
            setLoading(false);
        }
    }, [dispatch]);


    return {
        authors,
        loadAuthors,
        loading,
        error,
    };
};

export default useAuthors;