import { api } from '../lib/axios';

export const chat = async (user_message, context) => {
    const response = await api.post('bot/chat/', {
        content: { role: 'user', content: user_message },
        context: context,
    });
    return response.data;
};
