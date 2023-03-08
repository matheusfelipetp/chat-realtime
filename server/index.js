import express from 'express';
import http from 'http';
import socketio from 'socket.io';

const app = express();
const server = http.createServer(app);

const io = socketio(server, { cors: { origin: 'http://localhost:5173' } });

const PORT = 3001;

io.on('connection', (socket) => {
  socket.on('disconnect', (reason) => {
    console.log('Usuário desconectado:', socket.id);
  });

  socket.on('set_username', (username) => {
    console.log('Usuário conectado:', socket.id);
    socket.data.username = username;
  });

  socket.on('message', (message) => {
    io.emit('receive_message', {
      message,
      authorId: socket.id,
      author: socket.data.username,
    });
  });
});

server.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
