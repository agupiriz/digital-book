import { registerURL } from "./URLS";
import api from "../../config/axiosConfig";

const register = async (usrData) => {
  try {
    if (usrData) {
      const response = await api.post(registerURL, usrData);
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

export default register;