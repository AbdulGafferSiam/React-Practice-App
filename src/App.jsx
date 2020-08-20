import React, { useState } from 'react';
import './index.css';

const App = () => {
    const purple = "#8e44ad";
    const newColor = "#34495e";
    
    const btnDefaultText = "Click Me";
    const btnUpdText = "Ayyo 😺"; 

    const [currBg, setBg] = useState(purple);

    const [currText, setText] = useState(btnDefaultText);

    const bgChange = () => {
        setBg(newColor);
        setText(btnDefaultText);
    }

    const btnChange = () => {
        setBg(purple);
        setText(btnUpdText);
    }

    return (
        <>
            <div style={{backgroundColor: currBg}}>
                <button onDoubleClick={btnChange} onClick={bgChange}> { currText } </button>
            </div>
        </>
    );
}

export default App;