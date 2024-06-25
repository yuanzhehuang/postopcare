// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg">
    <NavLink className="navbar-brand text-white font-weight-bold" to="/">Post Operative Care</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/physician-list">Physician List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/department-list">Department List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/disclaimer">Disclaimer</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/account">Account</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
