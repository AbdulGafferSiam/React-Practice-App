import React from 'react';
import BookContainer from './BookContainer';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import './index.css';

const App = () => {
    return (
        <Provider store={Store}>
            <div className="app">
                <BookContainer />
            </div>
        </Provider>
    )
}

export default App;