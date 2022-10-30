import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar () {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" NavLink to="/">
                    <img 
                        src = "https://cdn-icons-png.flaticon.com/512/7906/7906437.png"
                        width="30" 
                        height="30" 
                        class="d-inline-block align-top" 
                        alt="california icon" />
                            MyEnviro
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" href="/">Home</a>
                        <a class="nav-item nav-link" href="/about">About</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;