import React from 'react';

import useAuth from './hooks/useAuth';
import { UserContext } from './contexts/userContext';
import Routes from './routes';

function App() {
  const { user, setUser } = useAuth();

  return (
    <UserContext.Provider value={{ user, setUser } as any}>
      <Routes />
    </UserContext.Provider>
  );
};

export default App;
