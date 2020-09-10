import React from 'react';
import { connect } from 'react-redux';
import { buyBook } from './redux';
import './index.css';

const BookContainer = (props) => {
    return (
        <>
            <div className="book-container">
                <h1> Number of Books - { props.numberOfBooks } </h1>
                <button onClick={ props.buyBook }> Buy Book </button>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        numberOfBooks: state.numOfBooks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyBook: () => {
            dispatch(buyBook());
        }
    }
}

// The connect() function connects a React component to a Redux store
export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);