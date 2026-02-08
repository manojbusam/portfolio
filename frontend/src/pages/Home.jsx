import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>📊 Power BI Healthcare Dashboard</h1>
        <p className="subtitle">
          Interactive healthcare analytics dashboard built with React and Power BI
        </p>
        <div className="hero-buttons">
          <Link to="/dashboard" className="btn btn-primary">
            View Dashboard
          </Link>
          <Link to="/reports" className="btn btn-secondary">
            Browse Reports
          </Link>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <div className="feature-icon">🏥</div>
          <h3>Healthcare Analytics</h3>
          <p>
            Comprehensive healthcare data visualization including patient records,
            appointments, diagnoses, and lab results.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📈</div>
          <h3>Real-time Insights</h3>
          <p>
            Interactive Power BI reports embedded directly in your React application
            for seamless data exploration.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3>Secure Embedding</h3>
          <p>
            Secure Power BI report embedding with Azure AD authentication and
            token-based access control.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Modern Stack</h3>
          <p>
            Built with React, Node.js, Express, and Power BI JavaScript SDK for
            a modern, scalable solution.
          </p>
        </div>
      </div>

      <div className="info-section">
        <h2>Getting Started</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Set Up Power BI</h4>
              <p>Create a Power BI workspace and publish your healthcare dashboard</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Configure Backend</h4>
              <p>Add your Power BI credentials to the backend .env file</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Start the App</h4>
              <p>Run the backend and frontend servers to view your dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
