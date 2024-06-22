import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = 'https://game-dash.azurewebsites.net/api/v1/';

export const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials : true
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
