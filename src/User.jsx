import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './index.css';

// previous approach withot using useParams()
/*
const User = ({ match }) => {

    return (
        <>
            <h1>{match.params.name} Page</h1>
        </>
    );
}
*/

// using useParams()
const User = () => {
    // perameter name need to same as route name
    const { fname, lname } = useParams();
    // useLocation() use to get the current url
    const location = useLocation();

    return (
        <>
            <h1 style={{ textTransform: "capitalize" }}>{fname} {lname} Page</h1>
            <p> My current location is {location.pathname} </p>
            {location.pathname === `/user/siam/ahmed` ?
                <button onClick={() => {
                    alert("Correct URL!");
                }}> Click </button> : null}
        </>
    );
}

export default User;