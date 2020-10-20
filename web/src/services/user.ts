import api from './api';

interface LoginParams {
    email: string,
    password: string,
};

export async function login(params: LoginParams, remember: boolean) {
    const { email, password } = params;

    const response = await api.post('/user/login', { email, password });
    const { token, user, error } = response.data;

    if (error)
        return { error };
    if (remember) {
        localStorage.setItem('token', JSON.stringify(token));
    };

    return { user, token }; 
};