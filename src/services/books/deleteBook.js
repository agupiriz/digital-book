import { booksURL } from "./URLS";
import api from "../../config/axiosConfig";

const deleteBook = async (bookId) => {
  try {
    if (bookId) {
      const response = await api.delete(`${booksURL}/${bookId}`);
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