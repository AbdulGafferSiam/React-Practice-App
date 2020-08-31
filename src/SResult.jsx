import React from 'react';
import './index.css';

const SResult = (props) => {
    const img = `https://source.unsplash.com/400x300/?${props.searchData}`;
    return (
        <>
            <div className="img_result">
                <img src={ img } alt="image" />
            </div>
        </>
    );
}

export default SResult;