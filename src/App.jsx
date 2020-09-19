import React from 'react';
import BookContainer from './components/BookContainer';
import HookBookContainer from './components/HookBookContainer';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import './index.css';

const App = () => {
    return (
        <Provider store={Store}>
            <div className="app">
                <BookContainer />
                <HookBookContainer />
            </div>
        </Provider>
    )
}

export default App;