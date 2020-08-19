import React from 'react';
import './index.css';

const SlotM = () => {
    let x = ['😇', '😍', '😃'];
    let y = ['😇', '😍', '😃'];
    let z = ['😇', '😍', '😃'];

    let a = Math.floor(Math.random() * 3); 
    let b = Math.floor(Math.random() * 3);
    let c = Math.floor(Math.random() * 3);

    if ((a === b) && (a === c)) {
        return (
            <>
                <div className="slot">
                    <h1> {x[a]} {y[b]} {z[c]} </h1>
                    <h1> This is matching </h1>
                    <hr />
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="slot">
                    <h1> {x[a]} {y[b]} {z[c]} </h1>
                    <h1> This is not matching </h1>
                    <hr />
                </div>
            </>
        );
    }
}

// :slot_machine:
const App = () => {
    return (
        <>
            <h1 className="heading_style">
                🎰 Welcome to {" "}
                <span style={{ fontWeight: "bold", backgroundColor: "#fff" }}> Slot machine game </span> 🎰
            </h1>
            <SlotM />
            <SlotM />
            <SlotM />
            <SlotM />
        </>
    );
}

export default App;