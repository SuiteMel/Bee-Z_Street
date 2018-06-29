import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = () => (
  <nav className="nav #f9a825 yellow darken-3">
    <div className="nav-wrapper #f9a825 yellow darken-3">
    <Link className="#f9a825 yellow darken-3 brand-logo" to="/">
      <h3 className="navbar">Bee-Z Street</h3>
    </Link>
   
      <ul id="nav-mobile" className="right hide-on-med-and-down #f9a825 yellow darken-3">
      <li
          className={
            window.location.pathname === "/search"
              ? "nav-item active"
              : "nav-item navbar"
          }
        >
          <Link to="/search" className="nav-link">
            Search
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/garden"
              ? "nav-item active"
              : "nav-item navbar"
          }
        >
          <Link to="/garden" className="nav-link">
            Garden
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/contact"
              ? "nav-item active"
              : "nav-item navbar"
          }
        >
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/"
              ? "nav-item active"
              : "nav-item navbar"
          }
        >
          <Link to="/" className="nav-link">
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
