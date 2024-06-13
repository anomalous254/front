import { api } from "../lib/axios"

export const loginUser = async (cred) => {
    const response = await api.post('auth/jwt/create/',cred)
    const data = response.data
    return data
}