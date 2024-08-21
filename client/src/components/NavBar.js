import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink className="navbar-brand" to="/">
        {/* set California icon and text "MyEnviro" as HomeView link */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/7906/7906437.png"
          width="30"
          height="30"
          alt="california icon"
        />
        MyEnviro
      </NavLink>
    </nav>
  );
}

export default Navbar;
