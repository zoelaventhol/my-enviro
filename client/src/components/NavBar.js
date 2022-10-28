import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar () {
    return (
        <nav className="Navbar">
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" NavLink to="/">
                    <img 
                        src = "https://cdn-icons-png.flaticon.com/512/7906/7906437.png"
                        width="30" 
                        height="30" 
                        class="d-inline-block align-top" 
                        alt="california icon" />
                    MyEnviro
                </a>
            </nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/indicators">Indicators</NavLink></li>
                <li><NavLink to="/indicators/:id">Featured Indicator</NavLink></li>
            </ul>
        </nav>

    )
}

export default Navbar;