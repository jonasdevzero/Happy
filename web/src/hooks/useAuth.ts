import { useState, useEffect } from 'react';
import api from '../services/api';

export default function useAuth() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token') as string);

        if (token) {
            api.post('/user/auth', { token })
                .then(resp => {
                    setUser(resp.data.user)
                })
        }
    }, [])

    return { user, setUser }
}