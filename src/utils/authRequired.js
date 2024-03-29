import { api } from '../lib/axios';

export const isAuthenticated = async () => {
    const isLoggedIn = await verifyToken();
    return isLoggedIn;
};

export const verifyToken = async () => {
    try {
        return false;
    } catch (err) {
        return false;
    }
};
