import { createContext, useState } from 'react';

export const SocketContent = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  return (
    <SocketContent.Provider value={{ socket, setSocket }}>
      {children}
    </SocketContent.Provider>
  );
};
