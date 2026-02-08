import React, { useState } from 'react';
import HealthcareDashboard from '../components/HealthcareDashboard';
import FinanceDashboard from '../components/FinanceDashboard';
import RetailDashboard from '../components/RetailDashboard';
import MarketingDashboard from '../components/MarketingDashboard';
import './Portfolio.css';

function Portfolio() {
  const [activeDashboard, setActiveDashboard] = useState('healthcare');

  const dashboards = [
    { id: 'healthcare', name: 'Healthcare Analytics', component: HealthcareDashboard, icon: '🏥' },
    { id: 'finance', name: 'Finance & Risk', component: FinanceDashboard, icon: '💰' },
    { id: 'retail', name: 'Retail & Supply Chain', component: RetailDashboard, icon: '📦' },
    { id: 'marketing', name: 'Marketing Analytics', component: MarketingDashboard, icon: '📊' },
  ];

  const ActiveComponent = dashboards.find(d => d.id === activeDashboard)?.component || HealthcareDashboard;

  return (
    <div className="portfolio-page">
      <div className="portfolio-header">
        <div className="portfolio-header-content">
          <h1>Portfolio Projects</h1>
          <p>Interactive dashboards showcasing Deep Data Analysis</p>
          
        </div>
      </div>

      <div className="dashboard-selector">
        {dashboards.map((dashboard) => (
          <button
            key={dashboard.id}
            className={`dashboard-tab ${activeDashboard === dashboard.id ? 'active' : ''}`}
            onClick={() => setActiveDashboard(dashboard.id)}
          >
            <span className="tab-icon">{dashboard.icon}</span>
            <span className="tab-name">{dashboard.name}</span>
          </button>
        ))}
      </div>

      <div className="dashboard-container">
        <ActiveComponent />
      </div>
    </div>
  );
}

export default Portfolio;
