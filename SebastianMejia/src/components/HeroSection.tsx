import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <video
        className="hero-video"
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <a href="https://github.com/Sebastian7ML" target="_blank" rel="noopener noreferrer">
          <img src="/sm.svg" className="logo" alt="Sebas logo" />
        </a>
        <h1>Sebastian Mejia</h1>
        <h2>Avionics Technician & Software Engineer</h2>
        <h3>// in short: Tech Enthusiast</h3>
      </div>
    </div>
  );
};

export default HeroSection;
