import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo192.png" alt="CivicMate Logo" />
        <span>CivicMate</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><a href="#help" className="help-btn">Help</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
