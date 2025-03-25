import axios from "axios";
import { booksURL } from "./URLS";

const postBook = async (bookData) => {
  try {
    if (bookData) {
      const response = await axios.post(booksURL, bookData);
      if (response.status !== 200 && response.status !== 201) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return response.data;
    }
    return null
  } catch (error) {
    throw error;
  }
};

export default postBook;