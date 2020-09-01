import React from 'react';
import './index.css';
import Common from './Common';
import HomeImg from './images/web.svg';

const Home = () => {

    return (
        <>
            <Common description="Hello! I am a software engineer" 
                 btnName="Get Started"
                 visit="/service"
                 image={ HomeImg } />
        </>
    );
}

export default Home;