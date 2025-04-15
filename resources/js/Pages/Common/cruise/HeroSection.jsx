import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section 
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(/cruise/2.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="hero-content" style={{ textAlign: 'left', maxWidth: '900px', marginLeft: '8%' }}>
        <h2 className="subtitle">Discover Luxury at Sea</h2>
        <h1 className="title">Your Dream Cruise<br />Adventure Awaits</h1>
        
        <div className="search-bar" style={{ padding: 0 }}>
          <div className="search-items">
            <div className="search-item">
              <div className="icon-label">
                <i className="fas fa-map-marker-alt"></i>
                <span>Location</span>
              </div>
              <input type="text" defaultValue="USA" />
            </div>

            <div className="divider"></div>

            <div className="search-item">
              <div className="icon-label">
                <i className="far fa-calendar"></i>
                <span>Date</span>
              </div>
              <input type="text" defaultValue="13 May, 2023" />
            </div>

            <div className="divider"></div>

            <div className="search-item">
              <div className="icon-label">
                <i className="fas fa-ship"></i>
                <span>Cruiseline</span>
              </div>
              <input type="text" defaultValue="Cunard" />
            </div>

            <div className="divider"></div>

            <div className="search-item">
              <div className="icon-label">
                <i className="fas fa-anchor"></i>
                <span>Departure</span>
              </div>
              <input type="text" defaultValue="Vancouver" />
            </div>

            <div className="divider"></div>

            <div className="search-item">
              <div className="icon-label">
                <i className="fas fa-dollar-sign"></i>
                <span>Price</span>
              </div>
              <input type="text" defaultValue="$200-$500" />
            </div>
          </div>

          <Link to="/cruises" className="search-button">
            <i className="fas fa-search" style={{ fontSize: '16px' }}></i>
            <span style={{ marginLeft: '8px', display: 'inline-block' }}>Book Now</span>
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