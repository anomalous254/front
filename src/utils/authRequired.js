import { api } from '../lib/axios';

export const isAuthenticated = async () => {
    const isLoggedIn = await verifyToken();
    return isLoggedIn;
};

export const verifyToken = async () => {
    try {
        const username = localStorage.getItem('userInfo');
        return username ? true : false;
    } catch (err) {
        return false;
    }
};
