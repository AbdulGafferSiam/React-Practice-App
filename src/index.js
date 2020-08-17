/* 
// Basic Modules : Ancient approach
// import 'react' here to use jsx
var React = require('react');
var ReactDOM = require('react-dom');
*/

// Basic Modules : Modern approach using babel
// Babel: Convert the ES6 js to the ancient format of js
// Babel: A compiler of js
import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render('what to show', 'where to show', 'callback func');
// render method accept only one jsx element
// To use multiple element, then need to wrap in one parent element
ReactDOM.render(
  <dev>
    <h1>Hello World!</h1>
    <p>This is the extended element.</p>
  </dev>,
  document.getElementById('root')
);

// In react v16 it's possible for render() to return an array of elements
/*
ReactDOM.render(
  [
    <h1>Hello World!</h1>,
    <p>This is the extended element.</p>,
    <p>This is the another extended element.</p>
  ],
  document.getElementById('root')
);
*/

// Ancient js representation of ReactDOM
// Inside the jsx
/*
ReactDom.default.render(
  React.default.createElement("h1", null, "Hello World!"),
  document.getElementById("root")
);
*/

// pure js representation
/*
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World!";
document.getElementById("root").appendChild(h1);
*/
