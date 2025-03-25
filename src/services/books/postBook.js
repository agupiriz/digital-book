import { booksURL } from "./URLS";
import api from "../../config/axiosConfig";

const postBook = async (bookData) => {
  try {
    if (bookData) {
      const response = await api.post(booksURL, bookData);
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