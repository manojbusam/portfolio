import React from 'react';
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
              <p className="title">Business Analyst | Data Analyst | Decision Science & Analytics Engineering</p>
              <p className="specialization">Specialized in Healthcare, Finance & Retail ROI | SQL (Expert), Power BI, Python, Tableau, BigQuery, DAX, Microsoft Fabric</p>
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
            Business Analyst with <strong>3+ years of experience</strong> specialized in the Healthcare, Finance, and Supply Chain Logistics. 
            My mission is to move beyond simple reporting and provide the predictive insights that allow stakeholders to act with confidence.
          </p>
          <p className="about-text">
            In 2026, data isn't just about what happened, it's about what's next. Whether I am optimizing patient readmission workflows 
            for healthcare providers, modeling financial risk, or streamlining supply chain throughput, I focus on one thing: 
            <strong> measurable business impact</strong>.
          </p>
        </div>

        <div className="about-section">
          <h2>How I Deliver Value</h2>
          <div className="value-cards">
            <div className="value-card">
              <div className="value-icon">🏥</div>
              <h3>Healthcare Analytics</h3>
              <p>Leveraging <strong>SQL (Expert)</strong>, <strong>Power BI</strong>, <strong>DAX</strong>, and <strong>Oracle Analytics Cloud</strong> to improve operational efficiency and patient outcomes while maintaining strict data governance.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💰</div>
              <h3>Financial & Supply Chain Intelligence</h3>
              <p>Building high-performance data pipelines using <strong>Python (Polars)</strong>, <strong>SQL</strong>, <strong>Alteryx</strong>, and <strong>Tableau</strong> to identify cost-saving opportunities and mitigate logistics risks.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📊</div>
              <h3>Paid Social Attribution</h3>
              <p>Unlocking the "Black Box" of <strong>Meta Ads Manager</strong>. I bridge the gap between marketing spend and actual revenue through advanced data attribution modeling using <strong>Microsoft Fabric</strong> and <strong>Power BI</strong>.</p>
            </div>
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
                <span className="tech-tag">AWS QuickSight</span>
                <span className="tech-tag">Oracle Analytics Cloud</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Data Platforms & Cloud</h3>
              <div className="tech-tags">
                <span className="tech-tag">Microsoft Fabric</span>
                <span className="tech-tag">AWS Redshift</span>
                <span className="tech-tag">BigQuery</span>
                <span className="tech-tag">GCP</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Data Tools & ETL</h3>
              <div className="tech-tags">
                <span className="tech-tag">Alteryx</span>
                <span className="tech-tag">Meta Ads Manager</span>
                <span className="tech-tag">Excel (Advanced)</span>
                <span className="tech-tag">ETL Pipelines</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Languages & Analytics</h3>
              <div className="tech-tags">
                <span className="tech-tag">SQL (Expert)</span>
                <span className="tech-tag">Python (Polars/Pandas)</span>
                <span className="tech-tag">DAX</span>
                <span className="tech-tag">R</span>
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
          </div>
        </div>

        <div className="about-section">
          <h2>Experience</h2>
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="exp-header">
                <h3>Business Analyst, Retail BI</h3>
                <span className="exp-company">Deloitte</span>
                <span className="exp-date">Aug 2025 - Dec 2025</span>
              </div>
              <p className="exp-location">Nashville Metropolitan Area · Internship</p>
              <div className="exp-tech-stack">
                <strong>Tech Stack:</strong> <span className="tech-inline">Microsoft Fabric</span>, <span className="tech-inline">Power BI</span>, <span className="tech-inline">Meta Ads Manager</span>, <span className="tech-inline">SQL</span>, <span className="tech-inline">Python</span>
              </div>
              <ul className="exp-bullets">
                <li>Retail Requirement Strategy: Specialized in translating "root business problems" into data-driven strategies</li>
                <li>Generative AI Solution Discovery: Delivered requirements for RAG (Retrieval-Augmented Generation) solutions</li>
                <li>AI-Powered Retail Product Development: Designed high-scale analytic products using Power BI and GCP Vertex AI</li>
                <li>Operational Excellence (OTIF) & Supply Chain: Deep expertise in monitoring and optimizing OTIF compliance</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="exp-header">
                <h3>Data Analyst, Finance Decision Science</h3>
                <span className="exp-company">USAA</span>
                <span className="exp-date">Jan 2025 - May 2025</span>
              </div>
              <p className="exp-location">San Antonio, Texas · Internship</p>
              <div className="exp-tech-stack">
                <strong>Tech Stack:</strong> <span className="tech-inline">AWS QuickSight</span>, <span className="tech-inline">AWS Redshift</span>, <span className="tech-inline">SQL</span>, <span className="tech-inline">Python</span>, <span className="tech-inline">Tableau</span>
              </div>
              <ul className="exp-bullets">
                <li>Cross-Functional Strategy & Influence: Collaborated with cross-functional teams to translate complex business objectives</li>
                <li>Advanced Analytical Problem Solving: Applied innovative, quantitative, and scientific analytical approaches</li>
                <li>End-to-End Data Lifecycle Management: Identified and integrated disparate data sources using expert SQL and Python</li>
                <li>Data Reporting & Executive Presentation: Translated technical findings into interactive Power BI/Tableau dashboards</li>
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
                <strong>Tech Stack:</strong> <span className="tech-inline">Power BI</span>, <span className="tech-inline">SQL (Expert)</span>, <span className="tech-inline">BigQuery</span>, <span className="tech-inline">Excel (Advanced)</span>, <span className="tech-inline">DAX</span>, <span className="tech-inline">Oracle Analytics Cloud</span>, <span className="tech-inline">Python</span>
              </div>
              <ul className="exp-bullets">
                <li>BI Product Development: Expert in developing and maintaining high-scale analytic data products using Power BI</li>
                <li>GCP & Advanced Engineering: Proficient in Python and SQL for architecting data models</li>
                <li>Healthcare Operations & ITSM Integration: Deep understanding of hospital operations and ITSM/ITIL concepts</li>
                <li>Strategic Stakeholder Partnership: Skilled in collaborating with SMO Leaders and ITG organizations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Master's degree, Computer Science</h3>
            <p className="edu-school">North Carolina Agricultural and Technical State University</p>
            <p className="edu-date">Jan 2023 - Dec 2024</p>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
