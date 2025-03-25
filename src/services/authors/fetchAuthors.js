import axios from "axios";
import { authorsURL } from "./URLS";

const fetchAuthors = async () => {
    try {
        const response = await axios.get(authorsURL);
        if (response.status !== 200 && response.status !== 201) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export default fetchAuthors;