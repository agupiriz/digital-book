import axios from "axios";
import { booksURL } from "./URLS";

const fetchBooksByTitle = async (title) => {
    try {
        const filterURL = `${booksURL}/?title=${title}`;
        const response = await axios.get(filterURL);
        if (response.status !== 200 && response.status !== 201) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export default fetchBooksByTitle;