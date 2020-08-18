import React from 'react';
import ReactDOM from 'react-dom';

const name = "Siam";
const imgURL1 = "https://picsum.photos/536/354";
const imgURL2 = "https://picsum.photos/536/355";
const imgURL3 = "https://picsum.photos/536/356";
const link = "http://www.siamsbucket.com/";

// JSX Attributes
// Use camel case of global attributes
ReactDOM.render(
  <>
    <h1 contentEditable="true">My name is { name } </h1>
    <img src={imgURL1} alt="random images" />
    <img src={imgURL2} alt="random images" />
    <a href={link} target="_blank">
      <img src={imgURL3} alt="random images" />
    </a>
  </>,
  document.getElementById('root')
);