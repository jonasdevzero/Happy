import React, { createContext } from 'react';

interface UserContextProps {
    user?: {},
    setUser?: React.Dispatch<React.SetStateAction<{}>>
}

export const UserContext = createContext<UserContextProps>({});
