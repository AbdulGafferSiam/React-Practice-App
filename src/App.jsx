import React, { useState, useEffect, useRef } from 'react';
import ClassLifeCycle from './ClassLifeCycle';

// whenever call the render function, useEffect()
// will be execute automatically

// the empty array means, the first time when load the page then 
// only execute the useEffect()
// useEffect() takes only a function inside it

// simulate componentDidMount(), componentDidUpdate(), componentDidUnmount()
const App = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    // The empty array means, the first time when load the page then 
    // execute the useEffect()
    /*
        useEffect(() => {
            alert("Button clicked");
        }, []);
    */

    // If the value of "num" change, then useEffect() will execute
    /*
        useEffect(() => {
            alert("Button clicked");
        }, [num]); 
    */
    
    // how do we prevent it to run on initial render for some cases?
    // We can use useRef hook to solve this issue
    // useRef() -> useRef hook can store any mutable value we want, so we could use that to keep track of if it’s the first time the useEffect function is being run

    const firstUpdate = useRef(true);

    useEffect(() => {
        if(firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        alert("Button clicked");
    }, [num]);

    return (
        <>
            <button onClick={() => setNum(num + 1)}> Click {num} </button>
            <br />
            <button onClick={() => setNums(nums + 1)}> Click {nums} </button>
            <ClassLifeCycle />
        </>
    );
}

export default App;