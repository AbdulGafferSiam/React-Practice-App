/* 
// Basic Modules : Ancient approach
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
