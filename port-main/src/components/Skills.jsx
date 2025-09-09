import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Languages</h3>
            <div className="skill-item">
              <span className="skill-name">Python</span>
              <div className="skill-bar">
                <div className="skill-level" style={{width: '90%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">SQL</span>
              <div className="skill-bar">
                <div className="skill-level" style={{width: '85%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">JavaScript</span>
              <div className="skill-bar">
                <div className="skill-level" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools & Technologies</h3>
            <div className="skill-item">
              <span className="skill-name">Power BI</span>
              <div className="skill-bar">
                <div className="skill-level" style={{width: '85%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Tableau</span>
              <div className="skill-bar">
                <div className="skill-level" style={{width: '80%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Machine Learning</span>
              <div className="skill-bar">
                <div className="skill-level" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3>Soft Skills</h3>
            <div className="skill-item">
              <span className="skill-name">Communication</span>
              <div className="skill-bar">
                <div className="skill-level" style={{width: '90%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Problem Solving</span>
              <div className="skill-bar">
                <div className="skill-level" style={{width: '88%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Teamwork</span>
              <div className="skill-bar">
                <div className="skill-level" style={{width: '85%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;