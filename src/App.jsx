import React from 'react';
import Card from './Cards';
import Series from './SrcData';
import './index.css';

const seriesGenre = "crime";

const ncard = val => {
    if (val.genre === seriesGenre) {
        return (
        <>
            <Card
                key={val.id}
                name={val.name}
                imgsrc={val.imgsrc}
                title={val.title}
                link={val.link} />
        </>
        );
    }
}

function App() {
    return (
        <>
            <h1 className="heading_style">Top Netflix Series</h1>
            <h1 style={{textTransform: "Capitalize"}}> {`List of ${seriesGenre} films:`} </h1>
            {Series.map(ncard)}
        </>
    );
}

export default App;