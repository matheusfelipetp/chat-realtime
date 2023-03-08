import React, { useContext, useEffect, useRef, useState } from 'react';
import { SocketContent } from '../../context/SocketContent';

const Chat = () => {
  const { socket } = useContext(SocketContent);
  const messageRef = useRef();
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((prev) => [...prev, data]);
    });

    return () => socket.off('receive_message');
  }, [socket]);

  const handleSubmit = () => {
    const message = messageRef.current.value;

    if (message.trim()) {
      socket.emit('message', message);
      messageRef.current.value = '';
    }
  };

  return (
    <div>
      <h1>Chat</h1>
      {messageList.map((elem, index) => (
        <p key={index}>
          {elem.author}: {elem.message}
        </p>
      ))}
      <input type="text" placeholder="Mensagem" ref={messageRef} />
      <button onClick={() => handleSubmit()}>Enviar</button>
    </div>
  );
};

export default Chat;
