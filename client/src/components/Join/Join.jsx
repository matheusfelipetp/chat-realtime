import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import { SocketContent } from '../../context/SocketContent';

const Join = () => {
  const { setSocket } = useContext(SocketContent);
  const userRef = useRef();

  const handleSubmit = async () => {
    const username = userRef.current.value;

    if (username.trim()) {
      const socket = await io.connect('http://localhost:3001');
      socket.emit('set_username', username);
      setSocket(socket);
    }
  };

  return (
    <div>
      <h1>Entre no Chat</h1>
      <input type="text" placeholder="Nome de usuário" ref={userRef} />
      <Link to="/chat" onClick={() => handleSubmit()}>
        Entrar
      </Link>
    </div>
  );
};

export default Join;
