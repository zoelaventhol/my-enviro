import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar () {
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar;