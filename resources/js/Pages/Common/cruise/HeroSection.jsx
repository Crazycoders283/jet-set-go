import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HeroSection.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaShip, FaAnchor, FaDollarSign, FaSearch, FaStar, FaArrowRight, FaChevronRight, FaAngleDown } from 'react-icons/fa';
import cruiseData from './data/cruiselines.json';

const HeroSection = () => {
  const navigate = useNavigate();
  const [activeField, setActiveField] = useState(null);
  const [searchValues, setSearchValues] = useState({
    location: '',
    date: '',
    cruiseLine: '',
    departure: '',
    price: ''
  });
  const [cruiseLines, setCruiseLines] = useState([]);
  const [cruiseLinesDetails, setCruiseLinesDetails] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [departurePorts, setDeparturePorts] = useState(['Miami', 'Vancouver', 'Seattle', 'New York', 'Barcelona', 'Sydney', 'Los Angeles']);
  const [scrolled, setScrolled] = useState(false);
  const [availableMonths] = useState([
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ]);
  const [availableYears] = useState([2023, 2024, 2025]);
  const [priceRanges] = useState([
    '$100-$500', '$500-$1000', '$1000-$1500', '$1500-$2000', '$2000+'
  ]);

  useEffect(() => {
    // Extract cruise lines and unique destinations from the JSON data
    if (cruiseData && cruiseData.cruiseLines) {
      const lines = cruiseData.cruiseLines.map(line => line.name);
      setCruiseLines(lines);
      setCruiseLinesDetails(cruiseData.cruiseLines);
      
      // Extract all unique destinations
      const allDestinations = new Set();
      cruiseData.cruiseLines.forEach(line => {
        line.destinations.forEach(destination => {
          allDestinations.add(destination);
        });
      });
      setDestinations(Array.from(allDestinations));
    }
  }, []);

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

  const handleFocus = (field) => {
    setActiveField(field);
  };

  const handleBlur = (e) => {
    // Delay closing to allow click events on dropdown items
    setTimeout(() => {
      setActiveField(null);
    }, 200);
  };

  const handleQuickSelect = (value, field) => {
    setSearchValues({
      ...searchValues,
      [field]: value
    });
  };
  
  const handleSelectDate = (month, year) => {
    const dateString = `${month} ${year}`;
    setSearchValues({
      ...searchValues,
      date: dateString
    });
    setActiveField(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Create query parameters from search values
    const queryParams = new URLSearchParams();
    Object.entries(searchValues).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });
    
    // Navigate to cruises page with search parameters
    navigate(`/cruises?${queryParams.toString()}`);
  };

  return (
    <>
      <section 
        className={`hero-section ${scrolled ? 'scrolled' : ''}`}
        style={{
          backgroundImage: `url(/cruise/2.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        
        <div className="hero-content container" style={{ textAlign: 'left', maxWidth: '1100px', marginLeft: '8%' }}>
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
                    <div className="select-wrapper">
                      <input 
                        type="text" 
                        placeholder="Select destination"
                        value={searchValues.location}
                        onClick={() => handleFocus('location')}
                        onBlur={handleBlur}
                        readOnly
                      />
                      <FaAngleDown className="dropdown-icon" />
                    </div>
                    {activeField === 'location' && (
                      <div className="dropdown-suggestions">
                        <p className="suggestion-title">Popular Destinations</p>
                        <div className="suggestion-items">
                          {destinations.map((dest, index) => (
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
                    <div className="select-wrapper">
                      <input 
                        type="text" 
                        placeholder="Select date"
                        value={searchValues.date}
                        onClick={() => handleFocus('date')}
                        onBlur={handleBlur}
                        readOnly
                      />
                      <FaAngleDown className="dropdown-icon" />
                    </div>
                    {activeField === 'date' && (
                      <div className="dropdown-suggestions">
                        <p className="suggestion-title">Select Month and Year</p>
                        <div className="date-selector">
                          <div className="date-column">
                            <p className="date-column-title">Month</p>
                            <div className="date-options">
                              {availableMonths.map((month, index) => (
                                <div 
                                  key={index} 
                                  className="date-option"
                                  onClick={() => {
                                    const year = searchValues.date.split(' ')[1] || availableYears[0];
                                    handleSelectDate(month, year);
                                  }}
                                >
                                  {month}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="date-column">
                            <p className="date-column-title">Year</p>
                            <div className="date-options">
                              {availableYears.map((year, index) => (
                                <div 
                                  key={index} 
                                  className="date-option"
                                  onClick={() => {
                                    const month = searchValues.date.split(' ')[0] || availableMonths[0];
                                    handleSelectDate(month, year);
                                  }}
                                >
                                  {year}
                                </div>
                              ))}
                            </div>
                          </div>
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
                    <div className="select-wrapper">
                      <input 
                        type="text" 
                        placeholder="Select cruise line"
                        value={searchValues.cruiseLine}
                        onClick={() => handleFocus('cruiseLine')}
                        onBlur={handleBlur}
                        readOnly
                      />
                      <FaAngleDown className="dropdown-icon" />
                    </div>
                    {activeField === 'cruiseLine' && (
                      <div className="dropdown-suggestions">
                        <p className="suggestion-title">Cruise Lines</p>
                        <div className="cruise-lines-list">
                          {cruiseLinesDetails.map((line, index) => (
                            <div 
                              key={index} 
                              className="cruise-line-item"
                              onClick={() => handleQuickSelect(line.name, 'cruiseLine')}
                            >
                              <div className="cruise-line-icon">
                                <FaShip className="suggestion-icon" />
                              </div>
                              <div className="cruise-line-info">
                                <span className="cruise-line-name">{line.name}</span>
                                <span className="cruise-line-desc">{line.description}</span>
                              </div>
                              <div className="cruise-line-price">{line.price}</div>
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
                    <div className="select-wrapper">
                      <input 
                        type="text" 
                        placeholder="Select port"
                        value={searchValues.departure}
                        onClick={() => handleFocus('departure')}
                        onBlur={handleBlur}
                        readOnly
                      />
                      <FaAngleDown className="dropdown-icon" />
                    </div>
                    {activeField === 'departure' && (
                      <div className="dropdown-suggestions">
                        <p className="suggestion-title">Departure Ports</p>
                        <div className="suggestion-items">
                          {departurePorts.map((port, index) => (
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
                    <div className="select-wrapper">
                      <input 
                        type="text" 
                        placeholder="Select price range"
                        value={searchValues.price}
                        onClick={() => handleFocus('price')}
                        onBlur={handleBlur}
                        readOnly
                      />
                      <FaAngleDown className="dropdown-icon" />
                    </div>
                    {activeField === 'price' && (
                      <div className="dropdown-suggestions">
                        <p className="suggestion-title">Price Ranges</p>
                        <div className="suggestion-items">
                          {priceRanges.map((range, index) => (
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

                <button onClick={handleSearch} className="search-button">
                  <div className="search-button-content">
                    <FaSearch className="search-icon" />
                    <span>Find Cruises</span>
                  </div>
                  <div className="search-button-hover">
                    <FaChevronRight className="arrow-icon" />
                  </div>
                </button>
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

          <div className="animate-fade-in-up hero-book-now-wrapper" style={{ animationDelay: '1s' }}>
            <Link to="/cruises" onClick={(e) => {
              e.preventDefault();
              navigate('/cruises');
            }} className="hero-book-now">
              <span>EXPLORE CRUISES</span>
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Marketing stats section moved below hero section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-container">
            <div className="stat-box">
              <div className="stat-number">500+</div>
              <div className="stat-label">Cruise Itineraries</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">20+</div>
              <div className="stat-label">Cruise Lines</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;