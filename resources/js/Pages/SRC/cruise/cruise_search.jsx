import React, { useState } from 'react';
import { MapPin, Calendar, DollarSign, Filter, Search as SearchIcon } from 'lucide-react';
import '../Home/search.css';
import Rectangle from './Rectangle 23394.png'
const Search = () => {
  const [filters, setFilters] = useState(['Luxury', 'Family', 'Ocean View']);
  const [priceRange, setPriceRange] = useState([200, 850]);
  return (
    <div className="search-container">
      <div className="search-overlay">
        <div className="search-content">
          <div className="search-bar">
            <div className="search-input">
              <MapPin className="search-icon" />
              <div className="input-group">
                <label>Destination</label>
                <input type="text" placeholder="Bahamas" />
              </div>
            </div>
            <div className="search-divider" />
            <div className="search-input">
              <Calendar className="search-icon" />
              <div className="input-group">
                <label>Date</label>
                <input type="text" placeholder="13 May, 2023" />
              </div>
            </div>
            <div className="search-divider" />
            <div className="search-input">
              <DollarSign className="search-icon" />
              <div className="input-group">
                <label>Price</label>
                <div className="price-range">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
            <div className="search-divider" />
            <div className="search-input">
              <Filter className="search-icon" />
              <div className="input-group">
                <label>Filters</label>
                <span>More Filters</span>
              </div>
            </div>
            <button className="search-button">
              <SearchIcon />
            </button>
          </div>
          <div className="filter-tags">
            <span className="filter-label">Other Filters (Apply)</span>
            {filters.map((filter, index) => (
              <span key={index} className="filter-tag">
                {filter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;