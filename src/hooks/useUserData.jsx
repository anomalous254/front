import React from 'react';
import { getUser } from '../services/getUser';

export const useUserData = () => {
    const [user, setUser] = React.useState({});

    React.useEffect(() => {
        const getData = async () => {
            try {
                const response = await getUser();
                setUser(response);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setUser(null);
            }
        };

        getData();
    }, []);

    return user || [];
};
