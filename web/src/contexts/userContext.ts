import { createContext } from 'react';

interface User {
    name: string,
    id: number;
    email: string;
    token: string;
};

interface UserProvider {
    user: User | undefined;
    setUser: React.Dispatch<React.SetStateAction<User | undefined>> | undefined;
};

export const UserContext = createContext<UserProvider>({ user: undefined, setUser: undefined });