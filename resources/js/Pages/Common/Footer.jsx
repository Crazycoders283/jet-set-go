import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// Note: Make sure to include Font Awesome in your main HTML file:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

const Footer = () => {
  // Social media data with icons and illustration info
  const socialMedia = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', color: '#4267B2' },
    { name: 'Twitter', icon: 'fab fa-twitter', color: '#1DA1F2' },
    { name: 'Instagram', icon: 'fab fa-instagram', color: '#C13584' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', color: '#0077B5' },
    { name: 'YouTube', icon: 'fab fa-youtube', color: '#FF0000' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/images/logo.png" alt="JET SETTERS" className="logo-image" />
          </div>
          <div className="connect-us">
            <h3>Connect us</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="YouTube" className="social-link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Service</h3>
            <ul>
              <li><Link to="#">Terms & conditions</Link></li>
              <li><Link to="#">Coronavirus (COVID-19)</Link></li>
              <li><Link to="#">Cruise</Link></li>
              <li><Link to="#">Flights</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Our Work</h3>
            <ul>
              <li><Link to="#">Packages</Link></li>
              <li><Link to="#">About</Link></li>
              <li><Link to="#">Contact us</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Packages</h3>
            <ul>
              <li><Link to="#">Dubai</Link></li>
              <li><Link to="#">Europe</Link></li>
              <li><Link to="#">Kashmir</Link></li>
              <li><Link to="#">North East & Bhutan</Link></li>
              <li><Link to="#">Georgia</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contacts us</h3>
            <ul>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:bookings@jet-setters.us">bookings@jet-setters.us</a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+18885813028">(+1) 888-581-3028</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                513 W Bonaventure Ave Tracy, CA 95391
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 