import React from 'react';
import Card from './Cards';
import Series from './SrcData';
import './index.css';

const ncard = val => {
    return (
        <Card
            key={val.id}
            name={val.name}
            imgsrc={val.imgsrc}
            title={val.title}
            link={val.link} />
    );
}

function App() {
    return (
        <>
            <h1 className="heading_style">Top Netflix Series</h1>
            { Series.map(ncard) }
        </>
    );
}

export default App;