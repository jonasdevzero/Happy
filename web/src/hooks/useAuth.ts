import { useState, useEffect } from 'react';
import api from '../services/api';

interface User {
    name: string,
    id: number;
    email: string;
    token: string;
};

export function useAuth() {
    const [user, setUser] = useState<User>()

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token') as string);
        if (token) {
            api.post('/user/auth', { token }).then(response => {
                const { user: { id, name, email } } = response.data;
                setUser({ id, name, email, token });
            })
        }
    }, []);

    return { user, setUser };
};