import React from 'react';
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
            </nav>
        </div>
    )
}

export default Navbar;