import React from 'react';

const Projects = () => {
  return (
    <section id="projects" style={{background: 'rgba(10, 10, 20, 0.5)'}}>
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <div className="projects-grid">
          <div className="project-item">
            <h3>AI-Powered Financial Literacy App For Women</h3>
            <p>ML + NLP based personalized insights for financial education.</p>
            <div className="technologies">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">ML</span>
              <span className="tech-tag">NLP</span>
            </div>
          </div>
          <div className="project-item">
            <h3>Rail Yatri</h3>
            <p>Flask/Django app with Railway API for real-time train information.</p>
            <div className="technologies">
              <span className="tech-tag">Flask</span>
              <span className="tech-tag">Django</span>
              <span className="tech-tag">API</span>
            </div>
          </div>
          <div className="project-item">
            <h3>Car Price Predictor</h3>
            <p>Regression ML model with Flask deployment for car price prediction.</p>
            <div className="technologies">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">ML</span>
              <span className="tech-tag">Flask</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;