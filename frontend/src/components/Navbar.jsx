import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="brand-container">
            <span className="brand-icon">📊</span>
            <div className="brand-text">
              <span className="brand-name">Vijayasri Chinta</span>
              <span className="brand-subtitle">Data Analytics Portfolio</span>
            </div>
          </div>
        </Link>
        <div className="navbar-links">
          <Link 
            to="/about" 
            className={location.pathname === '/' || location.pathname === '/about' ? 'active' : ''}
          >
            About Me
          </Link>
          <Link 
            to="/portfolio" 
            className={location.pathname === '/portfolio' ? 'active' : ''}
          >
            Portfolio
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
