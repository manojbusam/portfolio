import React, { useState, useEffect } from 'react';
import HealthcareDashboard from '../components/HealthcareDashboard';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-page">
      <HealthcareDashboard />
    </div>
  );
}

export default Dashboard;
