import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaShip, FaAnchor, FaDollarSign, FaSearch } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section 
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(/cruise/2.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="hero-content" style={{ textAlign: 'left', maxWidth: '1000px', marginLeft: '8%' }}>
        <h2 className="subtitle">Discover Luxury at Sea</h2>
        <h1 className="title">Your Dream Cruise<br />Adventure Awaits</h1>
        
        <div className="search-bar">
          <div className="search-items">
            <div className="search-item">
              <div className="icon-label">
                <FaMapMarkerAlt />
                <span>Location</span>
              </div>
              <input type="text" defaultValue="USA" />
            </div>

            <div className="divider"></div>

            <div className="search-item">
              <div className="icon-label">
                <FaCalendarAlt />
                <span>Date</span>
              </div>
              <input type="text" defaultValue="13 May, 2023" />
            </div>

            <div className="divider"></div>

            <div className="search-item">
              <div className="icon-label">
                <FaShip />
                <span>Cruiseline</span>
              </div>
              <input type="text" defaultValue="Cunard" />
            </div>

            <div className="divider"></div>

            <div className="search-item">
              <div className="icon-label">
                <FaAnchor />
                <span>Departure</span>
              </div>
              <input type="text" defaultValue="Vancouver" />
            </div>

            <div className="divider"></div>

            <div className="search-item">
              <div className="icon-label">
                <FaDollarSign />
                <span>Price</span>
              </div>
              <input type="text" defaultValue="$200-$500" />
            </div>
          </div>

          <Link to="/cruises" className="search-button">
            <FaSearch style={{ fontSize: '18px' }} />
            <span style={{ marginLeft: '10px', display: 'inline-block' }}>Book Now</span>
          </Link>
        </div>

        <div className="filter-section">
          <div className="filter-tags">
            <button className="filter-tag">Luxury</button>
            <button className="filter-tag">Family</button>
            <button className="filter-tag">Ocean View</button>
          </div>
        </div>

        <div className="hero-book-now-wrapper">
          <Link to="/cruises" className="hero-book-now">
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;