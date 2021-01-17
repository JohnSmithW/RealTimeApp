import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import app from './reducers/reducers';

const state = createStore(app, devToolsEnhancer());

export default state;
