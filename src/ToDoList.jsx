import React from 'react';
import './index.css';

const ToDoList = (props) => {
    return (
        <>
            <div className="todo_style">
                <i class="fa fa-times" aria-hidden="true" 
                    onClick={() => {
                        props.onSelect(props.id);
                    }} />
                <li> {props.list} </li>
            </div>
        </>
    );
}

export default ToDoList;