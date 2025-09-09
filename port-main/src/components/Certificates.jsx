import React from 'react';

const Certificates = () => {
  return (
    <section id="certificates" style={{background: 'rgba(10, 10, 20, 0.5)'}}>
      <div className="container">
        <div className="section-title">
          <h2>Certificates</h2>
        </div>
        <div className="certificates-grid">
          <div className="certificate-item">
            <i className="fas fa-certificate"></i>
            <h3>Data Analytics Job Simulation</h3>
            <p>Deloitte</p>
          </div>
          <div className="certificate-item">
            <i className="fas fa-certificate"></i>
            <h3>C++ Programming</h3>
            <p>Udemy</p>
          </div>
          <div className="certificate-item">
            <i className="fas fa-certificate"></i>
            <h3>Ninjas Slayground 2.0</h3>
            <p>Coding Ninjas</p>
          </div>
          <div className="certificate-item">
            <i className="fas fa-certificate"></i>
            <h3>Pro Python</h3>
            <p>Advanced Python Programming</p>
          </div>
          <div className="certificate-item">
            <i className="fas fa-certificate"></i>
            <h3>SAWIT.AI Learnathon</h3>
            <p>AI & Machine Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;