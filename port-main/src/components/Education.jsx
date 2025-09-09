import React from 'react';

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
        </div>
        <div className="education-grid">
          <div className="education-item">
            <h3>B.Tech (CSE)</h3>
            <p>PIET, Jaipur</p>
            <p>2022-2026</p>
            <span className="score">CGPA: 9.0/10</span>
          </div>
          <div className="education-item">
            <h3>Senior Secondary (XII)</h3>
            <p>Modern Public School</p>
            <p>2021</p>
            <span className="score">80.56%</span>
          </div>
          <div className="education-item">
            <h3>Secondary (X)</h3>
            <p>St. Joseph School</p>
            <p>2019</p>
            <span className="score">84.90%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;