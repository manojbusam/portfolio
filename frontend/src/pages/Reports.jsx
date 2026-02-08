import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PowerBIEmbed from '../components/PowerBIEmbed';
import './Reports.css';

function Reports() {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [workspaceId, setWorkspaceId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchReports = async () => {
    if (!workspaceId) {
      setError('Please enter a Workspace ID');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('/api/reports', {
        params: { workspaceId },
      });
      setReports(response.data);
    } catch (err) {
      console.error('Error fetching reports:', err);
      setError(
        err.response?.data?.error || 
        'Failed to fetch reports. Make sure the backend is running and configured correctly.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReportSelect = (report) => {
    setSelectedReport(report);
  };

  return (
    <div className="reports-page">
      <div className="reports-header">
        <h1>Power BI Reports</h1>
        <p>Browse and view your Power BI reports</p>
      </div>

      {!selectedReport ? (
        <div className="reports-browser">
          <div className="browser-controls">
            <div className="workspace-input">
              <input
                type="text"
                value={workspaceId}
                onChange={(e) => setWorkspaceId(e.target.value)}
                placeholder="Enter Workspace ID"
                onKeyPress={(e) => e.key === 'Enter' && fetchReports()}
              />
              <button onClick={fetchReports} disabled={loading}>
                {loading ? 'Loading...' : 'Load Reports'}
              </button>
            </div>
          </div>

          {error && (
            <div className="error-message">
              <p>⚠️ {error}</p>
            </div>
          )}

          {reports.length > 0 && (
            <div className="reports-list">
              <h2>Available Reports ({reports.length})</h2>
              <div className="reports-grid">
                {reports.map((report) => (
                  <div
                    key={report.id}
                    className="report-card"
                    onClick={() => handleReportSelect(report)}
                  >
                    <div className="report-icon">📊</div>
                    <h3>{report.name}</h3>
                    {report.description && (
                      <p className="report-description">{report.description}</p>
                    )}
                    <div className="report-meta">
                      <span className="report-id">ID: {report.id.substring(0, 20)}...</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!loading && reports.length === 0 && workspaceId && !error && (
            <div className="no-reports">
              <p>No reports found in this workspace.</p>
            </div>
          )}
        </div>
      ) : (
        <div className="report-viewer">
          <div className="viewer-header">
            <button onClick={() => setSelectedReport(null)} className="btn-back">
              ← Back to Reports
            </button>
            <h2>{selectedReport.name}</h2>
          </div>
          <div className="viewer-content">
            <PowerBIEmbed
              reportId={selectedReport.id}
              workspaceId={workspaceId}
              reportName={selectedReport.name}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Reports;
