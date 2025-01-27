// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a
            href="https://github.com/HannahAng0"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hannah-hennesy-ang-714a3921b/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
        </div>
        <div className="rights-reserved">
          &copy; {new Date().getFullYear()} All Rights Reserved. Made with ❤️ by Hannah Ang
        </div>
      </div>
    </footer>
  );
};

export default Footer;