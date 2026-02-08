import React, { useState } from 'react';
import './RetailDashboard.css';

function RetailDashboard() {
  const [activeTab, setActiveTab] = useState('category');
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
    otif: 94.5,
    inventoryTurnover: 8.2,
    supplyChainEfficiency: 87.3,
    onTimeDelivery: 91.2,
    inventoryValue: 12500000,
    orderFulfillment: 96.8
  };

  const categoryPerformance = [
    { name: 'Electronics', sales: 3200000, margin: 28.5, units: 12500 },
    { name: 'Apparel', sales: 2800000, margin: 35.2, units: 18900 },
    { name: 'Home & Garden', sales: 2100000, margin: 32.1, units: 9800 },
    { name: 'Sports', sales: 1800000, margin: 29.8, units: 11200 },
    { name: 'Books', sales: 950000, margin: 25.4, units: 15200 },
  ];

  const supplyChainMetrics = [
    { metric: 'Warehouse Utilization', value: 87, target: 85, status: 'good' },
    { metric: 'Transportation Cost', value: 12.5, target: 15, status: 'good' },
    { metric: 'Order Accuracy', value: 98.2, target: 95, status: 'excellent' },
    { metric: 'Return Rate', value: 3.8, target: 5, status: 'good' },
  ];

  return (
    <div className="retail-dashboard">
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
            <span className="dashboard-icon">📦</span>
            <div>
              <h1>Retail & Supply Chain Analytics</h1>
              <p className="header-subtitle">Omnichannel operations and inventory optimization</p>
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
        <div className="kpi-card otif">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div className="kpi-content">
            <p className="kpi-label">OTIF Rate</p>
            <p className="kpi-value">{data.otif}%</p>
            <p className="kpi-change positive">+2.3% vs target</p>
          </div>
        </div>

        <div className="kpi-card turnover">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            </svg>
          </div>
          <div className="kpi-content">
            <p className="kpi-label">Inventory Turnover</p>
            <p className="kpi-value">{data.inventoryTurnover}x</p>
            <p className="kpi-change positive">Optimal range</p>
          </div>
        </div>

        <div className="kpi-card efficiency">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div className="kpi-content">
            <p className="kpi-label">SC Efficiency</p>
            <p className="kpi-value">{data.supplyChainEfficiency}%</p>
            <p className="kpi-change positive">+5.2% improvement</p>
          </div>
        </div>

        <div className="kpi-card delivery">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div className="kpi-content">
            <p className="kpi-label">On-Time Delivery</p>
            <p className="kpi-value">{data.onTimeDelivery}%</p>
            <p className="kpi-change positive">Above benchmark</p>
          </div>
        </div>

        <div className="kpi-card inventory">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="9" x2="15" y2="15"></line>
              <line x1="15" y1="9" x2="9" y2="15"></line>
            </svg>
          </div>
          <div className="kpi-content">
            <p className="kpi-label">Inventory Value</p>
            <p className="kpi-value">${(data.inventoryValue / 1000000).toFixed(2)}M</p>
            <p className="kpi-change">Optimal level</p>
          </div>
        </div>

        <div className="kpi-card fulfillment">
          <div className="kpi-icon-wrapper">
            <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <div className="kpi-content">
            <p className="kpi-label">Order Fulfillment</p>
            <p className="kpi-value">{data.orderFulfillment}%</p>
            <p className="kpi-change positive">+1.8% vs last month</p>
          </div>
        </div>
      </div>

      <div className="tabs-container">
        <div className="tabs-header">
          <button 
            className={`tab-button ${activeTab === 'category' ? 'active' : ''}`}
            onClick={() => setActiveTab('category')}
          >
            Category Performance
          </button>
          <button 
            className={`tab-button ${activeTab === 'supplychain' ? 'active' : ''}`}
            onClick={() => setActiveTab('supplychain')}
          >
            Supply Chain
          </button>
          <button 
            className={`tab-button ${activeTab === 'inventory' ? 'active' : ''}`}
            onClick={() => setActiveTab('inventory')}
          >
            Inventory
          </button>
        </div>

        <div className="tabs-content">
          {activeTab === 'category' && (
            <div className="tab-panel">
            <div className="charts-grid-overview">
              <div className="chart-card">
                <div className="chart-header">
                  <div>
                    <h3>Category Sales Performance</h3>
                    <p className="chart-subtitle">Revenue by product category</p>
                    <p className="chart-description">
                      This analysis shows sales performance across different product categories. Understanding category 
                      performance helps identify top-selling segments, optimize inventory mix, and allocate marketing 
                      resources effectively. Categories with higher revenue may indicate strong demand or premium pricing.
                    </p>
                  </div>
                  <span className="info-icon-large">ℹ️</span>
                </div>
                <div className="category-chart-container">
                  {categoryPerformance.map((cat, index) => {
                    const maxSales = Math.max(...categoryPerformance.map(c => c.sales));
                    const width = (cat.sales / maxSales) * 100;
                    return (
                      <div 
                        key={index} 
                        className="category-item"
                        onMouseEnter={(e) => {
                          const totalSales = categoryPerformance.reduce((sum, c) => sum + c.sales, 0);
                          const percentage = (cat.sales / totalSales) * 100;
                          showTooltip(e, `Category: ${cat.name}\nSales: $${(cat.sales / 1000000).toFixed(2)}M\nMargin: ${cat.margin}%\nUnits Sold: ${cat.units.toLocaleString()}\nMarket Share: ${percentage.toFixed(1)}%\n\nThis category represents ${percentage.toFixed(1)}% of total sales with a ${cat.margin}% profit margin.`);
                        }}
                        onMouseLeave={hideTooltip}
                      >
                        <div className="category-header">
                          <span className="category-name">{cat.name}</span>
                          <span className="category-sales">${(cat.sales / 1000000).toFixed(2)}M</span>
                        </div>
                        <div className="category-bar-container">
                          <div className="category-bar" style={{ width: `${width}%` }}></div>
                        </div>
                        <div className="category-details">
                          <span>Margin: {cat.margin}%</span>
                          <span>Units: {cat.units.toLocaleString()}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="chart-footer">
                  <span className="insight-text">
                    💡 <strong>Insight:</strong> {categoryPerformance[0]?.name || 'N/A'} leads with ${(categoryPerformance[0]?.sales / 1000000).toFixed(2)}M in sales and a {categoryPerformance[0]?.margin}% margin. Top 3 categories account for {((categoryPerformance.slice(0, 3).reduce((sum, c) => sum + c.sales, 0) / categoryPerformance.reduce((sum, c) => sum + c.sales, 0)) * 100).toFixed(1)}% of total revenue.
                  </span>
                </div>
              </div>

              <div className="chart-card">
                <div className="chart-header">
                  <div>
                    <h3>Supply Chain Metrics</h3>
                    <p className="chart-subtitle">Key operational indicators</p>
                    <p className="chart-description">
                      These metrics track critical supply chain performance indicators. Warehouse Utilization measures 
                      space efficiency, Transportation Cost tracks logistics expenses, Order Accuracy ensures quality, 
                      and Return Rate monitors customer satisfaction. Values below targets indicate efficient operations.
                    </p>
                  </div>
                  <span className="info-icon-large">ℹ️</span>
                </div>
                <div className="metrics-container">
                  {supplyChainMetrics.map((metric, index) => {
                    const isGood = metric.value <= metric.target || metric.status === 'good' || metric.status === 'excellent';
                    return (
                      <div key={index} className="metric-item">
                        <div className="metric-header">
                          <span className="metric-name">{metric.metric}</span>
                          <span className={`metric-value ${isGood ? 'good' : 'warning'}`}>
                            {metric.value}{metric.metric.includes('Cost') ? '%' : metric.metric.includes('Rate') ? '%' : '%'}
                          </span>
                        </div>
                        <div className="metric-bar-container">
                          <div 
                            className={`metric-bar ${isGood ? 'good' : 'warning'}`}
                            style={{ width: `${Math.min((metric.value / metric.target) * 100, 100)}%` }}
                          ></div>
                        </div>
                        <span className="metric-target">Target: {metric.target}{metric.metric.includes('Cost') ? '%' : metric.metric.includes('Rate') ? '%' : '%'}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          )}

          {activeTab === 'supplychain' && (
            <div className="tab-panel">
              <div className="charts-grid-overview">
                <div className="chart-card full-width">
                  <div className="chart-header">
                    <div>
                      <h3>Supply Chain Metrics</h3>
                      <p className="chart-subtitle">Key operational indicators</p>
                    </div>
                  </div>
                  <div className="metrics-container">
                    {supplyChainMetrics.map((metric, index) => {
                      const isGood = metric.value <= metric.target || metric.status === 'good' || metric.status === 'excellent';
                      return (
                        <div 
                          key={index} 
                          className="metric-item"
                          onMouseEnter={(e) => {
                            const performance = ((metric.value / metric.target) * 100).toFixed(1);
                            showTooltip(e, `Metric: ${metric.metric}\nCurrent Value: ${metric.value}${metric.metric.includes('Cost') ? '%' : metric.metric.includes('Rate') ? '%' : '%'}\nTarget: ${metric.target}${metric.metric.includes('Cost') ? '%' : metric.metric.includes('Rate') ? '%' : '%'}\nPerformance: ${performance}%\nStatus: ${isGood ? '✅ Meeting or exceeding target' : '⚠️ Below target - requires attention'}\n\n${metric.metric === 'Warehouse Utilization' ? 'Measures how effectively warehouse space is being used. Higher utilization indicates better space efficiency.' : metric.metric === 'Transportation Cost' ? 'Percentage of revenue spent on logistics and transportation. Lower is better.' : metric.metric === 'Order Accuracy' ? 'Percentage of orders fulfilled correctly without errors. Higher accuracy improves customer satisfaction.' : 'Percentage of orders returned by customers. Lower return rates indicate better product quality and customer satisfaction.'}`);
                          }}
                          onMouseLeave={hideTooltip}
                        >
                          <div className="metric-header">
                            <span className="metric-name">{metric.metric}</span>
                            <span className={`metric-value ${isGood ? 'good' : 'warning'}`}>
                              {metric.value}{metric.metric.includes('Cost') ? '%' : metric.metric.includes('Rate') ? '%' : '%'}
                            </span>
                          </div>
                          <div className="metric-bar-container">
                            <div 
                              className={`metric-bar ${isGood ? 'good' : 'warning'}`}
                              style={{ width: `${Math.min((metric.value / metric.target) * 100, 100)}%` }}
                            ></div>
                          </div>
                          <span className="metric-target">Target: {metric.target}{metric.metric.includes('Cost') ? '%' : metric.metric.includes('Rate') ? '%' : '%'}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'inventory' && (
            <div className="tab-panel">
              <div className="charts-grid-overview">
                <div className="chart-card">
                  <div className="chart-header">
                    <div>
                      <h3>Inventory Status</h3>
                      <p className="chart-subtitle">Current inventory levels</p>
                      <p className="chart-description">
                        Inventory status provides a snapshot of current stock levels across categories. Optimal inventory 
                        levels balance having enough stock to meet demand while avoiding overstocking. Days on Hand indicates 
                        how long current inventory will last at current sales rates.
                      </p>
                    </div>
                    <span className="info-icon-large">ℹ️</span>
                  </div>
                  <div className="inventory-summary">
                    <div className="inventory-kpi">
                      <span className="inv-label">Total Inventory Value</span>
                      <span className="inv-value">${(data.inventoryValue / 1000000).toFixed(2)}M</span>
                    </div>
                    <div className="inventory-kpi">
                      <span className="inv-label">Turnover Rate</span>
                      <span className="inv-value">{data.inventoryTurnover}x</span>
                    </div>
                    <div className="inventory-kpi">
                      <span className="inv-label">Days on Hand</span>
                      <span className="inv-value">45 days</span>
                    </div>
                  </div>
                </div>

                <div className="chart-card">
                  <div className="chart-header">
                    <div>
                      <h3>Stock Levels by Category</h3>
                      <p className="chart-subtitle">Inventory distribution</p>
                      <p className="chart-description">
                        Stock levels show the percentage of inventory available for each category. Green indicates healthy 
                        stock levels (80%+), yellow indicates moderate levels (50-80%), and red indicates low stock (less than 50%) 
                        requiring replenishment. This helps prevent stockouts and optimize reorder timing.
                      </p>
                    </div>
                    <span className="info-icon-large">ℹ️</span>
                  </div>
                  <div className="stock-levels">
                    {categoryPerformance.map((cat, index) => {
                      const stockLevel = Math.random() * 30 + 70; // Simulated stock level
                      return (
                        <div key={index} className="stock-item">
                          <div className="stock-header">
                            <span className="stock-name">{cat.name}</span>
                            <span className="stock-percentage">{stockLevel.toFixed(0)}%</span>
                          </div>
                          <div className="stock-bar-container">
                            <div 
                              className={`stock-bar ${stockLevel > 80 ? 'high' : stockLevel > 50 ? 'medium' : 'low'}`}
                              style={{ width: `${stockLevel}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
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

export default RetailDashboard;
