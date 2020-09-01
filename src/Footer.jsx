import React from 'react';
import './index.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="bg-light text-center">
                <p> copyright © { year } </p> 
            </footer>
        </>
    );
}

export default Footer;