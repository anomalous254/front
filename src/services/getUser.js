import { api } from "../lib/axios";

export const getUser = async () => {
  const response = await api.get(`user-info/`);
  return response.data;
};


export const getUserMe = async () => {
  const response = await api.get(`auth/users/me`);
  return response.data;
};