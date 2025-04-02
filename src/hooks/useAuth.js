import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/authSlice';

const useAuth = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const token = useSelector((state) => state.auth.token);

    const doLogin = (loginData) => {
        dispatch(login(loginData));
    };

    const doRegister = (loginData) => {
        dispatch(login(loginData));
    };

    const doLogout = () => {
        dispatch(logout());
    };

    return {
        doLogin,
        doLogout,
        doRegister,
        isAuthenticated,
        token,
    };
};

export default useAuth;