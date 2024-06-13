import { api } from "../lib/axios";

export const registerUser = async (credentials) => {
  const jsonData = JSON.stringify(credentials);
  const response = await api.post("auth/users/", jsonData);
  const data = response.data;
  return data;
};
