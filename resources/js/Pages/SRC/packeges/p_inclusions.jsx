import React, { useEffect, useState } from 'react';
import './inclusions.css';

const InclusionsExclusions = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const dummyData = {
    inclusions: [
      { title: 'Accommodation', details: '4 nights stay at a 3/4/5-star hotel (based on package).' },
      { title: 'Meals', details: ['Daily breakfast at the hotel.', 'BBQ dinner during the Desert Safari.', 'Dinner on the Dhow Cruise.'] },
      { title: 'Transfers', details: ['Airport pick-up and drop-off.', 'Transfers for all activities and tours as per itinerary.'] },
      { title: 'Tours & Activities', details: ['Dubai city tour with a professional guide.', 'Entry tickets to Burj Khalifa (At the Top).', 'Desert Safari with dune bashing, camel rides, and cultural shows.', 'Dhow Cruise Dinner on Dubai Creek or Marina.'] }
    ],
    exclusions: [
      { title: 'Flights', details: 'International or domestic airfare to/from Dubai.' },
      { title: 'Personal Expenses', details: ['Shopping, tips, and personal activities not included in the itinerary.', 'Extra meals and beverages beyond what is mentioned.'] },
      { title: 'Optional Activities', details: ['Ski Dubai tickets, Global Village/Miracle Garden entry fees, or Museum of the Future.', 'Adventure sports like zip-lining, skydiving, or hot air ballooning.'] },
      { title: 'Travel Insurance', details: 'Travel and medical insurance are not covered.' },
      { title: 'Visa Fees', details: 'UAE tourist visa costs (if applicable).' }
    ]
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/inclusions-exclusions');
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
        setData(dummyData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) console.error('Error fetching data:', error);

  return (
    <div className="main-container">
      <div className="info-container">
        <div className="content-box inclusions-box">
          <h2 className="section-title inclusions-title">Inclusions</h2>
          <ul className="item-list inclusions-list">
            {data.inclusions.map((item, index) => (
              <li key={index} className="item inclusions-item">
                <strong className="item-title inclusions-item-title">{item.title}:</strong>
                {Array.isArray(item.details) ? (
                  <ul className="details-list inclusions-details-list">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="detail inclusions-detail">{detail}</li>
                    ))}
                  </ul>
                ) : (
                  <span className="detail inclusions-detail"> {item.details}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="content-box exclusions-box">
          <h2 className="section-title exclusions-title">Exclusions</h2>
          <ul className="item-list exclusions-list">
            {data.exclusions.map((item, index) => (
              <li key={index} className="item exclusions-item">
                <strong className="item-title exclusions-item-title">{item.title}:</strong>
                {Array.isArray(item.details) ? (
                  <ul className="details-list exclusions-details-list">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="detail exclusions-detail">{detail}</li>
                    ))}
                  </ul>
                ) : (
                  <span className="detail exclusions-detail"> {item.details}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="request-callback-container">
        <h2 className="callback-title">Your Trip, Your Way - Let's Plan Together!</h2>
        <form className="callback-form">
          <input type="text" placeholder="e.g. John Smith" className="form-input name-input" />
          <input type="email" placeholder="john@example.com" className="form-input email-input" />
          <input type="text" placeholder="Enter your 10 digit number" className="form-input phone-input" />
          <textarea placeholder="Any Special Request" className="form-input request-input"></textarea>
          <div className="captcha-box">I'm not a robot (reCAPTCHA)</div>
          <button type="submit" className="callback-button">Request Call Back</button>
        </form>
      </div>
    </div>
  );
};

export default InclusionsExclusions;
