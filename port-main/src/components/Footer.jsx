import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="section-title">
            <h2>Contact Me</h2>
          </div>
          <div className="social-links">
            <a href="mailto:swaroopm1520@gmail.com"><FaEnvelope className="social-icon" /></a>
            <a href="https://github.com/Manshiswaroop" target="_blank" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
            <a href="https://linkedin.com/in/manshiswaroop" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icon" /></a>
          </div>
          <p>Languages: English, Hindi</p>
          <p>Interests: Digital Art, Travel, Culture</p>
        </div>
        <div className="copyright">
          <p>© 2025 Manshi Swaroop | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;