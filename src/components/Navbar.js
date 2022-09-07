import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../CSS/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav id="navbar">
      <div className="brand">
        <div id="app-logo" />
        <h1 className="app-name">Mintok</h1>
      </div>

      <ul id="nav-links">
        <li>
          <NavLink to="/" id="home">
            {location.pathname === '/' ? 'Home' : 'Go Back'}
          </NavLink>
        </li>
        <li>
          <NavLink to="Collections" id="collections">
            Collections
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
