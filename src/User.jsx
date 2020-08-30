import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
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

const User = () => {
    // using useParams()
    // perameter name need to same as route name
    const { fname, lname } = useParams();
    // useLocation() use to get the current url
    const location = useLocation();
    // useHistory() use to get track of the previous url
    const history = useHistory();

    return (
        <>
            <h1 style={{ textTransform: "capitalize" }}>{fname} {lname} Page</h1>
            <p> My current location is {location.pathname} </p>
            {location.pathname === `/user/siam/ahmed` ?
                <>
                    <button onClick={() => {
                        history.goBack();
                    }}> Back </button>
                    <button onClick={() => {
                        history.push('/');
                    }}> Home </button>
                </> : null}
        </>
    );
}

export default User;