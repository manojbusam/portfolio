import React, { useEffect, useRef, useState } from 'react';
import * as pbi from 'powerbi-client';
import axios from 'axios';
import './PowerBIEmbed.css';

function PowerBIEmbed({ reportId, workspaceId, reportName }) {
  const embedContainerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [powerbi, setPowerbi] = useState(null);

  useEffect(() => {
    // Initialize Power BI client
    if (window.powerbi) {
      setPowerbi(window.powerbi);
    }
  }, []);

  useEffect(() => {
    if (!powerbi || !reportId || !workspaceId || !embedContainerRef.current) {
      return;
    }

    let embedConfig = null;
    let report = null;

    const embedReport = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get embed token from backend
        const response = await axios.post('/api/embed-token', {
          reportId,
          workspaceId,
        });

        const { embedToken, embedUrl } = response.data;

        // Embed configuration
        embedConfig = {
          type: 'report',
          id: reportId,
          embedUrl: embedUrl || `https://app.powerbi.com/reportEmbed?reportId=${reportId}&groupId=${workspaceId}`,
          accessToken: embedToken,
          tokenType: pbi.models.TokenType.Embed,
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: true,
              },
              pageNavigation: {
                visible: true,
              },
            },
            background: pbi.models.BackgroundType.Transparent,
          },
        };

        // Embed the report
        report = powerbi.embed(embedContainerRef.current, embedConfig);

        // Handle events
        report.on('loaded', () => {
          console.log('Report loaded successfully');
          setLoading(false);
        });

        report.on('error', (event) => {
          console.error('Power BI error:', event);
          setError('Failed to load Power BI report. Please check your configuration.');
          setLoading(false);
        });

      } catch (err) {
        console.error('Error embedding report:', err);
        setError(
          err.response?.data?.error || 
          'Failed to load report. Make sure the backend is running and configured correctly.'
        );
        setLoading(false);
      }
    };

    embedReport();

    // Cleanup
    return () => {
      if (report) {
        report.off('loaded');
        report.off('error');
      }
    };
  }, [powerbi, reportId, workspaceId]);

  if (error) {
    return (
      <div className="powerbi-error">
        <div className="error-icon">⚠️</div>
        <h3>Error Loading Report</h3>
        <p>{error}</p>
        <div className="error-help">
          <p><strong>Common issues:</strong></p>
          <ul>
            <li>Make sure the backend server is running on port 3001</li>
            <li>Check that Power BI credentials are configured in .env</li>
            <li>Verify the Report ID and Workspace ID are correct</li>
            <li>Ensure the service principal has access to the report</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="powerbi-container">
      {loading && (
        <div className="powerbi-loading">
          <div className="spinner"></div>
          <p>Loading Power BI report...</p>
        </div>
      )}
      {reportName && (
        <div className="powerbi-header">
          <h2>{reportName}</h2>
        </div>
      )}
      <div 
        ref={embedContainerRef} 
        className="powerbi-embed"
        style={{ display: loading ? 'none' : 'block' }}
      ></div>
    </div>
  );
}

export default PowerBIEmbed;
