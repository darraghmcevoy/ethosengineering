import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">Engineering Knowledge App</h3>
          <p>A comprehensive resource for Graduate Engineers working on projects for clients.</p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="/standards" className="footer-link">Engineering Standards</a>
            </li>
            <li className="footer-item">
              <a href="/software-guides" className="footer-link">Software Guides</a>
            </li>
            <li className="footer-item">
              <a href="/resources" className="footer-link">Project Resources</a>
            </li>
            <li className="footer-item">
              <a href="/about" className="footer-link">About</a>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Standards</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="/standards/mechanical" className="footer-link">Mechanical Engineering</a>
            </li>
            <li className="footer-item">
              <a href="/standards/electrical" className="footer-link">Electrical Engineering</a>
            </li>
            <li className="footer-item">
              <a href="/standards/design" className="footer-link">Design Engineering</a>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Software Guides</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="/software/autodesk" className="footer-link">Autodesk</a>
            </li>
            <li className="footer-item">
              <a href="/software/bluebeam" className="footer-link">Bluebeam</a>
            </li>
            <li className="footer-item">
              <a href="/software/etap" className="footer-link">ETAP</a>
            </li>
            <li className="footer-item">
              <a href="/software/solidworks" className="footer-link">SOLIDWORKS</a>
            </li>
            <li className="footer-item">
              <a href="/software/trimble" className="footer-link">Trimble</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Engineering Knowledge App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
