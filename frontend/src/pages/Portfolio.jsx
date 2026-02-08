import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HealthcareDashboard from '../components/HealthcareDashboard';
import FinanceDashboard from '../components/FinanceDashboard';
import RetailDashboard from '../components/RetailDashboard';
import MarketingDashboard from '../components/MarketingDashboard';
import './Portfolio.css';

function Portfolio() {
  const { dashboardId } = useParams();
  const navigate = useNavigate();
  const [activeDashboard, setActiveDashboard] = useState(dashboardId || 'healthcare');

  useEffect(() => {
    if (dashboardId) {
      setActiveDashboard(dashboardId);
    } else if (window.location.pathname === '/portfolio') {
      // Only redirect if we're exactly on /portfolio
      navigate('/portfolio/healthcare', { replace: true });
    }
  }, [dashboardId, navigate]);

  const handleDashboardChange = (dashboardId) => {
    setActiveDashboard(dashboardId);
    navigate(`/portfolio/${dashboardId}`);
  };

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
            onClick={() => handleDashboardChange(dashboard.id)}
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
