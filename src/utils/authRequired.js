import { api } from '../lib/axios';

export const isAuthenticated = async () => {
    const isLoggedIn = await verifyToken();
    return isLoggedIn;
};

export const verifyToken = async () => {
    try {
        const response = await api.post('auth/jwt/verify/');
        const valid = response.data;
        const validity = valid ? true : false;
        return validity;
    } catch (err) {
        return false;
    }
};
