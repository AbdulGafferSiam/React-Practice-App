import React, { useState } from 'react';
import './index.css';

/* 
1. Hooks: Start from react v16.8
2. It allows you to use state and other react features without writing a class.
   Hooks are the functions which 'hook into' react state and
   lifecycle features from function components.
3. It does not work inside clases.
4. Hooks should always be used at the top level
   of the react functions.
*/

/*
useState() / hook : useState is a function which return an array of two item.
First item is 'undefined' (state object / current data) and 2nd item is a function (updated function / updated data).
console.log(useState());
*/

const App = () => {
    // Array destructuring
    let [count, setCount] = useState(0);

    const IncNum = () => {
        setCount(count + 1);
    };

    return (
        <>
            <div>
                <h1> { count } </h1>
                <button onClick={ IncNum }> Click me </button>
            </div>
        </>
    );
};

export default App;