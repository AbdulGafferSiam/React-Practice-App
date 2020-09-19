import BookReducer from './book/BookReducer';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux'; 

// log of prev state, action and present state shown on console
const Store = createStore(BookReducer, applyMiddleware(logger));

export default Store;