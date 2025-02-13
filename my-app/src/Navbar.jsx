import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaMoon, FaSun, FaBaseballBall } from "react-icons/fa";

function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav className={`navbar ${darkMode ? "navbar-dark" : "navbar-light"}`}>
      <div className="navbar-left">
        <FaBaseballBall className="logo-icon" />
        <span className="navbar-title">IPL Prediction</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/win-prediction">Win Prediction</Link></li>
        <li><Link to="/score-prediction">Score Prediction</Link></li>
      </ul>
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
}

export default Navbar;
