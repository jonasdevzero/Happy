import axios from 'axios';

const api = axios.create({
    baseURL: 'https://happy-backend-devzero.herokuapp.com',
});

export default api;
