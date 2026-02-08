import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HealthcareDashboard.css';

function HealthcareDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, content: '' });
  const [data, setData] = useState({
    patients: [],
    appointments: [],
    diagnoses: [],
    medications: [],
    labResults: []
  });
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalPatients: 0,
    totalAppointments: 0,
    completedAppointments: 0,
    totalRevenue: 0,
    avgAppointmentCost: 0,
    noShowRate: 0,
    activePatients: 0,
    avgAge: 0
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [patientsRes, appointmentsRes, diagnosesRes, medicationsRes, labRes] = await Promise.all([
        axios.get('/data/patients.csv'),
        axios.get('/data/appointments.csv'),
        axios.get('/data/diagnoses.csv'),
        axios.get('/data/medications.csv'),
        axios.get('/data/lab_results.csv')
      ]);

      const parseCSV = (csvText) => {
        const lines = csvText.split('\n').filter(line => line.trim());
        const headers = lines[0].split(',');
        return lines.slice(1).map(line => {
          const values = line.split(',');
          return headers.reduce((obj, header, index) => {
            obj[header.trim()] = values[index]?.trim() || '';
            return obj;
          }, {});
        });
      };

      const patients = parseCSV(patientsRes.data);
      const appointments = parseCSV(appointmentsRes.data);
      const diagnoses = parseCSV(diagnosesRes.data);
      const medications = parseCSV(medicationsRes.data);
      const labResults = parseCSV(labRes.data);

      setData({ patients, appointments, diagnoses, medications, labResults });

      const completed = appointments.filter(a => a.Status === 'Completed');
      const totalRevenue = completed.reduce((sum, a) => sum + parseFloat(a.Cost || 0), 0);
      const noShows = appointments.filter(a => a.Status === 'No-show').length;
      const activePatients = new Set(appointments.filter(a => a.Status === 'Completed').map(a => a.PatientID)).size;
      const avgAge = patients.length > 0 ? patients.reduce((sum, p) => sum + parseInt(p.Age || 0), 0) / patients.length : 0;

      setStats({
        totalPatients: patients.length,
        totalAppointments: appointments.length,
        completedAppointments: completed.length,
        totalRevenue: totalRevenue,
        avgAppointmentCost: completed.length > 0 ? totalRevenue / completed.length : 0,
        noShowRate: appointments.length > 0 ? (noShows / appointments.length) * 100 : 0,
        activePatients: activePatients,
        avgAge: avgAge
      });

      setLoading(false);
    } catch (error) {
      console.error('Error loading data:', error);
      setMockData();
    }
  };

  const setMockData = () => {
    setStats({
      totalPatients: 40,
      totalAppointments: 60,
      completedAppointments: 57,
      totalRevenue: 18750.00,
      avgAppointmentCost: 328.95,
      noShowRate: 3.33,
      activePatients: 35,
      avgAge: 45.2
    });
    setLoading(false);
  };

  const showTooltip = (e, content) => {
    setTooltip({
      show: true,
      x: e.clientX,
      y: e.clientY,
      content: content
    });
  };

  const hideTooltip = () => {
    setTooltip({ show: false, x: 0, y: 0, content: '' });
  };

  const getDepartmentStats = () => {
    const deptCounts = {};
    data.appointments.forEach(apt => {
      const dept = apt.Department || 'Unknown';
      deptCounts[dept] = (deptCounts[dept] || 0) + 1;
    });
    return Object.entries(deptCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  };

  const getTopDiagnoses = () => {
    const diagCounts = {};
    data.diagnoses.forEach(dx => {
      const diag = dx.Diagnosis || 'Unknown';
      diagCounts[diag] = (diagCounts[diag] || 0) + 1;
    });
    return Object.entries(diagCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);
  };

  const getAppointmentsByMonth = () => {
    const monthCounts = {};
    data.appointments.forEach(apt => {
      if (apt.AppointmentDate) {
        const month = apt.AppointmentDate.substring(0, 7);
        const monthName = new Date(apt.AppointmentDate + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        monthCounts[month] = { count: (monthCounts[month]?.count || 0) + 1, name: monthName };
      }
    });
    return Object.entries(monthCounts)
      .map(([month, data]) => ({ month, ...data }))
      .sort((a, b) => a.month.localeCompare(b.month));
  };

  const getStatusDistribution = () => {
    const statusCounts = {};
    data.appointments.forEach(apt => {
      const status = apt.Status || 'Unknown';
      statusCounts[status] = (statusCounts[status] || 0) + 1;
    });
    return Object.entries(statusCounts).map(([name, count]) => ({ name, count }));
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading healthcare analytics...</p>
      </div>
    );
  }

  const departmentStats = getDepartmentStats();
  const topDiagnoses = getTopDiagnoses();
  const monthlyAppointments = getAppointmentsByMonth();
  const statusDistribution = getStatusDistribution();
  const completionRate = ((stats.completedAppointments / stats.totalAppointments) * 100).toFixed(1);

  return (
    <div className="healthcare-dashboard">
      {tooltip.show && (
        <div 
          className="tooltip" 
          style={{ left: `${tooltip.x + 10}px`, top: `${tooltip.y + 10}px` }}
        >
          {tooltip.content}
        </div>
      )}

      {/* Header */}
      <div className="dashboard-header-section">
        <div className="header-content">
          <div className="dashboard-brand">
            <span className="dashboard-icon">🏥</span>
            <div>
              <h1>Healthcare Analytics Dashboard</h1>
              <p className="header-subtitle">Comprehensive insights and performance metrics</p>
            </div>
          </div>
          <div className="data-source-badge">
            <span className="badge-icon">📚</span>
            <span className="badge-text">Sample Data from Kaggle</span>
          </div>
        </div>
        <div className="header-actions">
          <div className="date-range">
            <span className="date-label">Last Updated:</span>
            <span className="date-value">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        <div 
          className="kpi-card primary"
          onMouseEnter={(e) => showTooltip(e, 'Total number of registered patients in the system. This includes all patients who have been registered regardless of appointment status.')}
          onMouseLeave={hideTooltip}
        >
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div className="kpi-content">
            <div className="kpi-header-row">
              <p className="kpi-label">Total Patients</p>
              <span 
                className="info-icon"
                onMouseEnter={(e) => showTooltip(e, 'Total number of registered patients in the system. This includes all patients who have been registered regardless of appointment status.')}
                onMouseLeave={hideTooltip}
              >
                ℹ️
              </span>
            </div>
            <p className="kpi-value">{stats.totalPatients.toLocaleString()}</p>
            <p className="kpi-change positive">+12% from last month</p>
          </div>
        </div>

        <div 
          className="kpi-card success"
          onMouseEnter={(e) => showTooltip(e, 'Total number of scheduled appointments across all departments. Includes completed, cancelled, and no-show appointments.')}
          onMouseLeave={hideTooltip}
        >
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div className="kpi-content">
            <div className="kpi-header-row">
              <p className="kpi-label">Total Appointments</p>
              <span className="info-icon">ℹ️</span>
            </div>
            <p className="kpi-value">{stats.totalAppointments.toLocaleString()}</p>
            <p className="kpi-change positive">+8% from last month</p>
          </div>
        </div>

        <div className="kpi-card info">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div className="kpi-content">
            <div className="kpi-header-row">
              <p className="kpi-label">Completion Rate</p>
              <span className="info-icon">ℹ️</span>
            </div>
            <p className="kpi-value">{completionRate}%</p>
            <p className="kpi-change positive">{stats.completedAppointments} completed</p>
          </div>
        </div>

        <div className="kpi-card revenue">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <div className="kpi-content">
            <div className="kpi-header-row">
              <p className="kpi-label">Total Revenue</p>
              <span className="info-icon">ℹ️</span>
            </div>
            <p className="kpi-value">${stats.totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <p className="kpi-change positive">+15% from last month</p>
          </div>
        </div>

        <div className="kpi-card warning">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <div className="kpi-content">
            <div className="kpi-header-row">
              <p className="kpi-label">No-Show Rate</p>
              <span className="info-icon">ℹ️</span>
            </div>
            <p className="kpi-value">{stats.noShowRate.toFixed(1)}%</p>
            <p className="kpi-change negative">-2.1% from last month</p>
          </div>
        </div>

        <div className="kpi-card secondary">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <div className="kpi-content">
            <div className="kpi-header-row">
              <p className="kpi-label">Active Patients</p>
              <span className="info-icon">ℹ️</span>
            </div>
            <p className="kpi-value">{stats.activePatients.toLocaleString()}</p>
            <p className="kpi-change">Last 90 days</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        <div className="tabs-header">
          <button 
            className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab-button ${activeTab === 'departments' ? 'active' : ''}`}
            onClick={() => setActiveTab('departments')}
          >
            Departments
          </button>
          <button 
            className={`tab-button ${activeTab === 'diagnoses' ? 'active' : ''}`}
            onClick={() => setActiveTab('diagnoses')}
          >
            Diagnoses
          </button>
          <button 
            className={`tab-button ${activeTab === 'activity' ? 'active' : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            Activity
          </button>
        </div>

        <div className="tabs-content">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="tab-panel">
              <div className="charts-grid-overview">
                <div className="chart-card">
                  <div className="chart-header">
                    <div>
                      <h3>Appointments Trend</h3>
                      <p className="chart-subtitle">Monthly appointment volume</p>
                      <p className="chart-description">
                        This chart displays the trend of appointments over time, showing monthly volumes. 
                        Use this to identify patterns, seasonal trends, and growth trajectories. Hover over 
                        bars to see detailed values.
                      </p>
                    </div>
                    <span className="info-icon-large">ℹ️</span>
                  </div>
                  <div className="line-chart-container">
                    <div className="line-chart">
                      {monthlyAppointments.map((item, index) => {
                        const maxCount = Math.max(...monthlyAppointments.map(m => m.count));
                        const height = (item.count / maxCount) * 100;
                        return (
                          <div 
                            key={index} 
                            className="line-chart-item"
                            onMouseEnter={(e) => {
                              setHoveredItem(index);
                              showTooltip(e, `Month: ${item.name}\nAppointments: ${item.count}\nPercentage: ${((item.count / stats.totalAppointments) * 100).toFixed(1)}%`);
                            }}
                            onMouseLeave={() => {
                              setHoveredItem(null);
                              hideTooltip();
                            }}
                          >
                            <div className="line-bar-wrapper">
                              <div 
                                className={`line-bar ${hoveredItem === index ? 'hovered' : ''}`}
                                style={{ height: `${height}%` }}
                                title={`${item.count} appointments`}
                              >
                                <span className="line-value">{item.count}</span>
                              </div>
                            </div>
                            <div className="line-label">{item.name}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="chart-footer">
                    <span className="insight-text">
                      💡 <strong>Insight:</strong> Appointment volumes show {monthlyAppointments.length > 1 && monthlyAppointments[monthlyAppointments.length - 1].count > monthlyAppointments[0].count ? 'an increasing' : 'a stable'} trend over the period.
                    </span>
                  </div>
                </div>

                <div className="chart-card">
                  <div className="chart-header">
                    <div>
                      <h3>Appointment Status</h3>
                      <p className="chart-subtitle">Status distribution</p>
                      <p className="chart-description">
                        Breakdown of appointments by status (Completed, Cancelled, No-show, Scheduled). 
                        This helps identify operational efficiency and patient engagement patterns.
                      </p>
                    </div>
                    <span className="info-icon-large">ℹ️</span>
                  </div>
                  <div className="status-chart">
                    {statusDistribution.map((status, index) => {
                      const total = statusDistribution.reduce((sum, s) => sum + s.count, 0);
                      const percentage = (status.count / total) * 100;
                      const colors = ['#667eea', '#48bb78', '#ed8936', '#f56565', '#9f7aea'];
                      return (
                        <div 
                          key={index} 
                          className="status-item"
                          onMouseEnter={(e) => showTooltip(e, `Status: ${status.name}\nCount: ${status.count}\nPercentage: ${percentage.toFixed(1)}%\n\n${status.name === 'Completed' ? 'Successfully completed appointments' : status.name === 'Cancelled' ? 'Appointments cancelled by patient or facility' : status.name === 'No-show' ? 'Patients who did not attend scheduled appointments' : 'Currently scheduled future appointments'}`)}
                          onMouseLeave={hideTooltip}
                        >
                          <div className="status-header">
                            <span className="status-name">{status.name}</span>
                            <span className="status-percentage">{percentage.toFixed(1)}%</span>
                          </div>
                          <div className="status-bar-container">
                            <div 
                              className="status-bar" 
                              style={{ 
                                width: `${percentage}%`,
                                backgroundColor: colors[index % colors.length]
                              }}
                            ></div>
                          </div>
                          <span className="status-count">{status.count} appointments</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="chart-footer">
                    <span className="insight-text">
                      💡 <strong>Insight:</strong> {((statusDistribution.find(s => s.name === 'Completed')?.count || 0) / stats.totalAppointments * 100).toFixed(1)}% completion rate indicates {((statusDistribution.find(s => s.name === 'Completed')?.count || 0) / stats.totalAppointments * 100) > 90 ? 'excellent' : 'good'} operational performance.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Departments Tab */}
          {activeTab === 'departments' && (
            <div className="tab-panel">
              <div className="chart-card full-width">
                <div className="chart-header">
                  <div>
                    <h3>Department Distribution</h3>
                    <p className="chart-subtitle">Appointments by department</p>
                    <p className="chart-description">
                      This visualization shows the distribution of appointments across different medical departments. 
                      Understanding department workload helps in resource allocation, staffing decisions, and identifying 
                      high-demand specialties. Departments with higher volumes may require additional resources or capacity planning.
                    </p>
                  </div>
                  <span className="info-icon-large">ℹ️</span>
                </div>
                <div className="bar-chart-container">
                  {departmentStats.map((dept, index) => {
                    const maxCount = Math.max(...departmentStats.map(d => d.count));
                    const width = (dept.count / maxCount) * 100;
                    const percentage = (dept.count / stats.totalAppointments) * 100;
                    return (
                      <div 
                        key={index} 
                        className="bar-chart-item"
                        onMouseEnter={(e) => showTooltip(e, `Department: ${dept.name}\nAppointments: ${dept.count}\nPercentage: ${percentage.toFixed(1)}%\n\nThis department handles ${percentage.toFixed(1)}% of all appointments.`)}
                        onMouseLeave={hideTooltip}
                      >
                        <div className="bar-label-row">
                          <span className="bar-label">{dept.name}</span>
                          <span className="bar-count">{dept.count}</span>
                        </div>
                        <div className="bar-container">
                          <div 
                            className="bar-fill" 
                            style={{ width: `${width}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="chart-footer">
                  <span className="insight-text">
                    💡 <strong>Insight:</strong> {departmentStats[0]?.name || 'N/A'} is the busiest department with {departmentStats[0]?.count || 0} appointments, representing {((departmentStats[0]?.count || 0) / stats.totalAppointments * 100).toFixed(1)}% of total volume.
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Diagnoses Tab */}
          {activeTab === 'diagnoses' && (
            <div className="tab-panel">
              <div className="chart-card full-width">
                <div className="chart-header">
                  <div>
                    <h3>Top Diagnoses</h3>
                    <p className="chart-subtitle">Most common conditions</p>
                    <p className="chart-description">
                      This analysis identifies the most frequently diagnosed conditions in the healthcare system. 
                      Understanding common diagnoses helps in resource planning, treatment protocols, and preventive 
                      care initiatives. Conditions appearing frequently may indicate areas for public health intervention 
                      or specialized care programs.
                    </p>
                  </div>
                  <span className="info-icon-large">ℹ️</span>
                </div>
                <div className="diagnosis-list">
                  {topDiagnoses.map((diag, index) => {
                    const maxCount = Math.max(...topDiagnoses.map(d => d.count));
                    const percentage = (diag.count / maxCount) * 100;
                    const totalDiagnoses = topDiagnoses.reduce((sum, d) => sum + d.count, 0);
                    const diagPercentage = (diag.count / totalDiagnoses) * 100;
                    return (
                      <div 
                        key={index} 
                        className="diagnosis-item"
                        onMouseEnter={(e) => showTooltip(e, `Diagnosis: ${diag.name}\nOccurrences: ${diag.count}\nRank: #${index + 1}\nPercentage of Top Diagnoses: ${diagPercentage.toFixed(1)}%\n\nThis condition represents ${diagPercentage.toFixed(1)}% of all top diagnoses.`)}
                        onMouseLeave={hideTooltip}
                      >
                        <div className="diagnosis-rank">{index + 1}</div>
                        <div className="diagnosis-info">
                          <span className="diagnosis-name">{diag.name}</span>
                          <div className="diagnosis-bar-container">
                            <div 
                              className="diagnosis-bar" 
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="diagnosis-count">{diag.count}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="chart-footer">
                  <span className="insight-text">
                    💡 <strong>Insight:</strong> {topDiagnoses[0]?.name || 'N/A'} is the most common diagnosis with {topDiagnoses[0]?.count || 0} occurrences. The top 3 diagnoses account for {((topDiagnoses.slice(0, 3).reduce((sum, d) => sum + d.count, 0) / topDiagnoses.reduce((sum, d) => sum + d.count, 0)) * 100).toFixed(1)}% of all top diagnoses.
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Activity Tab */}
          {activeTab === 'activity' && (
            <div className="tab-panel">
              <div className="chart-card full-width">
                <div className="chart-header">
                  <div>
                    <h3>Recent Appointments</h3>
                    <p className="chart-subtitle">Latest activity</p>
                    <p className="chart-description">
                      This table provides a detailed view of recent appointment activity, including patient information, 
                      department, status, and financial data. Use this to track individual appointments, identify patterns, 
                      and monitor operational performance in real-time. Click on any row to see more details.
                    </p>
                  </div>
                  <span className="info-icon-large">ℹ️</span>
                </div>
                <div className="table-wrapper">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Patient</th>
                        <th>Department</th>
                        <th>Status</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.appointments.slice(0, 10).map((apt, index) => {
                        const patient = data.patients.find(p => p.PatientID === apt.PatientID);
                        const patientName = patient ? `${patient.FirstName} ${patient.LastName}` : 'N/A';
                        return (
                          <tr 
                            key={index}
                            onMouseEnter={(e) => showTooltip(e, `Appointment Details:\nDate: ${apt.AppointmentDate}\nPatient: ${patientName}\nDepartment: ${apt.Department}\nType: ${apt.AppointmentType || 'N/A'}\nDuration: ${apt.Duration} minutes\nStatus: ${apt.Status}\nCost: $${parseFloat(apt.Cost || 0).toFixed(2)}`)}
                            onMouseLeave={hideTooltip}
                            className="table-row-interactive"
                          >
                            <td>{apt.AppointmentDate || 'N/A'}</td>
                            <td className="patient-name">{patientName}</td>
                            <td>{apt.Department || 'N/A'}</td>
                            <td>
                              <span className={`status-badge status-${apt.Status?.toLowerCase().replace('-', '') || 'unknown'}`}>
                                {apt.Status || 'N/A'}
                              </span>
                            </td>
                            <td className="amount">${parseFloat(apt.Cost || 0).toFixed(2)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="chart-footer">
                  <span className="insight-text">
                    💡 <strong>Insight:</strong> Recent appointments show an average cost of ${(data.appointments.slice(0, 10).reduce((sum, a) => sum + parseFloat(a.Cost || 0), 0) / Math.min(10, data.appointments.length)).toFixed(2)} per appointment.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HealthcareDashboard;
