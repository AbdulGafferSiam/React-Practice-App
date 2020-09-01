import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import './index.css';
import { NavLink } from 'react-router-dom';

const Card = (props) => {

    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgSrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold"> {props.title} </h5>
                        <p className="card-text"> {props.description} </p>
                        <NavLink to="/" className="btn btn-primary"> <GitHubIcon /> Github  </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;