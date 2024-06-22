import { api } from '../lib/axios';
import Cookies from 'js-cookie';

export const logoutUser = async () => {
    const response = await api.post('auth/logout/');
    const data = response.data;
    Cookies.remove('access_token')
    return data;
};
