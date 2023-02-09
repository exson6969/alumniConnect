import React, { useState } from "react";
import "./Header.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="navbar">
          <NavLink to="/" className="logo">Alumni Connect</NavLink>
          <div className="nav-links">
          <NavLink className="ref-link" to="/profile">Profile</NavLink>
          <NavLink className="ref-link" to="/dashboard">Dashboard</NavLink>
          <NavLink className="ref-link" to="/contact">Contact Us</NavLink>
          </div>
          <div className="navbar-links">
            <button id="bottone1"><NavLink to="/login">Login</NavLink></button>
            <button id="bottone1"> <NavLink to="/register">Register</NavLink></button>
          </div>
          <button className="navbar-toggler" onClick={() => setIsOpen(!isOpen)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {isOpen && (
          <div className="navbar-overlay">
          <div className="overlay-button">
            <button id="bottone1">
              <NavLink to="/login">
                <i className="fas fa-sign-in-alt"></i> Login
              </NavLink>
            </button>
            <button id="bottone2">
              <NavLink to="/register">
                <i className="fas fa-user-plus"></i> Register
              </NavLink>
            </button>
          </div>
        </div>
        )}
      </nav>
    </div>
  )
}

export default Header