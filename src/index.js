import React from 'react';
import ReactDOM from 'react-dom';

const name = "Siam";
const now = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// toLocaleDateString(locale, options)
ReactDOM.render(
  <>
    <h1>Hello, My name is { name }</h1>
    <p>Todays Date: { now.toLocaleDateString() }</p>
    <p>Todays Date: { now.toLocaleDateString("ja-JP", options) }</p>
    <p>Todays Time: { now.toLocaleTimeString() }</p>
  </>,
  document.getElementById('root')
);

/*
Options key examples:
day:
The representation of the day.
Possible values are "numeric", "2-digit".
weekday:
The representation of the weekday.
Possible values are "narrow", "short", "long".
year:
The representation of the year.
Possible values are "numeric", "2-digit".
month:
The representation of the month.
Possible values are "numeric", "2-digit", "narrow", "short", "long".
hour:
The representation of the hour.
Possible values are "numeric", "2-digit".
minute: The representation of the minute.
Possible values are "numeric", "2-digit".
second:
The representation of the second.
Possible values are "numeric", 2-digit".
Note: If you would only like to configure the content options, but still use the current locale, 
passing null for the first parameter will cause an error. Use undefined instead.

Local key examples:
For different languages:
"en-US": For English
"hi-IN": For Hindi
"ja-JP": For Japanese
You can use more language options.

You can also use the toLocaleString() method for the same purpose. 
The only difference is this function provides the time when you don't pass any options.
Example:
9/17/2016, 1:21:34 PM
*/