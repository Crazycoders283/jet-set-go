import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Social Section */}
        <div className="footer-section logo-section">
          <img
            src="https://via.placeholder.com/100x100?text=Logo"
            alt="Jet Setters Logo"
            className="footer-logo"
          />
          <h4 className="footer-title">JET SETTERS</h4>
          <p className="footer-subtitle">Connect with us</p>
          <div className="social-icons flex gap-4">
            <a href="#" className="social-link" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" className="social-link" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h4 className="footer-title">Service</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Terms & conditions</a>
            </li>
            <li>
              <a href="#">Coronavirus (COVID-19)</a>
            </li>
            <li>
              <a href="#">Cruise</a>
            </li>
            <li>
              <a href="#">Flights</a>
            </li>
          </ul>
        </div>

        {/* Our Work Section */}
        <div className="footer-section">
          <h4 className="footer-title">Our Work</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Packages</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>

        {/* Packages Section */}
        <div className="footer-section">
          <h4 className="footer-title">Packages</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Dubai</a>
            </li>
            <li>
              <a href="#">Europe</a>
            </li>
            <li>
              <a href="#">Kashmir</a>
            </li>
            <li>
              <a href="#">North East & Bhutan</a>
            </li>
            <li>
              <a href="#">Georgia</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4 className="footer-title">Contact us</h4>
          <ul className="footer-contacts">
            <li>
              <FaEnvelope className="icon" />{" "}
              <a href="mailto:bookings@jet-setters.us">bookings@jet-setters.us</a>
            </li>
            <li>
              <FaPhoneAlt className="icon" /> (+1) 888-581-3028
            </li>
            <li>
              <FaMapMarkerAlt className="icon" /> 513 W Bonaventure Ave Tracy, CA
              95391
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          Copyright © 2024 |{" "}
          <a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
