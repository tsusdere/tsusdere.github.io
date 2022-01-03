import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const path = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>
          <Link to="/experience" className="nav-item nav-link">
            Experience
          </Link>
          <Link to="/skills" className="nav-item nav-link">
            Skills
          </Link>
          <Link to="/education" className="nav-item nav-link">
            Education
          </Link>
          <Link to="/projects" className="nav-item nav-link">
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
