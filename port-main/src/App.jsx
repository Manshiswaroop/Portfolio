import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Certificates from './components/Certificates.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;