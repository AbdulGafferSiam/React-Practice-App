import React from 'react';
import './index.css';

function Card(props) {
    return (
        <div className="cards">
            <div className="card">
                <img
                    src={ props.imgsrc }
                    alt="myPic"
                    className="card__img" />
                <div className="card__info">
                    <span className="card__category"> { props.name } </span>
                    <h3 className="card__title"> { props.title } </h3>
                    <a href={ props.link } target="_blank">
                        <button> Watch Now </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;