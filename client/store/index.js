import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggingMiddleware from 'redux-logger';

import products from './products';
import categories from './categories';

const reducer = combineReducers({
  products,
  categories
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggingMiddleware));

export default store;

export * from './products';
export * from './categories';
