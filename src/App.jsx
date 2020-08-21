import React, { useState } from 'react';
import ToDoList from './ToDoList'; 
import './index.css';

const App = () => {
    const [items, setItems] = useState();

    const inputItems = (event) => {
        let value = event.target.value;
        setItems(value);
    }

    const [displayItems, setDisplayItems] = useState([]);

    const showItems = () => {
        setDisplayItems((prevItems) => {
            return [...prevItems, items];
        });
        setItems("");
    }

    const deleteItem = (id) => {
        setDisplayItems((prevItems) => {
            // if return  value is true element remains in the resulting array 
            // but if the return value is false the element will be removed for the resulting array
            return prevItems.filter((currData, index) => {
                return index !== id;
            });
        });
    }

    return (
        <>
            <div className="main_div">
                <div className="sub_div">
                    <br />
                    <h1> ToDo List </h1>
                    <br />
                    <input
                        type="text"
                        placeholder="Add Items"
                        value={items}
                        onChange={inputItems} />
                    <button onClick={showItems}> + </button>

                    <ol>
                        {
                            // array.map(current value, index, full array, this)
                            // generate a new array based on your existing array
                            displayItems.map((item, index) => {
                                return <ToDoList 
                                    key = { index } 
                                    id = { index }
                                    list = { item } 
                                    onSelect = { deleteItem } />
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    );
}

export default App;