import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ToDoList from './ToDoList';
import './index.css';

const App = () => {
    const [item, setItem] = useState("");
    const itemEvent = (event) => {
        setItem(event.target.value);
    }

    const [items, setItems] = useState([]);
    const addItem = () => {
        if (item === "") return;
        setItems((preValue) => {
            return [...preValue, item];
        });
        setItem("");
    }

    const keyPressHandler = (event) => {
        if (event.charCode === 13) {
            return addItem();
        }
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>TODO LIST</h1>
                    <br />
                    <input
                        type="text"
                        placeholder="Add items"
                        onChange={itemEvent}
                        onKeyPress={keyPressHandler}
                        value={item}
                        tabIndex="0"
                    />
                    <Button
                        className="btn_add"
                        onClick={addItem}>
                        <AddIcon />
                    </Button>
                    <br />
                    <div className="item_list">
                        <ol>
                            {

                                items.map((item, index) => {
                                    return <ToDoList
                                        key={index}
                                        id={index}
                                        item={item}
                                    />
                                })
                            }
                        </ol>
                    </div>
                    <br />
                </div>
            </div>
        </>
    );
}

export default App;