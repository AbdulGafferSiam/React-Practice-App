import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import './index.css';

const App = () => {
    const [val, setVal] = useState(0);

    const btnLeft = () => {
        setVal(val + 1);
    }

    const btnRight = () => {
        setVal((prevValue) => {
            if (prevValue === 0) {
                alert("Value Can not be negetive.");
                return prevValue;
            } else {
                return prevValue - 1;
            }
        });
    }

    return (
        <>
            <div className="main_div">
                <div className="sub_div">
                    <h1> { val } </h1>
                    <br />
                    <button onClick={btnLeft}> <AddIcon /> </button>
                    <button onClick={btnRight}> <DeleteIcon /> </button>
                </div>
            </div>
        </>
    );
}

export default App;