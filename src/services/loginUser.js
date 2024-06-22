import { api } from '../lib/axios';
import Cookies from 'js-cookie';

export const loginUser = async (cred) => {
    try {
        const response = await api.post('auth/jwt/create/', cred);
        const data = response.data;

        // Store access token in cookies
        Cookies.set('access_token', data.access, {secure: true, sameSite : "None" ,expires: 1 });

        return data;
    } catch (e) {
        console.log(e);
    }
};
