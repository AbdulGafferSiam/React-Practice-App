import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Menu = () => {

    return (
        <>
            {/*Page not reload*/}
            <h1> NavLink: </h1>
            <NavLink exact 
                activeClassName="active_class" 
                to="/"
                style={{ textDecoration: 'none' }}> About </NavLink>
            <NavLink 
                activeClassName="active_class" 
                to="/contact"
                style={{ textDecoration: 'none' }}> Contact </NavLink>

            <br />
            {/*Page will reload*/}
            <h1> Anchor: </h1>
            <a href="/"> About </a>
            <a href="/contact"> Contact </a>
        </>
    );
}

export default Menu;