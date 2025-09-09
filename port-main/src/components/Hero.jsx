import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="avatar">
          <img src="/avatar.png" alt="Manshi Swaroop" />
        </div>
        <h1>Manshi Swaroop</h1>
        <h2>Data Analyst · Data Scientist</h2>
        <p>Email: <a href="mailto:swaroopm1520@gmail.com" style={{color: '#7b61ff'}}>swaroopm1520@gmail.com</a> | Phone: +91 9430959001</p>
        <p>
          <a href="https://github.com/Manshiswaroop" target="_blank" rel="noopener noreferrer" style={{color: '#7b61ff'}}>GitHub</a> | 
          <a href="https://linkedin.com/in/manshiswaroop" target="_blank" rel="noopener noreferrer" style={{color: '#7b61ff'}}>LinkedIn</a>
        </p>
        <div className="hero-buttons">
          <a href="/resume.pdf" download className="btn">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;