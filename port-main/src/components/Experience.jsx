import React from 'react';

const Experience = () => {
  return (
    <section id="experience" style={{background: 'rgba(10, 10, 20, 0.5)'}}>
      <div className="container">
        <div className="section-title">
          <h2>Professional Experience</h2>
        </div>
        <div className="experience-list">
          <div className="experience-item">
            <h3>Data Science Intern</h3>
            <h4>Celebal Technologies</h4>
            <span className="duration">Jan 2024 - Present</span>
            <p>Worked on Python, SQL, regression, clustering, and Generative AI.</p>
          </div>
          <div className="experience-item">
            <h3>Data Analyst Intern</h3>
            <h4>Grras Solution Pvt. Ltd.</h4>
            <span className="duration">May 2025 - July 2025</span>
            <p>Hands-on with Power BI, Tableau, Excel, APIs, and backend integration.</p>
          </div>
          <div className="experience-item">
            <h3>Python Intern</h3>
            <h4>IIHT</h4>
            <span className="duration">Aug 2023 - Sept 2024</span>
            <p>Data visualization and backend development projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;