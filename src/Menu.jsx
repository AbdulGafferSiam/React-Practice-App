import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Menu = () => {

    return (
        <>
            <div className="menu_style">
                <NavLink exact
                    activeClassName="active_class"
                    to="/"
                    style={{ textDecoration: 'none' }}> About </NavLink>
                <NavLink
                    activeClassName="active_class"
                    to="/contact"
                    style={{ textDecoration: 'none' }}> Contact </NavLink>
                <NavLink
                    activeClassName="active_class"
                    to="/service"
                    style={{ textDecoration: 'none' }}> Service </NavLink>
            </div>
        </>
    );
}

export default Menu;