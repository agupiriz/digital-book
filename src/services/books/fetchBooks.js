import axios from "axios";
import { booksURL } from "./URLS";

const fetchBooks = async () => {
    try {
        const response = await axios.get(booksURL);
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