import React, { useState } from 'react';
import './Booking.css';
import { Link } from '@inertiajs/react';
const Booking = () => {
  const [selectedDate, setSelectedDate] = useState('Jan 03');
  const [priceRange, setPriceRange] = useState([9277, 49658]);
  
  const dates = [
    { date: 'Jan 03', price: '₹8927' },
    { date: 'Jan 04', price: '₹9352' },
    { date: 'Jan 05', price: '₹8352' },
    { date: 'Jan 06', price: '₹5499' },
    { date: 'Jan 07', price: '₹5460' },
    { date: 'Jan 08', price: '₹5498' },
    { date: 'Jan 09', price: '₹5184' },
  ];

  const flights = [
    {
      airline: 'SpiceJet',
      flightNo: 'SG-8180',
      departure: '23:30',
      arrival: '10:20',
      duration: '10h 50m',
      price: 9277,
      stops: '1-stop',
      logo: '/images/spicejet.png',
      seatsLeft: null
    },
    {
      airline: 'Indigo',
      flightNo: '6E-2768',
      departure: '18:25',
      arrival: '01:15',
      duration: '06h 50m',
      price: 9576,
      stops: '1-stop',
      logo: '/images/indigo.png',
      seatsLeft: null
    },
    {
      airline: 'Air India',
      flightNo: 'AI-467',
      departure: '18:00',
      arrival: '21:05',
      duration: '27h 05m',
      price: 10801,
      stops: '1-stop',
      logo: '/images/airindia.png',
      seatsLeft: 9
    },
    {
      airline: 'Air India',
      flightNo: 'AI-2371',
      departure: '21:20',
      arrival: '11:25',
      duration: '14h 05m',
      price: 11089,
      stops: '1-stop',
      logo: '/images/airindia.png',
      seatsLeft: 2
    }
  ];

  return (
    <div className="flight-booking">
      <div className="search-header">
        <div className="route-selection">
          <input type="text" value="Delhi" readOnly />
          <button className="swap-button">⇄</button>
          <input type="text" value="Mumbai" readOnly />
        </div>
        
        <div className="date-selection">
          <input type="text" value="Jan 03" readOnly />
        </div>
        
        <div className="passenger-selection">
          <input type="text" value="1 Adult, Economy" readOnly />
        </div>
        
        <button className="search-button">Search</button>
      </div>

      <div className="special-fares">
        <span>Special Fares (Optional):</span>
        <button className="fare-type">Student</button>
        <button className="fare-type">Senior Citizen</button>
      </div>

      <div className="main-content">
        <div className="filters-sidebar">
          <h3>FILTER</h3>
          
          <div className="filter-section">
            <h4>Popular Filters</h4>
            <label className="checkbox-item">
              <input type="checkbox" defaultChecked />
              <span>Nonstop</span>
            </label>
            <label className="checkbox-item">
              <input type="checkbox" />
              <span>Morning Departure</span>
            </label>
          </div>

          <div className="filter-section">
            <h4>Price Range</h4>
            <div className="price-range-slider">
              <input 
                type="range" 
                min="9277" 
                max="49658" 
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
              />
              <div className="price-labels">
                <span>Rs. {priceRange[0]}</span>
                <span>Rs. {priceRange[1]}</span>
              </div>
            </div>
          </div>

          <div className="filter-section">
            <h4>Stops</h4>
            <div className="stops-buttons">
              <button className="stop-button">
                <div>0</div>
                <div>Nonstop</div>
              </button>
              <button className="stop-button">
                <div>1</div>
                <div>Stop</div>
              </button>
              <button className="stop-button">
                <div>2+</div>
                <div>Stops</div>
              </button>
            </div>
          </div>

          <div className="filter-section">
            <h4>Departure from Delhi</h4>
            <div className="time-grid">
              <div className="time-slot">
                <input type="checkbox" id="before-6am" />
                <label htmlFor="before-6am">Before<br />6 AM</label>
              </div>
              <div className="time-slot">
                <input type="checkbox" id="6am-12pm" />
                <label htmlFor="6am-12pm">6 AM -<br />12 PM</label>
              </div>
              <div className="time-slot">
                <input type="checkbox" id="12pm-6pm" />
                <label htmlFor="12pm-6pm">12 PM -<br />6 PM</label>
              </div>
              <div className="time-slot">
                <input type="checkbox" id="after-6pm" />
                <label htmlFor="after-6pm">After<br />6 PM</label>
              </div>
            </div>
          </div>

          <div className="filter-section">
            <h4>Arrival at Mumbai</h4>
            <div className="time-grid">
              <div className="time-slot">
                <input type="checkbox" id="before-6am-arr" />
                <label htmlFor="before-6am-arr">Before<br />6 AM</label>
              </div>
              <div className="time-slot">
                <input type="checkbox" id="6am-12pm-arr" />
                <label htmlFor="6am-12pm-arr">6 AM -<br />12 PM</label>
              </div>
              <div className="time-slot">
                <input type="checkbox" id="12pm-6pm-arr" />
                <label htmlFor="12pm-6pm-arr">12 PM -<br />6 PM</label>
              </div>
              <div className="time-slot">
                <input type="checkbox" id="after-6pm-arr" />
                <label htmlFor="after-6pm-arr">After<br />6 PM</label>
              </div>
            </div>
          </div>

          <div className="filter-section">
            <h4>Airlines</h4>
            <div className="airlines-list">
              <label className="airline-option">
                <input type="checkbox" defaultChecked />
                <span>SpiceJet</span>
                <span className="price">₹9277</span>
              </label>
              <label className="airline-option">
                <input type="checkbox" defaultChecked />
                <span>Indigo</span>
                <span className="price">₹9576</span>
              </label>
              <label className="airline-option">
                <input type="checkbox" defaultChecked />
                <span>Air India</span>
                <span className="price">₹10801</span>
              </label>
              <label className="airline-option">
                <input type="checkbox" />
                <span>Air India Express</span>
                <span className="price">₹9245</span>
              </label>
              <label className="airline-option">
                <input type="checkbox" defaultChecked />
                <span>AkasaAir</span>
                <span className="price">₹8675</span>
              </label>
            </div>
            <button className="more-button">More +</button>
          </div>
        </div>

        <div className="flights-content">
          <div className="sort-bar">Sort By:</div>
          <div className="date-slider">
            {dates.map((date) => (
              <div 
                key={date.date} 
                className={`date-card ${selectedDate === date.date ? 'selected' : ''}`}
                onClick={() => setSelectedDate(date.date)}
              >
                <div className="date">{date.date}</div>
                <div className="price">{date.price}</div>
              </div>
            ))}
          </div>

          <div className="flight-list">
            {flights.map((flight) => (
              <div key={flight.flightNo} className="flight-card">
                <div className="airline-info">
                  <img src={flight.logo} alt={flight.airline} />
                  <div>
                    <div className="airline-name">{flight.airline}</div>
                    <div className="flight-number">{flight.flightNo}</div>
                  </div>
                </div>

                <div className="time-info">
                  <div className="departure">
                    <div className="time">{flight.departure}</div>
                    <div className="city">Delhi</div>
                  </div>
                  
                  <div className="duration">
                    <div className="duration-time">{flight.duration}</div>
                    <div className="stops">{flight.stops}</div>
                  </div>

                  <div className="arrival">
                    <div className="time">{flight.arrival}</div>
                    <div className="city">Mumbai</div>
                  </div>
                </div>

                <div className="price-section">
                  <div className="price">₹ {flight.price}</div>
                  <button className="more-fare">+ More Fare</button>
                  <button className="book-now"><Link href={route('booking_index')} className='text-white'> BOOK NOW</Link></button>
                  {flight.seatsLeft && (
                    <div className="seats-left">{flight.seatsLeft} Seats left</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;