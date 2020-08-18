import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let time = new Date().toLocaleTimeString().toString();
let hour = parseInt(time.split(":", 1));
let median = time.split(" ")[1].toUpperCase();
let greeting = '';
let gtStyle = {};

let h = new Date();
console.log(Date.now());

if(median === 'AM'){
  greeting = "Good Morning";
  gtStyle.color = "green";
} 
else if((hour === 12 || hour <= 7) && median === 'PM'){
  greeting = "Good Afternoon";
  gtStyle.color = "orange";
}
else{
  greeting = "Good Night";
  gtStyle.color = "black";
}

ReactDOM.render(
  <>
    <div className="main-div">
      <h1>Hello Sir, <span style={ gtStyle }> { greeting } </span></h1>
    </div>
  </>,
  document.getElementById('root')
);