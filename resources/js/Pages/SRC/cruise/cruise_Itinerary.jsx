import React, { useState, useEffect } from "react";
import "./Itinerary.css";
import InclusionsExclusions from "../packeges/inclusions";

const Itinerary = () => {
  const [itineraryData, setItineraryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dummy data (fallback)
  const dummyData = [
    { day: 1, 
      title: "Miami Port", 
      subtitle: `.Evening:Enjoying the Flavour of Dubai  .
    
      `
,
subtitle2:'Overnight:',
      

      description: `Explore the Palm Jumeirah and Atlantis Hotel. 
      Afternoon: Visit the Dubai Mall and shop or explore the Dubai Aquarium. 
      Evening: Ascend the Burj Khalifa to witness breathtaking views.`,
    },
    { day: 2, 
      title: "At Sea",
      subtitle: `Half-day guided Dubai city tour
      Visit the Dubai Museum at Al Fahidi Fort.
      Stop by Jumeirah Mosque and Burj Al Arab for photo ops.`,
      description: `Explore the Palm Jumeirah and Atlantis Hotel. 
      Afternoon: Visit the Dubai Mall and shop or explore the Dubai Aquarium. 
      Evening: Ascend the Burj Khalifa to witness breathtaking views.`,

     },
    {
      day: 4,
      title: "Florida Port",
      subtitle: `Half-day guided Dubai city tour
Visit the Dubai Museum at Al Fahidi Fort.
Stop by Jumeirah Mosque and Burj Al Arab for photo ops.`,
      description: `Explore the Palm Jumeirah and Atlantis Hotel. 
      Afternoon: Visit the Dubai Mall and shop or explore the Dubai Aquarium. 
      Evening: Ascend the Burj Khalifa to witness breathtaking views.`,
    },
  ];

  // Fetch data from API
  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_ITINERARY_API || "https://api.example.com/itinerary");
        if (!response.ok) {
          throw new Error("Failed to fetch itinerary data");
        }
        const data = await response.json();
        setItineraryData(data);
      } catch (err) {
        console.error("Error fetching itinerary data:", err);
        setError(err.message);
        setItineraryData(dummyData); // Fallback to dummy data on error
      } finally {
        setLoading(false);
      }
    };

    fetchItinerary();
  }, []);

  if (loading) {
    return <div className="itinerary-wrapper">Loading itinerary...</div>;
  }

  return (
    <div className="itinerary-wrapper">
      {/* Header */}
      <div className="itinerary-header">
        <h3 className="itinerary-title">Itinerary</h3>
        <p className="itinerary-description">Day-wise details of your package</p>
        <hr className="header-separator" />
      </div>

      {/* Error Message */}
      {error && (
        <div className="error-message">
          <p>⚠️ {error}</p>
          <p>Showing default itinerary data.</p>
        </div>
      )}

      {/* Content */}
      <div className="itinerary-content">
        {itineraryData.map((item) => (
          <div key={item.day} className="itinerary-day">
            <div className="day-container">
              <div className="day-icon">Day {item.day}</div>
              <div className="day-title-container">
                <p className="day-title">{item.title}</p>
              </div>
            </div>
            <div className="day-content">
              {item.subtitle && <h3 className="day-subtitle">{item.subtitle}</h3>}
              {item.description && <p className="day-description">{item.description}</p>}
            </div>
            <hr className="day-separator" />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="itinerary-footer">
        <a href="#" className="view-full-itinerary">
          View Full Itinerary &raquo;
        </a>
      </div>

      {/* Inclusions & Exclusions */}
      {/* <InclusionsExclusions /> */}
    </div>
  );
};

export default Itinerary;
