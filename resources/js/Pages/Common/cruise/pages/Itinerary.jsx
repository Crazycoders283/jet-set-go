import React from 'react';
import { FaShip } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const cruiseHighlights = [
  { title: "Cruise Dining", img: "/build/images/dining.jpg" },
  { title: "Cruise Party", img: "/build/images/party.jpg" },
  { title: "Cruise Entertainment", img: "/build/images/entertainment.jpg" }
];

const reviewers = [
  { id: 1, image: "/build/images/reviewer1.jpg", isActive: true },
  { id: 2, image: "/build/images/reviewer2.jpg", isActive: false },
  { id: 3, image: "/build/images/reviewer3.jpg", isActive: false },
  { id: 4, image: "/build/images/reviewer4.jpg", isActive: false },
  { id: 5, image: "/build/images/reviewer5.jpg", isActive: false }
];

const Itinerary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cruise = location.state?.cruise || {
    title: "3 Night Bahamas",
    cruiseLine: "MSC Divina",
    departing: "Miami, Florida",
    portsOfCall: "Freeport, Grand Bahama Island • Ocean Cay Marine Reserve",
    sailingDates: "January 2025 • February 2025 • March 2025",
    origin: "Miami",
    destination: "Freeport, Grand Bahama Island",
    embarkation: "Jan 15th, 4:30 PM",
    disembarkation: "Jan 17th, 7:30 PM",
    price: 200
  };

  return (
    <>
      <Navbar />
      <div className="itinerary-container">
        <style jsx="true">{`
          .itinerary-container {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 1rem;
            background-color: transparent;
          }

          .cruise-header {
            background: linear-gradient(to right, #ffffff, #f8faff);
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 8px 24px rgba(149, 157, 165, 0.1);
            margin-bottom: 1.5rem;
            position: relative;
            border: 1px solid rgba(230, 235, 245, 0.8);
          }

          .header-top {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1.5rem;
          }

          .destination-text {
            font-size: 1.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, #1e4799 0%, #1e88e5 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.02em;
          }

          .arrow-icon {
            color: #1e88e5;
            font-size: 1.5rem;
            font-weight: bold;
            opacity: 0.8;
          }

          .duration {
            background: #e8f3ff;
            color: #1e88e5;
            font-size: 0.875rem;
            font-weight: 600;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            margin-left: 0.75rem;
          }

          .booking-info {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            color: #4a5568;
            font-size: 0.938rem;
          }

          .booking-info-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.5rem 0;
            border-bottom: 1px dashed rgba(203, 213, 225, 0.5);
          }

          .booking-info-item:last-child {
            border-bottom: none;
          }

          .price-section {
            position: absolute;
            top: 2rem;
            right: 2rem;
            text-align: right;
          }

          .select-room-btn {
            background: linear-gradient(135deg, #1e4799 0%, #1e88e5 100%);
            color: white;
            padding: 0.875rem 2.5rem;
            border-radius: 50px;
            border: none;
            cursor: pointer;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(30, 71, 153, 0.2);
          }

          .select-room-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(30, 71, 153, 0.3);
          }

          .itinerary-section {
            background: linear-gradient(to right, #ffffff, #f8faff);
            border-radius: 12px;
            padding: 2.5rem;
            box-shadow: 0 8px 24px rgba(149, 157, 165, 0.1);
            border: 1px solid rgba(230, 235, 245, 0.8);
            margin-bottom: 1.5rem;
          }

          .itinerary-title {
            font-size: 1.75rem;
            font-weight: 700;
            color: #1a202c;
            margin-bottom: 0.5rem;
          }

          .itinerary-subtitle {
            color: #718096;
            font-size: 1rem;
            margin-bottom: 2rem;
          }

          .day-box {
            background: linear-gradient(135deg, #1e4799 0%, #1e88e5 100%);
            color: white;
            width: 64px;
            height: 64px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            font-size: 0.875rem;
            box-shadow: 0 4px 12px rgba(30, 71, 153, 0.2);
          }

          .day-box span:last-child {
            font-size: 1.5rem;
            font-weight: 700;
            margin-top: 0.125rem;
          }

          .day-content {
            flex: 1;
            padding-left: 0.5rem;
          }

          .day-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: #1a202c;
            margin-bottom: 0.375rem;
          }

          .day-subtitle {
            color: #1e88e5;
            font-size: 0.875rem;
            font-weight: 600;
            text-transform: uppercase;
            margin-bottom: 0.75rem;
            letter-spacing: 0.05em;
            background: #e8f3ff;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            display: inline-block;
          }

          .day-description {
            color: #4a5568;
            font-size: 0.938rem;
            line-height: 1.6;
          }

          .view-more {
            color: #1e88e5;
            font-size: 0.938rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-top: 1.5rem;
            background: #e8f3ff;
            border: none;
            cursor: pointer;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            transition: all 0.3s ease;
          }

          .view-more:hover {
            background: #d1e9ff;
            transform: translateX(4px);
          }

          .view-more svg {
            width: 16px;
            height: 16px;
            margin-top: 2px;
          }

          .highlights-section {
            margin: 2rem 0;
            text-align: center;
          }

          .highlights-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
          }

          .highlight-card {
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 8px 24px rgba(149, 157, 165, 0.1);
            transition: transform 0.3s ease;
          }

          .highlight-card:hover {
            transform: translateY(-5px);
          }

          .highlight-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }

          .reviews-section {
            background: linear-gradient(to right, #ffffff, #f8faff);
            border-radius: 12px;
            padding: 2.5rem;
            box-shadow: 0 8px 24px rgba(149, 157, 165, 0.1);
            border: 1px solid rgba(230, 235, 245, 0.8);
            margin: 2rem 0;
            text-align: center;
            position: relative;
          }

          .reviews-section h2 {
            font-size: 1.75rem;
            font-weight: 700;
            color: #1a202c;
            margin-bottom: 1rem;
          }

          .review-quote {
            font-size: 4rem;
            font-weight: 700;
            color: #1e88e5;
            opacity: 0.2;
            position: absolute;
            top: 1rem;
            left: 2rem;
          }

          .review-text {
            font-size: 1.125rem;
            line-height: 1.8;
            color: #4a5568;
            margin: 1.5rem 0;
            max-width: 80%;
            margin: 0 auto 1.5rem;
          }

          .reviewer-name {
            font-size: 1.125rem;
            font-weight: 700;
            color: #1a202c;
          }

          .reviewer-position {
            font-size: 0.875rem;
            color: #718096;
            margin-bottom: 1.5rem;
          }

          .reviewer-images {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
          }

          .reviewer-image {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            overflow: hidden;
            opacity: 0.5;
            transition: all 0.3s ease;
          }

          .reviewer-image.active {
            opacity: 1;
            transform: scale(1.2);
            box-shadow: 0 4px 12px rgba(30, 71, 153, 0.2);
          }

          .reviewer-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          @media (max-width: 768px) {
            .cruise-header {
              padding: 1.5rem;
            }

            .price-section {
              position: static;
              margin-top: 1.5rem;
              text-align: left;
            }

            .select-room-btn {
              width: 100%;
            }

            .header-top {
              flex-wrap: wrap;
            }

            .destination-text {
              font-size: 1.25rem;
            }

            .itinerary-section {
              padding: 1.5rem;
            }
          }
        `}</style>
        
        {/* Cruise Header */}
        <div className="cruise-header">
          <div className="header-top">
            <span className="destination-text">{cruise.origin}</span>
            <span className="arrow-icon">≫</span>
            <span className="destination-text">{cruise.destination}</span>
            <span className="duration">{cruise.title}</span>
          </div>

          <div className="booking-info">
            <div className="booking-info-item">
              <FaShip size={16} color="#1e88e5" />
              <span>Embarkation:</span>
              <span style={{ fontWeight: 600 }}>{cruise.embarkation}</span>
            </div>
            <div className="booking-info-item">
              <FaShip size={16} color="#1e88e5" />
              <span>Disembarkation:</span>
              <span style={{ fontWeight: 600 }}>{cruise.disembarkation}</span>
            </div>
            <div className="booking-info-item">
              <span>Visiting Ports:</span>
              <span style={{ fontWeight: 600 }}>{cruise.portsOfCall}</span>
            </div>
          </div>

          <div className="price-section">
            <div style={{ color: '#4a5568', fontSize: '0.938rem', marginBottom: '0.25rem' }}>Starting from</div>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1a202c', marginBottom: '0.25rem' }}>${cruise.price}</div>
            <div style={{ fontSize: '0.813rem', color: '#718096', marginBottom: '1rem' }}>
              Excl. Tax Per Person in Double Occupancy
            </div>
            <button className="select-room-btn">Select Room</button>
          </div>
        </div>
        
        {/* Back Button */}
        <div style={{ marginBottom: '1rem' }}>
          <button 
            onClick={() => navigate('/cruises')} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              background: '#e8f3ff', 
              border: 'none', 
              borderRadius: '20px', 
              padding: '0.5rem 1rem', 
              cursor: 'pointer', 
              color: '#1e88e5', 
              fontWeight: 600 
            }}
          >
            ← Back to Cruises
          </button>
        </div>

        {/* Itinerary Section */}
        <div className="itinerary-section">
          <h2 className="itinerary-title">Itinerary</h2>
          <p className="itinerary-subtitle">Day wise details of your package</p>

          {/* Day 1 */}
          <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '2rem' }}>
            <div className="day-box">
              <span>Day</span>
              <span>1</span>
            </div>
            <div className="day-content">
              <h3 className="day-title">{cruise.origin} Port</h3>
              <p className="day-subtitle">WELCOME ONBOARD</p>
              <p className="day-description">
                Just as you step aboard the {cruise.cruiseLine} — an exceptional luxury cruise experience — also known as 'A City on the Sea,' you'll be greeted with a warm welcome. Once settled, dive right in and explore the many offerings lined up for you aboard our cruise ship.
              </p>
            </div>
          </div>

          {/* Day 2 */}
          <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '2rem' }}>
            <div className="day-box">
              <span>Day</span>
              <span>2</span>
            </div>
            <div className="day-content">
              <h3 className="day-title">At Sea</h3>
              <p className="day-subtitle">DAY AT SEA</p>
              <p className="day-description">
                Enjoy a full day at sea with numerous activities and entertainment options. From swimming pools and jacuzzis to live shows and gourmet dining, there's something for everyone to enjoy while cruising toward your destination.
              </p>
            </div>
          </div>

          {/* Day 3 */}
          <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem' }}>
            <div className="day-box">
              <span>Day</span>
              <span>3</span>
            </div>
            <div className="day-content">
              <h3 className="day-title">{cruise.destination} Port</h3>
              <p className="day-subtitle">ARRIVED AT DESTINATION</p>
              <p className="day-description">
                Arrive at {cruise.destination} where you'll have the opportunity to explore this beautiful destination. Enjoy shore excursions, local cuisine, and the unique culture before returning to the ship for your journey home.
              </p>
            </div>
          </div>

          <button className="view-more">
            View Full Itinerary
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Cruise Highlights */}
        <div className="highlights-section">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Your Cruise Highlights</h2>
          <div className="highlights-grid">
            {cruiseHighlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <img src={highlight.img} alt={highlight.title} />
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="reviews-section">
          <h2>Customer Reviews</h2>
          <div className="review-quote">"</div>
          <p className="review-text">
            The tours in this website are great. I had been really enjoying with my family! The team is very professional and taking care of the customers. Will surely recommend to my friends to join this company!
          </p>
          <div className="reviewer-name">Ali Tufan</div>
          <div className="reviewer-position">Product Manager, Apple Inc.</div>
          
          <div className="reviewer-images">
            {reviewers.map((reviewer) => (
              <div 
                key={reviewer.id} 
                className={`reviewer-image ${reviewer.isActive ? 'active' : ''}`}
              >
                <img src={reviewer.image} alt={`Reviewer ${reviewer.id}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Itinerary; 