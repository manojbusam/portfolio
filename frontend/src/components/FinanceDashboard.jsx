import React, { useState } from 'react';
import './FinanceDashboard.css';

function FinanceDashboard() {
  const [activeTab, setActiveTab] = useState('performance');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, content: '' });
  const [data] = useState({
    revenue: 2450000,
    expenses: 1890000,
    profit: 560000,
    profitMargin: 22.9,
    cashFlow: 125000,
    riskScore: 6.8,
    portfolioValue: 12500000,
    roi: 18.5
  });

  const monthlyData = [
    { month: 'Jan', revenue: 2100000, expenses: 1650000, profit: 450000 },
    { month: 'Feb', revenue: 2250000, expenses: 1720000, profit: 530000 },
    { month: 'Mar', revenue: 2400000, expenses: 1800000, profit: 600000 },
    { month: 'Apr', revenue: 2350000, expenses: 1850000, profit: 500000 },
    { month: 'May', revenue: 2500000, expenses: 1920000, profit: 580000 },
    { month: 'Jun', revenue: 2450000, expenses: 1890000, profit: 560000 },
  ];

  const riskCategories = [
    { name: 'Credit Risk', value: 7.2, threshold: 8 },
    { name: 'Market Risk', value: 6.5, threshold: 7 },
    { name: 'Operational Risk', value: 5.8, threshold: 6 },
    { name: 'Liquidity Risk', value: 7.8, threshold: 8 },
  ];

  const topInvestments = [
    { name: 'Equity Portfolio', value: 8500000, change: 12.5, type: 'equity' },
    { name: 'Fixed Income', value: 3200000, change: 4.2, type: 'fixed' },
    { name: 'Real Estate', value: 1800000, change: 8.9, type: 'realestate' },
  ];

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

  return (
    <div className="finance-dashboard">
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
            <span className="dashboard-icon">💰</span>
            <div>
              <h1>Finance & Risk Analytics Dashboard</h1>
              <p className="header-subtitle">Comprehensive financial performance and risk metrics</p>
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
        <div className="kpi-card revenue">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <div className="kpi-content">
            <p className="kpi-label">Total Revenue</p>
            <p className="kpi-value">${(data.revenue / 1000000).toFixed(2)}M</p>
            <p className="kpi-change positive">+8.2% YoY</p>
          </div>
        </div>

        <div className="kpi-card profit">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div className="kpi-content">
            <p className="kpi-label">Net Profit</p>
            <p className="kpi-value">${(data.profit / 1000).toFixed(0)}K</p>
            <p className="kpi-change positive">+12.5% MoM</p>
          </div>
        </div>

        <div className="kpi-card margin">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="9" x2="15" y2="15"></line>
              <line x1="15" y1="9" x2="9" y2="15"></line>
            </svg>
          </div>
          <div className="kpi-content">
            <p className="kpi-label">Profit Margin</p>
            <p className="kpi-value">{data.profitMargin}%</p>
            <p className="kpi-change positive">+2.1% vs target</p>
          </div>
        </div>

        <div className="kpi-card risk">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <div className="kpi-content">
            <p className="kpi-label">Risk Score</p>
            <p className="kpi-value">{data.riskScore}</p>
            <p className="kpi-change negative">Moderate Risk</p>
          </div>
        </div>

        <div className="kpi-card portfolio">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div className="kpi-content">
            <p className="kpi-label">Portfolio Value</p>
            <p className="kpi-value">${(data.portfolioValue / 1000000).toFixed(2)}M</p>
            <p className="kpi-change positive">+5.2% this quarter</p>
          </div>
        </div>

        <div className="kpi-card roi">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            </svg>
          </div>
          <div className="kpi-content">
            <p className="kpi-label">ROI</p>
            <p className="kpi-value">{data.roi}%</p>
            <p className="kpi-change positive">Above benchmark</p>
          </div>
        </div>
      </div>

      <div className="tabs-container">
        <div className="tabs-header">
          <button 
            className={`tab-button ${activeTab === 'performance' ? 'active' : ''}`}
            onClick={() => setActiveTab('performance')}
          >
            Financial Performance
          </button>
          <button 
            className={`tab-button ${activeTab === 'risk' ? 'active' : ''}`}
            onClick={() => setActiveTab('risk')}
          >
            Risk Analysis
          </button>
          <button 
            className={`tab-button ${activeTab === 'portfolio' ? 'active' : ''}`}
            onClick={() => setActiveTab('portfolio')}
          >
            Portfolio
          </button>
        </div>

        <div className="tabs-content">
          {activeTab === 'performance' && (
            <div className="tab-panel">
            <div className="charts-grid-overview">
              <div className="chart-card">
                <div className="chart-header">
                  <div>
                    <h3>Revenue & Expenses Trend</h3>
                    <p className="chart-subtitle">6-month financial overview</p>
                    <p className="chart-description">
                      This dual-bar chart compares revenue and expenses over a 6-month period, providing insights into 
                      financial performance trends. Revenue bars (green) show income generation, while expense bars (red) 
                      represent operational costs. The gap between them indicates profitability. Hover over bars to see 
                      exact values and calculate profit margins for each month.
                    </p>
                  </div>
                  <span className="info-icon-large">ℹ️</span>
                </div>
                <div className="finance-chart-container">
                  <div className="finance-line-chart">
                    {monthlyData.map((item, index) => {
                      const maxValue = Math.max(...monthlyData.map(m => Math.max(m.revenue, m.expenses)));
                      const revenueHeight = (item.revenue / maxValue) * 100;
                      const expenseHeight = (item.expenses / maxValue) * 100;
                      return (
                        <div 
                          key={index} 
                          className="finance-chart-item"
                          onMouseEnter={(e) => {
                            setHoveredItem(index);
                            const profit = item.revenue - item.expenses;
                            const margin = ((profit / item.revenue) * 100).toFixed(1);
                            showTooltip(e, `Month: ${item.month}\nRevenue: $${(item.revenue / 1000).toFixed(0)}K\nExpenses: $${(item.expenses / 1000).toFixed(0)}K\nProfit: $${(profit / 1000).toFixed(0)}K\nMargin: ${margin}%`);
                          }}
                          onMouseLeave={() => {
                            setHoveredItem(null);
                            hideTooltip();
                          }}
                        >
                          <div className="finance-bars">
                            <div className="bar-group">
                              <div 
                                className={`bar revenue-bar ${hoveredItem === index ? 'hovered' : ''}`} 
                                style={{ height: `${revenueHeight}%` }}
                              >
                                <span className="bar-value">${(item.revenue / 1000).toFixed(0)}K</span>
                              </div>
                              <div 
                                className={`bar expense-bar ${hoveredItem === index ? 'hovered' : ''}`} 
                                style={{ height: `${expenseHeight}%` }}
                              >
                                <span className="bar-value">${(item.expenses / 1000).toFixed(0)}K</span>
                              </div>
                            </div>
                          </div>
                          <div className="chart-label">{item.month}</div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="chart-legend">
                    <span className="legend-item"><span className="legend-color revenue"></span>Revenue</span>
                    <span className="legend-item"><span className="legend-color expense"></span>Expenses</span>
                  </div>
                </div>
              </div>

              <div className="chart-card">
                <div className="chart-header">
                  <div>
                    <h3>Profit Trend</h3>
                    <p className="chart-subtitle">Monthly profit analysis</p>
                    <p className="chart-description">
                      This chart tracks monthly profit trends, showing the net income after expenses. Profit is calculated 
                      as Revenue minus Expenses. Use this to identify profitable months, seasonal patterns, and growth trends. 
                      Consistent upward trends indicate healthy financial growth.
                    </p>
                  </div>
                  <span className="info-icon-large">ℹ️</span>
                </div>
                <div className="profit-chart-container">
                  <div className="profit-line-chart">
                    {monthlyData.map((item, index) => {
                      const maxProfit = Math.max(...monthlyData.map(m => m.profit));
                      const height = (item.profit / maxProfit) * 100;
                      return (
                        <div 
                          key={index} 
                          className="profit-chart-item"
                          onMouseEnter={(e) => {
                            setHoveredItem(`profit-${index}`);
                            const margin = ((item.profit / item.revenue) * 100).toFixed(1);
                            showTooltip(e, `Month: ${item.month}\nProfit: $${(item.profit / 1000).toFixed(0)}K\nRevenue: $${(item.revenue / 1000).toFixed(0)}K\nProfit Margin: ${margin}%`);
                          }}
                          onMouseLeave={() => {
                            setHoveredItem(null);
                            hideTooltip();
                          }}
                        >
                          <div className="profit-bar-wrapper">
                            <div 
                              className={`profit-bar ${hoveredItem === `profit-${index}` ? 'hovered' : ''}`} 
                              style={{ height: `${height}%` }}
                            >
                              <span className="profit-value">${(item.profit / 1000).toFixed(0)}K</span>
                            </div>
                          </div>
                          <div className="chart-label">{item.month}</div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="chart-footer">
                    <span className="insight-text">
                      💡 <strong>Insight:</strong> Revenue has grown {((monthlyData[monthlyData.length - 1].revenue - monthlyData[0].revenue) / monthlyData[0].revenue * 100).toFixed(1)}% over the period, while expenses increased {((monthlyData[monthlyData.length - 1].expenses - monthlyData[0].expenses) / monthlyData[0].expenses * 100).toFixed(1)}%, indicating {((monthlyData[monthlyData.length - 1].revenue - monthlyData[monthlyData.length - 1].expenses) > (monthlyData[0].revenue - monthlyData[0].expenses)) ? 'improving' : 'declining'} profitability.
                    </span>
                  </div>
                </div>
              </div>

              <div className="chart-card">
                <div className="chart-header">
                  <div>
                    <h3>Profit Trend</h3>
                    <p className="chart-subtitle">Monthly profit analysis</p>
                    <p className="chart-description">
                      This chart tracks monthly profit trends, showing the net income after expenses. Profit is calculated 
                      as Revenue minus Expenses. Use this to identify profitable months, seasonal patterns, and growth trends. 
                      Consistent upward trends indicate healthy financial growth.
                    </p>
                  </div>
                  <span className="info-icon-large">ℹ️</span>
                </div>
                <div className="profit-chart-container">
                  <div className="profit-line-chart">
                    {monthlyData.map((item, index) => {
                      const maxProfit = Math.max(...monthlyData.map(m => m.profit));
                      const height = (item.profit / maxProfit) * 100;
                      return (
                        <div 
                          key={index} 
                          className="profit-chart-item"
                          onMouseEnter={(e) => {
                            setHoveredItem(`profit-${index}`);
                            const margin = ((item.profit / item.revenue) * 100).toFixed(1);
                            showTooltip(e, `Month: ${item.month}\nProfit: $${(item.profit / 1000).toFixed(0)}K\nRevenue: $${(item.revenue / 1000).toFixed(0)}K\nProfit Margin: ${margin}%`);
                          }}
                          onMouseLeave={() => {
                            setHoveredItem(null);
                            hideTooltip();
                          }}
                        >
                          <div className="profit-bar-wrapper">
                            <div 
                              className={`profit-bar ${hoveredItem === `profit-${index}` ? 'hovered' : ''}`} 
                              style={{ height: `${height}%` }}
                            >
                              <span className="profit-value">${(item.profit / 1000).toFixed(0)}K</span>
                            </div>
                          </div>
                          <div className="chart-label">{item.month}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="chart-footer">
                  <span className="insight-text">
                    💡 <strong>Insight:</strong> Average monthly profit is ${(monthlyData.reduce((sum, m) => sum + m.profit, 0) / monthlyData.length / 1000).toFixed(0)}K with an average profit margin of {((monthlyData.reduce((sum, m) => sum + m.profit, 0) / monthlyData.reduce((sum, m) => sum + m.revenue, 0)) * 100).toFixed(1)}%.
                  </span>
                </div>
              </div>
            </div>
          </div>
          )}

          {activeTab === 'risk' && (
            <div className="tab-panel">
              <div className="charts-grid-overview">
                <div className="chart-card">
                  <div className="chart-header">
                    <div>
                      <h3>Risk Categories</h3>
                      <p className="chart-subtitle">Risk assessment by category</p>
                      <p className="chart-description">
                        This analysis breaks down risk exposure across different categories: Credit Risk (default probability), 
                        Market Risk (market volatility impact), Operational Risk (internal process failures), and Liquidity Risk 
                        (cash flow availability). Each risk is measured against a threshold. Values approaching or exceeding 
                        thresholds require immediate attention and mitigation strategies.
                      </p>
                    </div>
                    <span className="info-icon-large">ℹ️</span>
                  </div>
                  <div className="risk-chart-container">
                    {riskCategories.map((risk, index) => {
                      const riskPercentage = (risk.value / risk.threshold) * 100;
                      const isHighRisk = risk.value >= risk.threshold * 0.9;
                      return (
                        <div 
                          key={index} 
                          className="risk-item"
                          onMouseEnter={(e) => {
                            const riskPercentage = (risk.value / risk.threshold) * 100;
                            showTooltip(e, `Risk Category: ${risk.name}\nCurrent Value: ${risk.value}\nThreshold: ${risk.threshold}\nRisk Level: ${riskPercentage.toFixed(1)}%\nStatus: ${isHighRisk ? '⚠️ HIGH RISK - Requires immediate attention' : '✅ Normal - Within acceptable range'}\n\n${risk.name === 'Credit Risk' ? 'Measures the probability of borrower default and credit losses.' : risk.name === 'Market Risk' ? 'Assesses exposure to market volatility and price fluctuations.' : risk.name === 'Operational Risk' ? 'Evaluates risks from internal processes, systems, or human error.' : 'Measures the ability to meet short-term financial obligations.'}`);
                          }}
                          onMouseLeave={hideTooltip}
                        >
                          <div className="risk-header">
                            <span className="risk-name">{risk.name}</span>
                            <span className={`risk-value ${isHighRisk ? 'high' : 'normal'}`}>
                              {risk.value} / {risk.threshold}
                            </span>
                          </div>
                          <div className="risk-bar-container">
                            <div 
                              className={`risk-bar ${isHighRisk ? 'high' : 'normal'}`}
                              style={{ width: `${Math.min(riskPercentage, 100)}%` }}
                            ></div>
                          </div>
                          <span className="risk-status">
                            {isHighRisk ? '⚠️ High Risk' : '✅ Normal'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="chart-card">
                  <div className="chart-header">
                    <div>
                      <h3>Risk Score Overview</h3>
                      <p className="chart-subtitle">Overall risk assessment</p>
                      <p className="chart-description">
                        The overall risk score aggregates all risk categories into a single metric on a 0-10 scale. 
                        Scores 0-4 indicate low risk, 5-7 indicate moderate risk requiring monitoring, and 8-10 indicate 
                        high risk requiring immediate action. This score helps prioritize risk management efforts.
                      </p>
                    </div>
                    <span className="info-icon-large">ℹ️</span>
                  </div>
                  <div className="risk-score-container">
                    <div className="risk-score-circle">
                      <div className="score-value">{data.riskScore}</div>
                      <div className="score-label">Risk Score</div>
                      <div className="score-range">0-10 Scale</div>
                    </div>
                    <div className="risk-indicators">
                      <div className="indicator-item">
                        <span className="indicator-label">Low Risk</span>
                        <span className="indicator-range">0-4</span>
                      </div>
                      <div className="indicator-item">
                        <span className="indicator-label">Moderate Risk</span>
                        <span className="indicator-range">5-7</span>
                      </div>
                      <div className="indicator-item">
                        <span className="indicator-label">High Risk</span>
                        <span className="indicator-range">8-10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'portfolio' && (
            <div className="tab-panel">
              <div className="charts-grid-overview">
                <div className="chart-card">
                  <div className="chart-header">
                    <div>
                      <h3>Portfolio Allocation</h3>
                      <p className="chart-subtitle">Investment distribution</p>
                      <p className="chart-description">
                        This visualization shows how investment capital is distributed across different asset classes. 
                        Diversification across equity, fixed income, and real estate helps manage risk while optimizing returns. 
                        Each bar represents the percentage allocation and current value of each investment type.
                      </p>
                    </div>
                    <span className="info-icon-large">ℹ️</span>
                  </div>
                  <div className="portfolio-chart-container">
                    {topInvestments.map((investment, index) => {
                      const totalValue = topInvestments.reduce((sum, inv) => sum + inv.value, 0);
                      const percentage = (investment.value / totalValue) * 100;
                      const colors = ['#3b82f6', '#10b981', '#f59e0b'];
                      return (
                        <div 
                          key={index} 
                          className="portfolio-item"
                          onMouseEnter={(e) => {
                            const totalValue = topInvestments.reduce((sum, inv) => sum + inv.value, 0);
                            const percentage = (investment.value / totalValue) * 100;
                            showTooltip(e, `Investment: ${investment.name}\nValue: $${(investment.value / 1000000).toFixed(2)}M\nAllocation: ${percentage.toFixed(1)}%\nPerformance: ${investment.change > 0 ? '+' : ''}${investment.change}%\nType: ${investment.type === 'equity' ? 'Equity - Stocks and equity-based securities' : investment.type === 'fixed' ? 'Fixed Income - Bonds and debt securities' : 'Real Estate - Property and real estate investments'}`);
                          }}
                          onMouseLeave={hideTooltip}
                        >
                          <div className="portfolio-header">
                            <span className="portfolio-name">{investment.name}</span>
                            <span className="portfolio-value">${(investment.value / 1000000).toFixed(2)}M</span>
                          </div>
                          <div className="portfolio-bar-container">
                            <div 
                              className="portfolio-bar" 
                              style={{ 
                                width: `${percentage}%`,
                                backgroundColor: colors[index % colors.length]
                              }}
                            ></div>
                          </div>
                          <div className="portfolio-details">
                            <span>Allocation: {percentage.toFixed(1)}%</span>
                            <span className={`change ${investment.change > 0 ? 'positive' : 'negative'}`}>
                              {investment.change > 0 ? '+' : ''}{investment.change}%
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="chart-footer">
                    <span className="insight-text">
                      💡 <strong>Insight:</strong> Portfolio is well-diversified with {topInvestments[0]?.name || 'Equity'} representing {((topInvestments[0]?.value || 0) / topInvestments.reduce((sum, inv) => sum + inv.value, 0) * 100).toFixed(1)}% of total value. Overall portfolio ROI of {data.roi}% {data.roi > 10 ? 'exceeds' : 'meets'} market benchmarks.
                    </span>
                  </div>
                </div>

                <div className="chart-card">
                  <div className="chart-header">
                    <div>
                      <h3>Portfolio Performance</h3>
                      <p className="chart-subtitle">ROI by investment type</p>
                      <p className="chart-description">
                        Return on Investment (ROI) measures the performance of each investment type as a percentage. 
                        Higher ROI indicates better performance. This helps evaluate which asset classes are generating 
                        the best returns and informs rebalancing decisions.
                      </p>
                    </div>
                    <span className="info-icon-large">ℹ️</span>
                  </div>
                  <div className="roi-chart-container">
                    <div className="roi-summary">
                      <div className="roi-kpi">
                        <span className="roi-label">Total Portfolio Value</span>
                        <span className="roi-amount">${(data.portfolioValue / 1000000).toFixed(2)}M</span>
                      </div>
                      <div className="roi-kpi">
                        <span className="roi-label">Overall ROI</span>
                        <span className="roi-amount positive">{data.roi}%</span>
                      </div>
                    </div>
                    <div className="roi-breakdown">
                      {topInvestments.map((inv, index) => {
                        const estimatedROI = inv.type === 'equity' ? 12.5 : inv.type === 'fixed' ? 4.2 : 8.9;
                        return (
                          <div key={index} className="roi-item">
                            <span className="roi-type">{inv.name}</span>
                            <span className="roi-percentage positive">{estimatedROI}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="chart-footer">
                    <span className="insight-text">
                      💡 <strong>Insight:</strong> {topInvestments.find(inv => inv.type === 'equity')?.name || 'Equity Portfolio'} shows the highest ROI at {topInvestments.find(inv => inv.type === 'equity')?.change || 12.5}%, while {topInvestments.find(inv => inv.type === 'fixed')?.name || 'Fixed Income'} provides stability with {topInvestments.find(inv => inv.type === 'fixed')?.change || 4.2}% returns.
                    </span>
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

export default FinanceDashboard;
