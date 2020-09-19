// Install react extention
// Type "rfc" to create component implicitly
import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyBook } from '../redux';
import '../index.css';

const HookBookContainer = () => {
    const numOfBooks = useSelector(state => state.numOfBooks)
    const dispatch = useDispatch();

    const [input, setInput] = useState(1);

    const onChangeHandler = (event) => {
        const val = event.target.value;
        setInput(val);
    }

    return (
        <>
            <div className="book-container">
                <h1> Hook Container </h1>
                <h3> Number of Books - { numOfBooks > 0 ? numOfBooks : 0 } </h3>
                <input type="text" value={ input } onChange = { onChangeHandler } />
                <button onClick={ () => {
                    if (numOfBooks > 0 && numOfBooks >= input) {
                        dispatch(buyBook(input));
                        setInput(1);
                    }
                    
                } }> Buy Book </button>
                {
                    numOfBooks < 1 ? <p style={{color:"red"}}> Book is empty </p> : null
                }
                {
                    numOfBooks < input ? <p style={{color:"red"}}> Not enough book in store </p> : null
                }
            </div>
        </>
    )
}

export default HookBookContainer;