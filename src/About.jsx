import React from 'react';
import './index.css';
import Common from './Common';
import AboutImg from './images/about.png';

const About = () => {

    return (
        <>
            <Common description="Welcome To The About Page" 
                 btnName="Contact Me"
                 visit="/contact"
                 image={ AboutImg } />
        </>
    );
}

export default About;