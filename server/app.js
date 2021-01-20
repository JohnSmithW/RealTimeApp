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
const port = 8010;

io.attach(server);
io.on('connection', function (socket) {
  console.log('Socket connected: ' + socket.id);
  socket.on('action', (action) => {
    if (action.type === 'server/SAVE_AMOUNT') {
      console.log('Amount saved', action.payload);
      socket.emit('action', { type: 'SAVE_AMOUNT', payload: action.payload });
    }

    if (action.type === 'server/SAVE_PRICE') {
      console.log('price saved', action.payload);
      socket.emit('action', { type: 'SAVE_PRICE', payload: action.payload });
    }
  });
});

server.listen(port, () => console.log(`server is running on ${port}`));
