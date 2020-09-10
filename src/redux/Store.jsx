import BookReducer from './book/BookReducer';
import { createStore } from 'redux'; 

const Store = createStore(BookReducer);

export default Store;