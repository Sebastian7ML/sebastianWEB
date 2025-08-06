import React from 'react';
import { FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa6';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.youtube.com/@android-enthusiast" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaYoutube />
        </a>
        <a href="https://www.linkedin.com/in/sebastian7ml" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Sebastian7ML" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
      </div>
      <div className="footer-text">
        © {new Date().getFullYear()} Sebastian Mejia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;