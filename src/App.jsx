import React, { useState, useEffect, useRef } from 'react';

const App = () => {
    const [num, setNum] = useState(0);

    const firstLoad = useRef(true);

    useEffect(()=>{
        if (firstLoad.current) {
            firstLoad.current = false;
            return;
        }
        document.title=`Clicked ${num} times`;
    });
    return (
        <>
            <button onClick={()=>setNum(num+1)}> Click { num } </button>        
        </>
    );
}

export default App;