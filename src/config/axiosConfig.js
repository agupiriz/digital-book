import axios from 'axios';
import ROUTES from '../routes';
import { store } from '../store/store';
const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;


const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use(
    (config) => {
        const token = store.getState().auth.token;
        debugger;

        const publicRoutes = [ROUTES.LOGIN, ROUTES.REGISTER, ROUTES.HOME, ROUTES.AUTHORS];
        const isPublicRoute = publicRoutes.includes(config.url);

        if (!isPublicRoute && token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;