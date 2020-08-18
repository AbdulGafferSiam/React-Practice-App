import React from 'react';
import './index.css';

function App() {
    // new Date (year, month, day, hours, minutes, seconds, millis)
    let currDate = new Date();
    let hour = currDate.getHours();

    let greeting = '';
    let gtStyle = {};

    if(hour < 12) {
        greeting = "Good Morning";
        gtStyle.color = "green";
    } 
    else if(12 <=hour && hour <= 19) {
        greeting = "Good Afternoon";
        gtStyle.color = "orange";
    }
    else{
        greeting = "Good Night";
        gtStyle.color = "black";
    }
    return (
        <>
            <div className="main-div">
                <h1>Hello Sir, <span style={ gtStyle }> { greeting } </span></h1>
            </div>
        </>
    ); 
}

export default App;