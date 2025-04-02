import { booksURL } from "./URLS";
import api from "../../config/axiosConfig";


const fetchBooks = async () => {
    try {
        const response = await api.get(booksURL);
        if (response.status !== 200 && response.status !== 201) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export default fetchBooks;