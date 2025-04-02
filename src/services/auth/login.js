import { loginURL } from "./URLS";
import api from "../../config/axiosConfig";

const login = async (dataLogin) => {
  try {
    if (dataLogin) {
      const response = await api.post(loginURL, dataLogin);
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

export default login;