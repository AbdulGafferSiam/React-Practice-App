import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Siam';

// Javascript Expression
// Expression is nothing but a combination of operand and operators
// In curly bracks we only can use expression not statements
ReactDOM.render(
  <>
    <h1>My name is { name }</h1>
    <p>Addition: { 2 + 3 }</p>
    <p>Random number: { Math.random() }</p>
  </>,
  document.getElementById('root')
);

