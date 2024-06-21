import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = 'http://127.0.0.1:8000/api/v1/';

export const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        const token = Cookies.get('access_token');
        if (token) {
            config.headers.Authorization = `JWT ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
