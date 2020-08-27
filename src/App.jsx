import React, { createContext } from 'react';
import CompA from './CompA';

/*
React Context Api:
Allows you to easily access data at different levels
of the component tree, without passing prop to every level

step 1: createContext()
step 2: provider
step 3: consumer
*/

const FirstName = createContext();
const LastName = createContext();

const App = () => {

    return (
        <>
            <FirstName.Provider value={"Siam"}>
                <LastName.Provider value={"Ahmed"}>
                    <CompA />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    );
}

export default App;
export { FirstName, LastName };