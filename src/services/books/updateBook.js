import axios from "axios";
import { booksURL } from "./URLS";

const updateBook = async (bookId, bookData) => {
  try {
    if (bookId) {
      const response = await axios.put(`${booksURL}/${bookId}`, bookData);
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

export default updateBook;