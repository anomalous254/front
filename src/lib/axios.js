import axios from "axios";

const baseURL = "https://api-nyandolabs.up.railway.app/api/v1/";

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
