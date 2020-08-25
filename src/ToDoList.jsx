import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import ReplayIcon from '@material-ui/icons/Replay';
import './index.css';

const replayIcon = {
    //cursor: "not-allowed",
    //pointerEvents: "none",
    color: "#c0c0c0",
    backgroundColor: "#ffffff"
}

const ToDoList = (props) => {
    const [line, setLine] = useState(false);
    
    const cutIt = () => {
        line ? setLine(false) : setLine(true);
    }

    return (
        <>
            <div className="todo_style">
                <span onClick={cutIt}>
                    {line ? (
                        <ReplayIcon className = "fa-times" style = {replayIcon} />
                    ) : (
                        <DeleteIcon className = "fa-times"/>
                    )}
                </span>
                <li style={
                    {
                        textDecoration: line ? "line-through" : "none",
                        color: line ? "#c0c0c0" : "#8566aa" 
                    }}>
                    {props.item}
                </li>
            </div>
        </>
    );
}

export default ToDoList;