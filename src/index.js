// Basic Modules : Ancient approach
// import 'react' here to use jsx
/* 
var React = require('react');
var ReactDOM = require('react-dom');
*/

// Basic Modules : Modern approach using babel
// Babel: Convert the ES6 js to the ancient format of js
// Babel: A compiler of js
import React from 'react';
import ReactDOM from 'react-dom';

// v1.1
// ReactDOM.render('what to show', 'where to show', 'callback func');
// render method accept only one jsx element
// To use multiple element, then need to wrap in one parent element
/*
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is the extended element.</p>
  </div>,
  document.getElementById('root')
);
*/

// v1.2
// In the above (v1.1) code the extra <div> will be shown after the "root" <div>
// That cause a problem for css grid or flexbox
// For this, we need to add <React.Fragment>
/*
ReactDOM.render(
  <React.Fragment>
    <h1>Hello World!</h1>
    <p>This is the extended element.</p>
  </React.Fragment>,
  document.getElementById('root')
);
*/

// v1.3
// A spacial fragment syntax
// React 16.2 also introduce a syntactical sugar for Fragments
// So, we can now replace <React.Fragment> --> <> and </React.Fragment> --> </>
/*
ReactDOM.render(
  <>
    <h1>Hello World!</h1>
    <p>This is the extended element.</p>
  </>,
  document.getElementById('root')
);
*/


// In react v16 it's possible for render() to return an array of elements
ReactDOM.render(
  [
    <h1>Hello World!</h1>,
    <p>This is the extended element.</p>,
    <p>This is the another extended element.</p>
  ],
  document.getElementById('root')
);

// Ancient js representation of ReactDOM
// Inside the jsx/ compiled by babel
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
