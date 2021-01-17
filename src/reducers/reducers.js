import { combineReducers } from 'redux';
import productTable from './productTable';

const app = combineReducers({
  productTable,
});

export default app;
