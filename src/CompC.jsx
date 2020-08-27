import React from 'react';
import { FirstName, LastName } from './App';

// consumer consume only function
// create a callback hell

const CompC = () => {

    return (
        <>
            <h1> Hello from C </h1>
            <FirstName.Consumer>
                {
                    (fname) => {
                        return (
                            <>
                                <LastName.Consumer>
                                    {
                                        (lname) => {
                                            return <p> My name is {fname} {lname} </p>
                                        }
                                    }
                                </LastName.Consumer>
                            </>
                        )
                    }
                }
            </FirstName.Consumer>
        </>
    );
}

export default CompC;