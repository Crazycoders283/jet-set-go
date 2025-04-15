import React from 'react';
import './PartnerSection.css';

const PartnerSection = () => {
  const partners = [
    { name: "Diners Club", logo: "/cruise/partners/diners-club.png" },
    { name: "Discover", logo: "/cruise/partners/discover.png" },
    { name: "American Express", logo: "/cruise/partners/amex.png" },
    { name: "Mastercard", logo: "/cruise/partners/mastercard.png" },
    { name: "ARC", logo: "/cruise/partners/arc.png" },
    { name: "UATP", logo: "/cruise/partners/uatp.png" },
    { name: "Visa", logo: "/cruise/partners/visa.png" }
  ];

  return (
    <section className="partner-section">
      <div className="container">
        <h2 className="section-title">Valued Partners</h2>
        <div className="partner-logos">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo-container">
              <img 
                src={partner.logo}
                alt={partner.name}
                className="partner-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;