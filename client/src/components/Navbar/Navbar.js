import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Bee-Z Street
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/search"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Search
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/garden"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/discover" className="nav-link">
            Garden
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/contact"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/search" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
