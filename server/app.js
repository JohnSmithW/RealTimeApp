const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:9000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true,
  },
});

const fs = require('fs');
const port = 8010;

// fs.readFile('users.json', function (err, data) {
//   const users = JSON.parse(data);
//   users.push({ id: 0, x: 0, y: 0 });

//   fs.writeFile('users.json', JSON.stringify(users), (err) => {
//     if (err) throw err;
//   });
// });

io.attach(server);
io.on('connection', function (socket) {
  // users.push({ id: socket.id });

  socket.emit('action', { type: 'CONNECT', payload: { id: socket.id } });
  io.sockets.emit('action', { type: 'CONNECT_USERS', payload: { id: socket.id, x: 0, y: 0 } });

  socket.on('action', (action) => {
    if (action.type === 'server/SAVE_AMOUNT') {
      io.sockets.emit('action', { type: 'SAVE_AMOUNT', payload: action.payload });
    }

    if (action.type === 'server/SAVE_PRICE') {
      io.sockets.emit('action', { type: 'SAVE_PRICE', payload: action.payload });
    }

    if (action.type === 'server/SEND_COORDINATES') {
      io.sockets.emit('action', { type: 'GET_COORDINATES', payload: action.payload });
    }
  });
});

server.listen(port, () => console.log(`server is running on ${port}`));
