import React, { useState } from 'react';
import './MarketingDashboard.css';

function MarketingDashboard() {
  const [activeTab, setActiveTab] = useState('campaigns');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, content: '' });

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
  const data = {
    totalSpend: 125000,
    totalRevenue: 485000,
    roas: 3.88,
    cpa: 25.8,
    clickRate: 2.4,
    conversionRate: 4.2
  };

  const campaignPerformance = [
    { name: 'Summer Sale 2024', spend: 35000, revenue: 142000, roas: 4.06, impressions: 1250000, clicks: 32000 },
    { name: 'Product Launch', spend: 28000, revenue: 98000, roas: 3.50, impressions: 980000, clicks: 24500 },
    { name: 'Holiday Campaign', spend: 42000, revenue: 185000, roas: 4.40, impressions: 1520000, clicks: 38500 },
    { name: 'Brand Awareness', spend: 20000, revenue: 60000, roas: 3.00, impressions: 850000, clicks: 18000 },
  ];

  const channelPerformance = [
    { channel: 'Facebook', spend: 45000, revenue: 185000, roas: 4.11, conversions: 1850 },
    { channel: 'Instagram', spend: 38000, revenue: 152000, roas: 4.00, conversions: 1520 },
    { channel: 'Google Ads', spend: 32000, revenue: 118000, roas: 3.69, conversions: 1180 },
    { channel: 'LinkedIn', spend: 10000, revenue: 30000, roas: 3.00, conversions: 300 },
  ];

  return (
    <div className="marketing-dashboard">
      {tooltip.show && (
        <div 
          className="tooltip" 
          style={{ left: `${tooltip.x + 10}px`, top: `${tooltip.y + 10}px` }}
        >
          {tooltip.content}
        </div>
      )}

      <div className="dashboard-header-section">
        <div className="header-content">
          <div className="dashboard-brand">
            <span className="dashboard-icon">📊</span>
            <div>
              <h1>Marketing Analytics Dashboard</h1>
              <p className="header-subtitle">Paid social attribution and campaign performance</p>
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

      <div className="kpi-grid">
        <div className="kpi-card spend">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <div className="kpi-content">
            <p className="kpi-label">Total Spend</p>
            <p className="kpi-value">${(data.totalSpend / 1000).toFixed(0)}K</p>
            <p className="kpi-change">This month</p>
          </div>
        </div>

        <div className="kpi-card revenue">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div className="kpi-content">
            <p className="kpi-label">Total Revenue</p>
            <p className="kpi-value">${(data.totalRevenue / 1000).toFixed(0)}K</p>
            <p className="kpi-change positive">+28% vs last month</p>
          </div>
        </div>

        <div className="kpi-card roas">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            </svg>
          </div>
          <div className="kpi-content">
            <p className="kpi-label">ROAS</p>
            <p className="kpi-value">{data.roas}x</p>
            <p className="kpi-change positive">+15% improvement</p>
          </div>
        </div>

        <div className="kpi-card cpa">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <div className="kpi-content">
            <p className="kpi-label">CPA</p>
            <p className="kpi-value">${data.cpa}</p>
            <p className="kpi-change positive">-12% vs target</p>
          </div>
        </div>

        <div className="kpi-card ctr">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="9" x2="15" y2="15"></line>
              <line x1="15" y1="9" x2="9" y2="15"></line>
            </svg>
          </div>
          <div className="kpi-content">
            <p className="kpi-label">Click Rate</p>
            <p className="kpi-value">{data.clickRate}%</p>
            <p className="kpi-change positive">Above industry avg</p>
          </div>
        </div>

        <div className="kpi-card conversion">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <div className="kpi-content">
            <p className="kpi-label">Conversion Rate</p>
            <p className="kpi-value">{data.conversionRate}%</p>
            <p className="kpi-change positive">+0.8% improvement</p>
          </div>
        </div>
      </div>

      <div className="tabs-container">
        <div className="tabs-header">
          <button 
            className={`tab-button ${activeTab === 'campaigns' ? 'active' : ''}`}
            onClick={() => setActiveTab('campaigns')}
          >
            Campaign Performance
          </button>
          <button 
            className={`tab-button ${activeTab === 'channels' ? 'active' : ''}`}
            onClick={() => setActiveTab('channels')}
          >
            Channel Analysis
          </button>
          <button 
            className={`tab-button ${activeTab === 'attribution' ? 'active' : ''}`}
            onClick={() => setActiveTab('attribution')}
          >
            Attribution
          </button>
        </div>

        <div className="tabs-content">
          {activeTab === 'campaigns' && (
            <div className="tab-panel">
            <div className="charts-grid-overview">
              <div className="chart-card">
                <div className="chart-header">
                  <div>
                    <h3>Campaign Performance</h3>
                    <p className="chart-subtitle">ROAS and revenue by campaign</p>
                    <p className="chart-description">
                      Return on Ad Spend (ROAS) measures revenue generated per dollar spent on advertising. A ROAS of 3x 
                      means $3 in revenue for every $1 spent. This analysis helps identify which campaigns are most effective 
                      and where to allocate marketing budget. Higher ROAS indicates better campaign performance and profitability.
                    </p>
                  </div>
                  <span className="info-icon-large">ℹ️</span>
                </div>
                <div className="campaign-chart-container">
                  {campaignPerformance.map((campaign, index) => {
                    const maxRevenue = Math.max(...campaignPerformance.map(c => c.revenue));
                    const revenueWidth = (campaign.revenue / maxRevenue) * 100;
                    return (
                      <div 
                        key={index} 
                        className="campaign-item"
                        onMouseEnter={(e) => {
                          const profit = campaign.revenue - campaign.spend;
                          const margin = ((profit / campaign.revenue) * 100).toFixed(1);
                          const ctr = ((campaign.clicks / campaign.impressions) * 100).toFixed(2);
                          showTooltip(e, `Campaign: ${campaign.name}\nROAS: ${campaign.roas}x\nRevenue: $${(campaign.revenue / 1000).toFixed(0)}K\nSpend: $${(campaign.spend / 1000).toFixed(0)}K\nProfit: $${(profit / 1000).toFixed(0)}K\nProfit Margin: ${margin}%\nImpressions: ${(campaign.impressions / 1000000).toFixed(1)}M\nClicks: ${(campaign.clicks / 1000).toFixed(1)}K\nCTR: ${ctr}%\n\nThis campaign generated ${campaign.roas}x return on ad spend, meaning every dollar spent generated $${campaign.roas} in revenue.`);
                        }}
                        onMouseLeave={hideTooltip}
                      >
                        <div className="campaign-header">
                          <span className="campaign-name">{campaign.name}</span>
                          <span className="campaign-roas">{campaign.roas}x ROAS</span>
                        </div>
                        <div className="campaign-metrics">
                          <div className="metric-row">
                            <span className="metric-label">Revenue:</span>
                            <span className="metric-value">${(campaign.revenue / 1000).toFixed(0)}K</span>
                          </div>
                          <div className="metric-row">
                            <span className="metric-label">Spend:</span>
                            <span className="metric-value">${(campaign.spend / 1000).toFixed(0)}K</span>
                          </div>
                        </div>
                        <div className="revenue-bar-container">
                          <div className="revenue-bar" style={{ width: `${revenueWidth}%` }}></div>
                        </div>
                        <div className="campaign-details">
                          <span>Impressions: {(campaign.impressions / 1000000).toFixed(1)}M</span>
                          <span>Clicks: {(campaign.clicks / 1000).toFixed(1)}K</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="chart-footer">
                  <span className="insight-text">
                    💡 <strong>Insight:</strong> {campaignPerformance[0]?.name || 'N/A'} campaign shows the highest ROAS at {campaignPerformance[0]?.roas}x, generating ${(campaignPerformance[0]?.revenue / 1000).toFixed(0)}K in revenue. Average campaign ROAS is {(campaignPerformance.reduce((sum, c) => sum + c.roas, 0) / campaignPerformance.length).toFixed(2)}x.
                  </span>
                </div>
              </div>

              <div className="chart-card">
                <div className="chart-header">
                  <div>
                    <h3>Channel Performance</h3>
                    <p className="chart-subtitle">Performance by marketing channel</p>
                    <p className="chart-description">
                      This analysis compares performance across different marketing channels (Facebook, Instagram, Google Ads, LinkedIn). 
                      Each channel has different characteristics, audience demographics, and cost structures. Understanding channel 
                      performance helps optimize budget allocation and identify the most effective marketing channels for your business.
                    </p>
                  </div>
                  <span className="info-icon-large">ℹ️</span>
                </div>
                <div className="channel-chart-container">
                  {channelPerformance.map((channel, index) => {
                    const maxRoas = Math.max(...channelPerformance.map(c => c.roas));
                    const roasWidth = (channel.roas / maxRoas) * 100;
                    return (
                      <div 
                        key={index} 
                        className="channel-item"
                        onMouseEnter={(e) => {
                          const profit = channel.revenue - channel.spend;
                          const margin = ((profit / channel.revenue) * 100).toFixed(1);
                          const cpa = (channel.spend / channel.conversions).toFixed(2);
                          showTooltip(e, `Channel: ${channel.channel}\nROAS: ${channel.roas}x\nRevenue: $${(channel.revenue / 1000).toFixed(0)}K\nSpend: $${(channel.spend / 1000).toFixed(0)}K\nProfit: $${(profit / 1000).toFixed(0)}K\nProfit Margin: ${margin}%\nConversions: ${channel.conversions.toLocaleString()}\nCPA: $${cpa}\n\n${channel.channel === 'Facebook' ? 'Facebook offers broad reach and detailed targeting options, ideal for brand awareness and conversions.' : channel.channel === 'Instagram' ? 'Instagram excels at visual storytelling and engaging younger demographics with high engagement rates.' : channel.channel === 'Google Ads' ? 'Google Ads provides intent-based targeting, capturing users actively searching for products or services.' : 'LinkedIn targets professional audiences, ideal for B2B marketing and high-value customer acquisition.'}`);
                        }}
                        onMouseLeave={hideTooltip}
                      >
                        <div className="channel-header">
                          <span className="channel-name">{channel.channel}</span>
                          <span className="channel-roas">{channel.roas}x</span>
                        </div>
                        <div className="roas-bar-container">
                          <div className="roas-bar" style={{ width: `${roasWidth}%` }}></div>
                        </div>
                        <div className="channel-details">
                          <div className="detail-row">
                            <span>Revenue: ${(channel.revenue / 1000).toFixed(0)}K</span>
                            <span>Spend: ${(channel.spend / 1000).toFixed(0)}K</span>
                          </div>
                          <div className="detail-row">
                            <span>Conversions: {channel.conversions.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          )}

          {activeTab === 'channels' && (
            <div className="tab-panel">
              <div className="charts-grid-overview">
                <div className="chart-card full-width">
                  <div className="chart-header">
                    <div>
                      <h3>Channel Performance</h3>
                      <p className="chart-subtitle">Performance by marketing channel</p>
                    </div>
                  </div>
                  <div className="channel-chart-container">
                    {channelPerformance.map((channel, index) => {
                      const maxRoas = Math.max(...channelPerformance.map(c => c.roas));
                      const roasWidth = (channel.roas / maxRoas) * 100;
                      return (
                        <div key={index} className="channel-item">
                          <div className="channel-header">
                            <span className="channel-name">{channel.channel}</span>
                            <span className="channel-roas">{channel.roas}x</span>
                          </div>
                          <div className="roas-bar-container">
                            <div className="roas-bar" style={{ width: `${roasWidth}%` }}></div>
                          </div>
                          <div className="channel-details">
                            <div className="detail-row">
                              <span>Revenue: ${(channel.revenue / 1000).toFixed(0)}K</span>
                              <span>Spend: ${(channel.spend / 1000).toFixed(0)}K</span>
                            </div>
                            <div className="detail-row">
                              <span>Conversions: {channel.conversions.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'attribution' && (
            <div className="tab-panel">
              <div className="charts-grid-overview">
                <div className="chart-card">
                  <div className="chart-header">
                    <div>
                      <h3>Attribution Model</h3>
                      <p className="chart-subtitle">Revenue attribution by touchpoint</p>
                      <p className="chart-description">
                        Attribution modeling determines how credit for conversions is assigned to different touchpoints in 
                        the customer journey. First Touch gives credit to the initial interaction, Last Touch to the final 
                        interaction before conversion, and Multi-Touch distributes credit across all touchpoints. This helps 
                        understand the full customer journey and optimize marketing mix.
                      </p>
                    </div>
                    <span className="info-icon-large">ℹ️</span>
                  </div>
                  <div className="attribution-container">
                    <div className="attribution-summary">
                      <div className="attr-kpi">
                        <span className="attr-label">Total Attributed Revenue</span>
                        <span className="attr-value">${(data.totalRevenue / 1000).toFixed(0)}K</span>
                      </div>
                      <div className="attr-kpi">
                        <span className="attr-label">Attribution Rate</span>
                        <span className="attr-value">87.5%</span>
                      </div>
                    </div>
                    <div className="attribution-breakdown">
                      <div className="attr-item">
                        <span className="attr-touchpoint">First Touch</span>
                        <span className="attr-percentage">32%</span>
                      </div>
                      <div className="attr-item">
                        <span className="attr-touchpoint">Last Touch</span>
                        <span className="attr-percentage">45%</span>
                      </div>
                      <div className="attr-item">
                        <span className="attr-touchpoint">Multi-Touch</span>
                        <span className="attr-percentage">23%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="chart-card">
                  <div className="chart-header">
                    <div>
                      <h3>Conversion Path</h3>
                      <p className="chart-subtitle">Customer journey analysis</p>
                      <p className="chart-description">
                        The conversion funnel shows how many users progress through each stage: Awareness (initial contact), 
                        Consideration (engagement), and Conversion (purchase). The drop-off rates between stages indicate 
                        where optimization is needed. Higher conversion rates suggest effective messaging and targeting.
                      </p>
                    </div>
                    <span className="info-icon-large">ℹ️</span>
                  </div>
                  <div className="conversion-path">
                    <div className="path-item">
                      <span className="path-step">Awareness</span>
                      <span className="path-value">125K</span>
                    </div>
                    <div className="path-arrow">→</div>
                    <div className="path-item">
                      <span className="path-step">Consideration</span>
                      <span className="path-value">48K</span>
                    </div>
                    <div className="path-arrow">→</div>
                    <div className="path-item">
                      <span className="path-step">Conversion</span>
                      <span className="path-value">4.8K</span>
                    </div>
                  </div>
                  <div className="conversion-rate">
                    <span>Overall Conversion Rate: {data.conversionRate}%</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MarketingDashboard;
