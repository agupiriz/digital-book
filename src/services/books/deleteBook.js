import axios from "axios";
import { booksURL } from "./URLS";

const deleteBook = async (bookId) => {
  try {
    if (bookId) {
      const response = await axios.delete(`${booksURL}/${bookId}`);
      if (response.status !== 200 && response.status !== 204) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return response.data;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

export default deleteBook;