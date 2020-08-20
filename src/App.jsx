import React, { useState } from 'react';
import './index.css';

const App = () => { 
    // get the inputText from the onChange event
    const [inputText, setInputText] = useState('');
    const inputEvent = (event) => {
        let val = event.target.value;
        setInputText(val);
    }

    // set the inputText after onClick event
    const [btnSendText, setBtnSendText] = useState('');
    const btnEvent = () => {
        setBtnSendText(inputText);
    }
    // In a controlled component, form data is handled by a react component
    // The alternative is uncontrolled component, where form data is handled by the DOM itself
    // the input "value" is a single source of truth
    // So, in the value field and onChange fields value must need to be same
    return (
        <>
            <div>
                <h1> Input: {" " + inputText} </h1>
                <h1> Button: {" " + btnSendText} </h1>
                <input type="text" 
                    placeholder="Enter Your Name" 
                    onChange={inputEvent} 
                    value={inputText} />
                <button onClick={btnEvent}> Click Me </button>
            </div>
        </>
    );
}

export default App;