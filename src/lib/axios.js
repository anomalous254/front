import axios from "axios";

const baseURL = 'https://game-dash.azurewebsites.net/api/v1/';

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
