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
ReactDOM.render(
        <h1>Hello World!</h1>,
        document.getElementById('root')
      );

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
