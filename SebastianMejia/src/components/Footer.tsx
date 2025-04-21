import React from 'react';
import { FaYoutube, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaYoutube />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaXTwitter />
        </a>
      </div>
      <div className="footer-text">
        © {new Date().getFullYear()} Sebastian Mejia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;