import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container header-content">
        <div className="logo">Manshi</div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;