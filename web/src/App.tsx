import React from 'react';

import Routes from './routes';
import { UserContext } from './contexts/UserContext';
import { useAuth } from './hooks/useAuth';

function App() {
  const { user, setUser } = useAuth()
  console.log(user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes />
    </UserContext.Provider>
  );
};

export default App;
