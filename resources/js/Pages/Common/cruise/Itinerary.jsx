import React from 'react';
import { Link } from 'react-router-dom';

const Itinerary = () => {
  return (
    <div style={{ padding: '50px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1>Cruise Itinerary</h1>
        <div>
          <Link 
            to="/cruises" 
            style={{ padding: '8px 15px', marginRight: '10px', background: '#f0f0f0', color: '#333', border: 'none', borderRadius: '4px', textDecoration: 'none' }}
          >
            Back to Cruises
          </Link>
          <Link 
            to="/" 
            style={{ padding: '8px 15px', background: '#0066B2', color: 'white', border: 'none', borderRadius: '4px', textDecoration: 'none' }}
          >
            Home
          </Link>
        </div>
      </div>
      
      <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px', marginBottom: '30px', backgroundColor: '#f9f9f9' }}>
        <h2>7-Day Caribbean Cruise</h2>
        <p><strong>Departure:</strong> Miami, FL</p>
        <p><strong>Duration:</strong> 7 Days</p>
        <p><strong>Ship:</strong> Royal Caribbean - Symphony of the Seas</p>
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <h3>Daily Schedule</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {[1, 2, 3, 4, 5, 6, 7].map(day => (
            <div key={day} style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '15px' }}>
              <h4>Day {day}</h4>
              <p><strong>Location:</strong> {
                day === 1 ? "Miami, Florida" :
                day === 2 ? "At Sea" :
                day === 3 ? "Cozumel, Mexico" :
                day === 4 ? "George Town, Grand Cayman" :
                day === 5 ? "Falmouth, Jamaica" :
                day === 6 ? "At Sea" :
                "Return to Miami"
              }</p>
              <p><strong>Activities:</strong> {
                day === 1 ? "Embarkation, Welcome Party" :
                day === 2 ? "Pool Day, Casino Night" :
                day === 3 ? "Beach Excursion, Shopping" :
                day === 4 ? "Snorkeling, Island Tour" :
                day === 5 ? "Dunn's River Falls, Zipline Adventure" :
                day === 6 ? "Spa Day, Farewell Dinner" :
                "Disembarkation"
              }</p>
            </div>
          ))}
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button style={{ padding: '10px 20px', background: '#0066B2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
          Book This Cruise
        </button>
      </div>
    </div>
  );
};

export default Itinerary; 