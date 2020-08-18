import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "Siam";
const imgURL1 = "https://picsum.photos/536/354";
const imgURL2 = "https://picsum.photos/536/355";
const imgURL3 = "https://picsum.photos/536/356";
const link = "http://www.siamsbucket.com/";

// add css by creating as an object
const cssHeader = {
    color: '#fa9191',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textShadow: '0px 2px 4x #5e131f',
    margin: '30px 0px',
    fontFamily: '"Josefin Sans", sans-serif'
};

ReactDOM.render(
  <>
    <h1 className="header" style={ cssHeader }>My name is { name } </h1>
    <div className="img_div">
      <img src={imgURL1} alt="random images" />
      <img src={imgURL2} alt="random images" />
      <a href={link} target="_blank">
        <img src={imgURL3} alt="random images" />
      </a>
    </div>
  </>,
  document.getElementById('root')
);