import { api } from '../lib/axios';

export const logoutUser = async () => {
    const response = await api.post('auth/logout/');
    const data = response.data;
    return data;
};
