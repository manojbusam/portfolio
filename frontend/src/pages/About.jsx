import React from 'react';
import { Link } from 'react-router-dom';
import profilePicture from '../pp.jpeg';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="hero-content">
          <div className="profile-header">
            <div className="profile-avatar">
              <img src={profilePicture} alt="Vijayasri Chinta" className="profile-image" />
            </div>
            <div className="profile-info">
              <div className="name-row">
                <h1>Vijayasri Chinta</h1>
                
              </div>
              <p className="pronouns">She/Her</p>
              <p className="title">Business Intelligence Analyst | Retail & Supply Chain Logistics</p>
              <p className="specialization">Power BI, Tableau, Salesforce, ServiceNow, ACC, Zeta, CRM, React/Next.js, GCP Vertex AI, Terraform, Docker</p>
              <p className="location">📍 Nashville Metropolitan Area, Tennessee</p>
              <div className="social-links">
                <a href="https://github.com/vijayasrichinta2609?tab=repositories" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="social-label">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/vijayasri-chinta/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="social-label">LinkedIn</span>
                </a>
                <a href="https://www.reddit.com/user/Pure-Mousse-2471/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Reddit">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.249.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 3.405.913.921 0 2.563-.07 3.405-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.547-1.684.73-2.97.73-1.286 0-2.423-.183-2.97-.73a.326.326 0 0 0-.232-.095z"/>
                  </svg>
                  <span className="social-label">Reddit</span>
                </a>
                <a href="mailto:chintavijayasri@outlook.com" className="social-link" aria-label="Email">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="social-label">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>About</h2>
          <p className="about-text">
            Business Intelligence Analyst with <strong>4+ years of experience</strong> specializing in Retail and Supply Chain Logistics. 
            My mission is to move beyond simple reporting and provide the predictive insights that allow stakeholders to act with confidence.
          </p>
          <p className="about-text">
            In 2026, data isn't just about what happened; it's about what's next. Whether I am architecting Generative AI (RAG) solutions 
            to automate decision support, migrating legacy CRM systems (Salesforce, SAP CRM) to modern stacks, or integrating ServiceNow workflows 
            with GCP MLOps, I focus on one thing: <strong> measurable business impact</strong>.
          </p>
        </div>

        <div className="about-section">
          <h2>How I Deliver Value</h2>
          <div className="value-cards">
            <div className="value-card">
              <div className="value-icon">🛒</div>
              <h3>Retail Strategy</h3>
              <p>Translate business problems into BRDs, FRDs, and UAT docs. Specialize in <strong>Pricing Execution</strong> and <strong>Omnichannel Logistics</strong>.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔐</div>
              <h3>CRM & Governance</h3>
              <p>Migrate legacy CRMs (<strong>Salesforce</strong>, <strong>SAP CRM</strong>) to <strong>React/Next.js</strong> with <strong>RBAC</strong> for secure, fast reporting.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤖</div>
              <h3>Generative AI</h3>
              <p>Build <strong>RAG</strong> solutions grounding AI in retail data (<strong>ACC, Zeta</strong>) via <strong>GCP Vertex AI</strong>.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📦</div>
              <h3>Supply Chain</h3>
              <p>Monitor <strong>OTIF</strong> compliance. Bridge <strong>ServiceNow</strong> workflows with <strong>GCP MLOps</strong> for optimization.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📊</div>
              <h3>Paid Social</h3>
              <p>Unlock <strong>Meta Ads Manager</strong> attribution. Connect marketing spend to revenue with advanced modeling.</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Live Dashboards</h2>
          <p className="section-intro">
            Interactive dashboards demonstrating data visualization and analytics capabilities.
          </p>
          <div className="dashboard-showcase">
            <Link to="/portfolio/healthcare" className="dashboard-card">
              <div className="dashboard-card-header">
                <span className="dashboard-icon">🏥</span>
                <h3>Healthcare Analytics</h3>
              </div>
              <p className="dashboard-description">
                Healthcare operations dashboard tracking patient metrics, appointments, and revenue analytics. 
                Built with <strong>Power BI</strong> and <strong>DAX</strong> for healthcare data modeling and operational efficiency.
              </p>
              <div className="dashboard-tech">
                <span className="tech-badge">Power BI</span>
                <span className="tech-badge">DAX</span>
                <span className="tech-badge">SQL</span>
              </div>
              <span className="dashboard-link">View Dashboard →</span>
            </Link>

            <Link to="/portfolio/finance" className="dashboard-card">
              <div className="dashboard-card-header">
                <span className="dashboard-icon">💰</span>
                <h3>Finance & Risk</h3>
              </div>
              <p className="dashboard-description">
                Financial risk management dashboard analyzing credit risk, market volatility, and portfolio performance. 
                Built with <strong>Tableau</strong> and <strong>Python</strong> for risk assessment and financial modeling.
              </p>
              <div className="dashboard-tech">
                <span className="tech-badge">Tableau</span>
                <span className="tech-badge">Python</span>
                <span className="tech-badge">Risk Analytics</span>
              </div>
              <span className="dashboard-link">View Dashboard →</span>
            </Link>

            <Link to="/portfolio/retail" className="dashboard-card">
              <div className="dashboard-card-header">
                <span className="dashboard-icon">📦</span>
                <h3>Retail & Supply Chain</h3>
              </div>
              <p className="dashboard-description">
                Retail and supply chain analytics monitoring inventory, sales performance, OTIF compliance, and supplier metrics. 
                Built with <strong>ServiceNow</strong>, <strong>Salesforce CRM</strong>, <strong>Power BI</strong>, and <strong>GCP</strong> for supply chain optimization and vendor performance tracking.
              </p>
              <div className="dashboard-tech">
                <span className="tech-badge">ServiceNow</span>
                <span className="tech-badge">Salesforce</span>
                <span className="tech-badge">Power BI</span>
                <span className="tech-badge">CRM</span>
                <span className="tech-badge">GCP</span>
              </div>
              <span className="dashboard-link">View Dashboard →</span>
            </Link>

            <Link to="/portfolio/marketing" className="dashboard-card">
              <div className="dashboard-card-header">
                <span className="dashboard-icon">📊</span>
                <h3>Marketing Analytics</h3>
              </div>
              <p className="dashboard-description">
                Marketing performance dashboard tracking campaign effectiveness, conversion funnels, and ROI. 
                Built with <strong>Meta Ads Manager</strong>, <strong>Adobe Campaign Classic (ACC)</strong>, <strong>Zeta</strong>, and <strong>Power BI</strong> for marketing attribution and cross-channel analytics.
              </p>
              <div className="dashboard-tech">
                <span className="tech-badge">Meta Ads Manager</span>
                <span className="tech-badge">ACC</span>
                <span className="tech-badge">Zeta</span>
                <span className="tech-badge">Power BI</span>
                <span className="tech-badge">Attribution</span>
              </div>
              <span className="dashboard-link">View Dashboard →</span>
            </Link>
          </div>
        </div>

        <div className="about-section">
          <h2>Technical Ecosystem</h2>
          <div className="tech-grid">
            <div className="tech-category">
              <h3>BI & Visualization</h3>
              <div className="tech-tags">
                <span className="tech-tag">Power BI</span>
                <span className="tech-tag">Tableau</span>
                <span className="tech-tag">Plotly</span>
                <span className="tech-tag">ServiceNow Dashboards</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Enterprise Platforms</h3>
              <div className="tech-tags">
                <span className="tech-tag">Salesforce</span>
                <span className="tech-tag">SAP CRM (ABAP)</span>
                <span className="tech-tag">Zeta</span>
                <span className="tech-tag">Adobe Campaign Classic (ACC)</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Languages & Engineering</h3>
              <div className="tech-tags">
                <span className="tech-tag">SQL (Expert)</span>
                <span className="tech-tag">Python (Polars/Pandas)</span>
                <span className="tech-tag">React/Next.js</span>
                <span className="tech-tag">GCP Vertex AI</span>
                <span className="tech-tag">Terraform</span>
                <span className="tech-tag">Docker</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Documentation & Process</h3>
              <div className="tech-tags">
                <span className="tech-tag">BRD/FRD/UAD Development</span>
                <span className="tech-tag">UAT (User Acceptance Testing)</span>
                <span className="tech-tag">Agile/Scrum</span>
                <span className="tech-tag">Git/GitHub</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Core Strengths</h2>
          <div className="strengths-list">
            <span className="strength-badge">KPI Tracking</span>
            <span className="strength-badge">Predictive Modeling</span>
            <span className="strength-badge">Data Cleaning</span>
            <span className="strength-badge">Cross-functional Reporting</span>
            <span className="strength-badge">Statistical Analysis</span>
            <span className="strength-badge">Data Governance</span>
            <span className="strength-badge">CRM Migration</span>
            <span className="strength-badge">Requirement Engineering</span>
          </div>
        </div>

        <div className="about-section">
          <h2>Experience</h2>
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="exp-header">
                <h3>Business Analyst, Retail BI</h3>
                <span className="exp-company">Deloitte</span>
                <span className="exp-date">Jan 2024 - Present</span>
              </div>
              <p className="exp-location">Nashville Metropolitan Area · Contract</p>
              <div className="exp-tech-stack">
                <strong>Tech Stack:</strong> <span className="tech-inline">Power BI</span>, <span className="tech-inline">Tableau</span>, <span className="tech-inline">ServiceNow</span>, <span className="tech-inline">Salesforce</span>, <span className="tech-inline">SAP CRM</span>, <span className="tech-inline">ACC</span>, <span className="tech-inline">Zeta</span>, <span className="tech-inline">CRM</span>, <span className="tech-inline">React/Next.js</span>, <span className="tech-inline">SQL</span>, <span className="tech-inline">Python</span>, <span className="tech-inline">GCP Vertex AI</span>, <span className="tech-inline">Terraform</span>, <span className="tech-inline">Docker</span>
              </div>
              <ul className="exp-bullets">
                <li><strong>BI Requirement Strategy & Documentation:</strong> Specialized in bridging the gap between technical teams and business units. Expert in translating "root business problems" into BRD, FRD, and UAD documentation for Pricing, Omnichannel Logistics, and Inventory, ensuring alignment with measurable margin growth.</li>
                <li><strong>Modern CRM Data Migration & Governance:</strong> Led the data-centric migration of legacy CRM systems (Salesforce, SAP CRM ABAP) to a full-stack React/Next.js environment. Implemented RBAC (Role-Based Access Control) to maintain strict data governance and security while improving reporting accessibility for end-users.</li>
                <li><strong>Advanced BI Visualization & Storytelling:</strong> Expert in architecting high-scale analytic dashboards using Tableau, Power BI, and ServiceNow. Skilled at "telling the story" with data to C-suite stakeholders, bridging Meta Ads attribution and retail KPIs with actionable narratives.</li>
                <li><strong>Generative AI for Analytics (RAG):</strong> Pioneered the discovery and requirement-setting for Generative AI (RAG) solutions. Focused on grounding LLMs in operational retail data (via ACC and Zeta) to automate complex data parsing and enhance decision support systems.</li>
                <li><strong>Operational Excellence (OTIF) & UAT:</strong> Deep expertise in monitoring OTIF (On-Time, In-Full) compliance and supply chain throughput. Lead for UAT (User Acceptance Testing), ensuring high data integrity for vendor performance analysis and category deep-dives.</li>
                <li><strong>Engineering-Driven BI (GCP & MLOps):</strong> Proficient in SQL and Python for architecting retail data models. Leveraged GCP Vertex AI and MLOps workflows to optimize pricing elasticity and inventory models, moving from descriptive to predictive analytics.</li>
                <li><strong>Agile DevOps Integration:</strong> Hands-on experience managing BI solution deployments using Git/GitHub, Terraform, and Docker, ensuring repeatable delivery of analytics within fast-paced Agile frameworks.</li>
              </ul>
            </div>

             

            <div className="experience-item">
              <div className="exp-header">
                <h3>Business Intelligence Engineer, Health Care</h3>
                <span className="exp-company">Wipro</span>
                <span className="exp-date">Jun 2020 - Dec 2022</span>
              </div>
              <p className="exp-location">India · Full-time</p>
              <div className="exp-tech-stack">
                <strong>Tech Stack:</strong> <span className="tech-inline">Power BI</span>, <span className="tech-inline">SQL (Expert)</span>, <span className="tech-inline">Python</span>, <span className="tech-inline">GCP</span>, <span className="tech-inline">ServiceNow</span>, <span className="tech-inline">Git/GitHub</span>, <span className="tech-inline">Terraform</span>, <span className="tech-inline">Docker</span>
              </div>
              <ul className="exp-bullets">
                <li><strong>BI Product Development:</strong> Expert in developing and maintaining high-scale analytic data products using Power BI with integration to ServiceNow Now Assist specializing in grounding models within operational data.</li>
                <li><strong>GCP & Advanced Engineering:</strong> Proficient in Python and SQL for architecting data models, leveraging GCP workflows for end-to-end model training, deployment, and performance monitoring.</li>
                <li><strong>DevOps & CI/CD Governance:</strong> Hands-on experience managing solution deployments using Git/GitHub, Terraform, and containerization tools like Docker, ensuring scalable and repeatable delivery within Agile development frameworks.</li>
                <li><strong>Healthcare Operations & ITSM Integration:</strong> Deep understanding of hospital operations, growth strategy, and ITSM/ITIL concepts, with a proven ability to translate complex clinical and operational needs into actionable technical work products.</li>
                <li><strong>Strategic Stakeholder Partnership:</strong> Skilled in collaborating with SMO Leaders and ITG organizations to support ad-hoc analytical needs, provide user training, and lead quality improvement initiatives that scale best analytic practices enterprise-wide.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Master's degree, Computer Science</h3>
            <p className="edu-school">North Carolina Agricultural and Technical State University</p>
            <p className="edu-date">Jan 2023 - Dec 2023</p>
          </div>
          <div className="education-item">
            <h3>Bachelors</h3>
            <p className="edu-school">Andhra University College of Engineering</p>
          </div>
        </div>

        <div className="about-section contact-section">
          <h2>Let's Connect</h2>
          <p className="contact-text">
            I'm always looking to connect with local leaders at the intersection of data and strategy. 
            If you're looking to turn your data silos into a roadmap for growth, let's talk.
          </p>
          <div className="contact-social-links">
            <a href="https://github.com/vijayasrichinta2609?tab=repositories" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="GitHub">
              <svg className="contact-social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/vijayasri-chinta/" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="LinkedIn">
              <svg className="contact-social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.reddit.com/user/Pure-Mousse-2471/" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Reddit">
              <svg className="contact-social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.249.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 3.405.913.921 0 2.563-.07 3.405-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.547-1.684.73-2.97.73-1.286 0-2.423-.183-2.97-.73a.326.326 0 0 0-.232-.095z"/>
              </svg>
            </a>
            <a href="mailto:chintavijayasri@outlook.com" className="contact-social-link" aria-label="Email">
              <svg className="contact-social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
          <div className="contact-badges">
            <span className="contact-badge">Open to work</span>
            <span className="contact-badge">Data Analyst</span>
            <span className="contact-badge">Business Analyst</span>
            <span className="contact-badge">Business Intelligence Expert</span>
            <span className="contact-badge">CRM Specialist</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
