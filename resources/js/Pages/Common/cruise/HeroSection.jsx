import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaShip, FaAnchor, FaDollarSign, FaSearch, FaStar, FaArrowRight, FaChevronRight } from 'react-icons/fa';

const HeroSection = () => {
  const [activeField, setActiveField] = useState(null);
  const [searchValues, setSearchValues] = useState({
    location: 'USA',
    date: '13 May, 2023',
    cruiseLine: 'Cunard',
    departure: 'Vancouver',
    price: '$200-$500'
  });
  const [isTyping, setIsTyping] = useState(false);
  const [popularDestinations] = useState(['Caribbean', 'Mediterranean', 'Alaska', 'Hawaii', 'Bahamas']);
  const [popularCruiseLines] = useState(['Royal Caribbean', 'Carnival', 'Norwegian', 'Princess', 'Celebrity']);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleInputChange = (e, field) => {
    setSearchValues({
      ...searchValues,
      [field]: e.target.value
    });
    setIsTyping(true);
  };

  const handleFocus = (field) => {
    setActiveField(field);
  };

  const handleBlur = () => {
    setActiveField(null);
    setIsTyping(false);
  };

  const handleQuickSelect = (value, field) => {
    setSearchValues({
      ...searchValues,
      [field]: value
    });
  };

  return (
    <section 
      className={`hero-section ${scrolled ? 'scrolled' : ''}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(/cruise/2.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="hero-overlay"></div>
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>
      
      <div className="hero-content" style={{ textAlign: 'left', maxWidth: '1100px', marginLeft: '8%' }}>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="subtitle">Discover Luxury at Sea</h2>
          <h1 className="title">Your Dream Cruise<br />Adventure Awaits</h1>
          <div className="highlight-badge">
            <FaStar className="star-icon" />
            <span>Award-winning cruise experiences</span>
          </div>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="search-bar-wrapper">
            <div className={`search-bar ${activeField ? 'active' : ''}`}>
              <div className="search-items">
                <div className={`search-item ${activeField === 'location' ? 'active' : ''}`}>
                  <div className="icon-label">
                    <FaMapMarkerAlt className={activeField === 'location' ? 'active-icon' : ''} />
                    <span>Location</span>
                  </div>
                  <input 
                    type="text" 
                    value={searchValues.location}
                    onChange={(e) => handleInputChange(e, 'location')}
                    onFocus={() => handleFocus('location')}
                    onBlur={handleBlur}
                  />
                  {activeField === 'location' && (
                    <div className="dropdown-suggestions">
                      <p className="suggestion-title">Popular Destinations</p>
                      <div className="suggestion-items">
                        {popularDestinations.map((dest, index) => (
                          <div 
                            key={index} 
                            className="suggestion-item"
                            onClick={() => handleQuickSelect(dest, 'location')}
                          >
                            <FaMapMarkerAlt className="suggestion-icon" />
                            <span>{dest}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="divider"></div>

                <div className={`search-item ${activeField === 'date' ? 'active' : ''}`}>
                  <div className="icon-label">
                    <FaCalendarAlt className={activeField === 'date' ? 'active-icon' : ''} />
                    <span>Date</span>
                  </div>
                  <input 
                    type="text" 
                    value={searchValues.date}
                    onChange={(e) => handleInputChange(e, 'date')}
                    onFocus={() => handleFocus('date')}
                    onBlur={handleBlur}
                  />
                  {activeField === 'date' && (
                    <div className="dropdown-suggestions">
                      <p className="suggestion-title">Suggested Dates</p>
                      <div className="suggestion-items">
                        {['May 2023', 'June 2023', 'July 2023', 'August 2023'].map((date, index) => (
                          <div 
                            key={index} 
                            className="suggestion-item"
                            onClick={() => handleQuickSelect(date, 'date')}
                          >
                            <FaCalendarAlt className="suggestion-icon" />
                            <span>{date}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="divider"></div>

                <div className={`search-item ${activeField === 'cruiseLine' ? 'active' : ''}`}>
                  <div className="icon-label">
                    <FaShip className={activeField === 'cruiseLine' ? 'active-icon' : ''} />
                    <span>Cruiseline</span>
                  </div>
                  <input 
                    type="text" 
                    value={searchValues.cruiseLine}
                    onChange={(e) => handleInputChange(e, 'cruiseLine')}
                    onFocus={() => handleFocus('cruiseLine')}
                    onBlur={handleBlur}
                  />
                  {activeField === 'cruiseLine' && (
                    <div className="dropdown-suggestions">
                      <p className="suggestion-title">Popular Cruise Lines</p>
                      <div className="suggestion-items">
                        {popularCruiseLines.map((line, index) => (
                          <div 
                            key={index} 
                            className="suggestion-item"
                            onClick={() => handleQuickSelect(line, 'cruiseLine')}
                          >
                            <FaShip className="suggestion-icon" />
                            <span>{line}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="divider"></div>

                <div className={`search-item ${activeField === 'departure' ? 'active' : ''}`}>
                  <div className="icon-label">
                    <FaAnchor className={activeField === 'departure' ? 'active-icon' : ''} />
                    <span>Departure</span>
                  </div>
                  <input 
                    type="text" 
                    value={searchValues.departure}
                    onChange={(e) => handleInputChange(e, 'departure')}
                    onFocus={() => handleFocus('departure')}
                    onBlur={handleBlur}
                  />
                  {activeField === 'departure' && (
                    <div className="dropdown-suggestions">
                      <p className="suggestion-title">Popular Ports</p>
                      <div className="suggestion-items">
                        {['Miami', 'Vancouver', 'Seattle', 'New York', 'Barcelona'].map((port, index) => (
                          <div 
                            key={index} 
                            className="suggestion-item"
                            onClick={() => handleQuickSelect(port, 'departure')}
                          >
                            <FaAnchor className="suggestion-icon" />
                            <span>{port}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="divider"></div>

                <div className={`search-item ${activeField === 'price' ? 'active' : ''}`}>
                  <div className="icon-label">
                    <FaDollarSign className={activeField === 'price' ? 'active-icon' : ''} />
                    <span>Price</span>
                  </div>
                  <input 
                    type="text" 
                    value={searchValues.price}
                    onChange={(e) => handleInputChange(e, 'price')}
                    onFocus={() => handleFocus('price')}
                    onBlur={handleBlur}
                  />
                  {activeField === 'price' && (
                    <div className="dropdown-suggestions">
                      <p className="suggestion-title">Price Ranges</p>
                      <div className="suggestion-items">
                        {['$100-$300', '$300-$500', '$500-$1000', '$1000+'].map((range, index) => (
                          <div 
                            key={index} 
                            className="suggestion-item"
                            onClick={() => handleQuickSelect(range, 'price')}
                          >
                            <FaDollarSign className="suggestion-icon" />
                            <span>{range}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <Link to="/cruises" className="search-button">
                <div className="search-button-content">
                  <FaSearch className="search-icon" />
                  <span>Find Cruises</span>
                </div>
                <div className="search-button-hover">
                  <FaChevronRight className="arrow-icon" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="filter-section">
            <div className="filter-labels">
              <span className="filter-label">Popular filters:</span>
            </div>
            <div className="filter-tags">
              <button className="filter-tag">
                <span className="tag-dot"></span>
                Luxury
              </button>
              <button className="filter-tag">
                <span className="tag-dot"></span>
                Family
              </button>
              <button className="filter-tag">
                <span className="tag-dot"></span>
                Ocean View
              </button>
              <button className="filter-tag">
                <span className="tag-dot"></span>
                All-Inclusive
              </button>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Cruise Itineraries</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Cruise Lines</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up hero-book-now-wrapper" style={{ animationDelay: '1s' }}>
          <Link to="/cruises" className="hero-book-now">
            <span>EXPLORE CRUISES</span>
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;