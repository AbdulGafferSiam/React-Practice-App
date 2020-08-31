import React from 'react';
import './index.css';
import { useState } from 'react';
import Sresult from './SResult';

const Search = () => {
    const [img, setImg] = useState('');
    const inputEvent = (event) => {
        const data = event.target.value;
        setImg(data);
    }

    return (
        <>
            <div className="searchbar">
                <input
                    type="text"
                    placeholder="Search Anything"
                    onChange={ inputEvent }
                    value={ img } />
                
                {
                    img === "" ? null : <Sresult searchData = { img }/>
                }
                
            </div>
        </>
    );
}

export default Search;