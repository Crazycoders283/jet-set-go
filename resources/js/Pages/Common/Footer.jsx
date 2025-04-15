import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// Note: Make sure to include Font Awesome in your main HTML file:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/images/logo.png" alt="JET SETTERS" className="logo-image" />
          </div>
          <div className="footer-about">
            <p>Discover extraordinary cruise experiences with us. We've helped thousands of travelers create unforgettable memories on the seas.</p>
          </div>
          <div className="connect-us">
            <h3>Connect with us</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter" className="social-link active">
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
            <h3>Services</h3>
            <ul>
              <li><Link to="#">Cruise Booking</Link></li>
              <li><Link to="#">Terms & Conditions</Link></li>
              <li><Link to="#">COVID-19 Updates</Link></li>
              <li><Link to="#">Flights</Link></li>
              <li><Link to="#">Special Offers</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Travel Blog</Link></li>
              <li><Link to="#">Reviews</Link></li>
              <li><Link to="#">Contact Us</Link></li>
              <li><Link to="#">Careers</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Popular Destinations</h3>
            <ul>
              <li><Link to="#">Caribbean</Link></li>
              <li><Link to="#">Mediterranean</Link></li>
              <li><Link to="#">Alaska</Link></li>
              <li><Link to="#">Hawaii</Link></li>
              <li><Link to="#">Bahamas</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="contact-list">
              <li>
                <i className="fas fa-envelope contact-icon"></i>
                <a href="mailto:bookings@jet-setters.us">bookings@jet-setters.us</a>
              </li>
              <li>
                <i className="fas fa-phone contact-icon"></i>
                <a href="tel:+18885813028">(+1) 888-581-3028</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt contact-icon"></i>
                <span>513 W Bonaventure Ave Tracy, CA 95391</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="copyright">
          &copy; {currentYear} JET SETTERS. All rights reserved.
        </div>
        <div className="footer-badges">
          <span className="badge"><i className="fas fa-lock"></i> Secure Booking</span>
          <span className="badge"><i className="fas fa-headset"></i> 24/7 Support</span>
          <span className="badge"><i className="fas fa-shield-alt"></i> Privacy Protected</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 