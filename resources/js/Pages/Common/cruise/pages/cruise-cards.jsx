import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendar, FaArrowLeft } from 'react-icons/fa';
import './cruise-cards.css';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const CruiseCards = () => {
  const navigate = useNavigate();

  const cruises = [
    {
      id: 1,
      title: "3 Night Bahamas",
      cruiseLine: "MSC Divina",
      departing: "Miami, Florida",
      portsOfCall: "Freeport, Grand Bahama Island • Ocean Cay Marine Reserve",
      sailingDates: "January 2025 • February 2025 • March 2025",
      image: "/build/images/cruise1.jpg",
      rating: 5.0,
      embarkation: "Jan 15th, 4:30 PM",
      disembarkation: "Jan 17th, 7:30 PM",
      price: 200
    },
    {
      id: 2,
      title: "4 Night Caribbean",
      cruiseLine: "Royal Caribbean",
      departing: "Port Canaveral, Florida",
      portsOfCall: "Nassau, Bahamas • CocoCay, Bahamas",
      sailingDates: "December 2024 • January 2025 • February 2025",
      image: "/build/images/cruise2.jpg",
      rating: 5.0,
      embarkation: "Dec 20th, 4:30 PM",
      disembarkation: "Dec 23rd, 7:30 PM",
      price: 300
    },
    {
      id: 3,
      title: "7 Night Mediterranean",
      cruiseLine: "Norwegian Cruise Line",
      departing: "Barcelona, Spain",
      portsOfCall: "Rome, Italy • Naples, Italy • Santorini, Greece",
      sailingDates: "June 2024 • July 2024 • August 2024",
      image: "/build/images/cruise3.jpg",
      rating: 5.0,
      embarkation: "Jun 15th, 4:30 PM",
      disembarkation: "Jun 21st, 7:30 PM",
      price: 500
    }
  ];

  const handleViewItinerary = (cruise) => {
    navigate('/itinerary', {
      state: {
        cruise: {
          ...cruise,
          origin: cruise.departing.split(',')[0],
          destination: cruise.portsOfCall.split('•')[0].trim()
        }
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="cruise-cards-container">
        <div className="cruise-cards-header">
          <button onClick={() => navigate('/')} className="back-button">
            <FaArrowLeft /> Back to Home
          </button>
          <h1>Available Cruises</h1>
        </div>

        <div className="cruise-cards-grid">
          {cruises.map((cruise) => (
            <div key={cruise.id} className="cruise-card">
              <div className="cruise-image">
                <img src={cruise.image} alt={cruise.title} />
                <div className="cruise-rating">
                  <span className="star">★</span>
                  <span>{cruise.rating}</span>
                </div>
              </div>
              <div className="cruise-content">
                <h2>{cruise.title}</h2>
                <p className="cruise-line-name">{cruise.cruiseLine}</p>
                
                <div className="cruise-details">
                  <div className="detail-item">
                    <FaMapMarkerAlt size={20} color="#0066B2" />
                    <div>
                      <strong>Departing from:</strong>
                      <p>{cruise.departing}</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <FaMapMarkerAlt size={20} color="#0066B2" />
                    <div>
                      <strong>Ports of Call:</strong>
                      <p>{cruise.portsOfCall}</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <FaCalendar size={20} color="#0066B2" />
                    <div>
                      <strong>Sailing Dates:</strong>
                      <p>{cruise.sailingDates}</p>
                    </div>
                  </div>
                </div>

                <button 
                  className="view-itinerary"
                  onClick={() => handleViewItinerary(cruise)}
                >
                  View Itinerary
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CruiseCards; 