import { api } from '../lib/axios';
import Cookies from 'js-cookie';

export const loginUser = async (cred) => {
    try {
        const response = await api.post('auth/jwt/create/', cred);
        const data = response.data;

        // Store access token in cookies
        Cookies.set('access_token', data.access, { expires: 7 });

        return data;
    } catch (e) {
        console.log(e);
    }
};
