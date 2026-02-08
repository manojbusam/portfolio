import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <span className="footer-logo">📊</span>
            <span className="footer-name">Vijayasri Chinta</span>
          </div>
          <p className="footer-tagline">Data Analyst | Business Intelligence Expert</p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <a href="mailto:chintavijayasri@outlook.com" className="footer-link">
            chintavijayasri@outlook.com
          </a>
        </div>

        <div className="footer-section">
          <h4>Data Sources</h4>
          <p className="footer-disclaimer">
            All datasets used in these dashboards are publicly available sample datasets from 
            <a href="https://www.kaggle.com" target="_blank" rel="noopener noreferrer" className="footer-link"> Kaggle</a> 
            (crowdsourcing platform). 
          </p>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="footer-social">
            <span className="footer-badge">Open to Work</span>
            <span className="footer-badge">Data Analyst</span>
            <span className="footer-badge">Business Analyst</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Vijayasri Chinta. All rights reserved.</p>
        <p className="footer-note">Built with React, Power BI, and modern data analytics tools</p>
      </div>
    </footer>
  );
}

export default Footer;
