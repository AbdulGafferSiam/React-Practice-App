import React, { useState } from 'react';
import './index.css';

const App = () => {
    const [firstName, setFirstName] = useState('');
    const inputFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const [lastName, setLastName] = useState('');
    const inputLastName = (event) => {
        setLastName(event.target.value);
    }

    const [name, setName] = useState('');
    const formEvent = (event) => {
        // Eliminate form reload behavior after onSubmit()
        event.preventDefault();
        setName(firstName + " " + lastName);
    }
   return (
        <>
            <div className="main_div">
                <form onSubmit={formEvent}>
                    <div className="sub_div">
                        <h1> Hello {" " + name} </h1>
                        <input type="text"
                            placeholder="Enter First Name"
                            onChange={inputFirstName}
                            value={firstName} />
                        <input type="text"
                            placeholder="Enter Last Name"
                            onChange={inputLastName}
                            value={lastName} />
                        <button type="submit"> Click Me </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default App;