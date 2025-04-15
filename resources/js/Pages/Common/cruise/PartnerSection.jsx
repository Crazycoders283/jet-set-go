import React from 'react';
import './PartnerSection.css';

const PartnerSection = () => {
  const partners = [
    { id: 1, name: 'Royal Caribbean', logo: '/build/images/partners/royal-caribbean.png' },
    { id: 2, name: 'Norwegian Cruise Line', logo: '/build/images/partners/norwegian.png' },
    { id: 3, name: 'Carnival Cruise Line', logo: '/build/images/partners/carnival.png' },
    { id: 4, name: 'MSC Cruises', logo: '/build/images/partners/msc.png' },
    { id: 5, name: 'Princess Cruises', logo: '/build/images/partners/princess.png' },
    { id: 6, name: 'Celebrity Cruises', logo: '/build/images/partners/celebrity.png' }
  ];

  return (
    <section className="partner-section">
      <div className="partner-content">
        <h2 className="section-title">Our Trusted Partners</h2>
        <p className="section-subtitle">We work with the world's leading cruise lines</p>
        
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-card">
              <img src={partner.logo} alt={partner.name} className="partner-logo" />
            </div>
          ))}
        </div>

        <div className="trust-badges">
          <div className="badge">
            <i className="fas fa-shield-alt"></i>
            <span>Secure Booking</span>
          </div>
          <div className="badge">
            <i className="fas fa-clock"></i>
            <span>24/7 Support</span>
          </div>
          <div className="badge">
            <i className="fas fa-medal"></i>
            <span>Best Price Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection; 