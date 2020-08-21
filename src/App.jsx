import React, { useState } from 'react';
import './index.css';

const emailStyle = {
    color: "black",
    fontSize: "20px",
    textShadow: "none"
}

const App = () => {
    const [person, setFullName] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const inputEvent = (event) => {
        // let value = event.target.value;
        // let name = event.target.name;

        const { value, name } = event.target;

        setFullName((preValue) => {
            if (name === "firstName") {
                return {
                    firstName: value,
                    lastName: preValue.lastName,
                    email: preValue.email
                }
            } else if (name === "lastName") {
                return {
                    firstName: preValue.firstName,
                    lastName: value,
                    email: preValue.email
                }
            } else if (name === "email") {
                return {
                    firstName: preValue.firstName,
                    lastName: preValue.lastName,
                    email: value
                }
            }
        });
    }
    const [btnPerson, setBtnPerson] = useState();
    const formEvent = (event) => {
        // Eliminate form reload behavior after onSubmit()
        event.preventDefault();
        setBtnPerson(" " + person.firstName + " " + person.lastName);
    }
    return (
        <>
            <div className="main_div">
                <form onSubmit={formEvent}>
                    <div className="sub_div">
                        <h1> Hello { btnPerson } </h1>
                        <h1 style={ emailStyle }> { person.email } </h1>
                        <input type="text"
                            placeholder="Enter First Name"
                            name="firstName"
                            onChange={inputEvent}
                            value={person.firstName} />
                        <input type="text"
                            placeholder="Enter Last Name"
                            name="lastName"
                            onChange={inputEvent}
                            value={person.lastName} />
                        <input type="email"
                            placeholder="Enter Email"
                            name="email"
                            onChange={inputEvent}
                            value={person.email}
                            autoComplete="off" />
                        <button type="submit"> Click Me </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default App;