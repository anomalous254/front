import Cookies from 'js-cookie';
import { api } from '../lib/axios';

export const verifyToken = async () => {
    try {
        const token = Cookies.get('access');
        if (!token) {
            return false;
        }
        const response = await api.post('auth/jwt/verify/', { token });
        const valid = response.data;
        const validity = valid ? true : false;
        return validity;
    } catch (err) {
        return false;
    }
};

export const isAuthenticated = async () => {
    const isLoggedIn = await verifyToken();
    return isLoggedIn;
};
