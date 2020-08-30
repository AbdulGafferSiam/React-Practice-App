import React from 'react';
import { useParams } from 'react-router-dom';
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
    return (
        <>
            <h1 style={{textTransform:"capitalize"}}>{fname} {lname} Page</h1>
        </>
    );
}

export default User;