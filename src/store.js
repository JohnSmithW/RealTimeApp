import { createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import { composeWithDevTools } from 'redux-devtools-extension';
import app from './reducers/reducers';

const socket = io('http://localhost:8010', {
  withCredentials: true,
  extraHeaders: {
    'my-custom-header': 'web',
  },
});
const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

const state = createStore(app, composeWithDevTools(applyMiddleware(socketIoMiddleware)));

state.subscribe(() => {});

export default state;
