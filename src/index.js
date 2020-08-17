import React from 'react';
import ReactDOM from 'react-dom';

const firstname = 'Siam';
const lastname = 'Ahmed';

// Using Expression 
/*
ReactDOM.render(
  <>
    <h1>My name is { firstname } { lastname }</h1>
  </>,
  document.getElementById('root')
);
*/

// Using concatination
/*
ReactDOM.render(
  <>
    <h1>My name is { firstname + " " + lastname }</h1>
  </>,
  document.getElementById('root')
);
*/

// Template Literals using backtick
ReactDOM.render(
  <>
    <h1>My { ` name is ${firstname} ${lastname}` }</h1>
  </>,
  document.getElementById('root')
);

