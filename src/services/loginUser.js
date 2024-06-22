import { api } from '../lib/axios';
import Cookies from 'js-cookie';

export const loginUser = async (cred) => {
    try {
        const response = await api.post('auth/jwt/create/', cred);
        const data = response.data;
        return data;
    } catch (e) {
        console.log(e);
    }
};
