// Install react extention
// Type "rfc" to create component implicitly
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyBook } from '../redux';
import '../index.css';

const HookBookContainer = () => {
    const numOfBooks = useSelector(state => state.numOfBooks)
    const dispatch = useDispatch();

    return (
        <>
            <div className="book-container">
                <h1> Hook Container </h1>
                <h3> Number of Books - { numOfBooks } </h3>
                <button onClick={ () => dispatch(buyBook()) }> Buy Book </button>
            </div>
        </>
    )
}

export default HookBookContainer;