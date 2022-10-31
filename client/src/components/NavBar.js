import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar () {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">
                    <img 
                        src = "https://cdn-icons-png.flaticon.com/512/7906/7906437.png"
                        width="30" 
                        height="30" 
                        className="d-inline-block align-top" 
                        alt="california icon" />
                            MyEnviro
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-item nav-link" to="/about">About</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;