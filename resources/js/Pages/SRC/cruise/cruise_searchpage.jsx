import React, { useState, useEffect } from "react";

import { Head, Link, useForm } from '@inertiajs/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendarAlt,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { Ship } from "lucide-react";
import "../Home/searchpage.css";
import Search from "../Home/search"; // Corrected import for the search component

// Dummy data with five cruise packages
const dummyData = [
  {
    id: 1,
    title: "3 Night Bahamas",
    ship: "MSC Divina",
    departure: "Miami, Florida",
    ports: "Freeport, Grand Bahama Island • Ocean Cay Marine Reserve",
    dates: "January 2025 • February 2025 • March 2025",
    image:
      "https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg",
  },
  {
    id: 2,
    title: "7 Night Caribbean",
    ship: "Carnival Breeze",
    departure: "Galveston, Texas",
    ports: "Cozumel, Mexico • Grand Cayman • Jamaica",
    dates: "April 2025 • May 2025",
    image:
      "https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg",
  },
  {
    id: 3,
    title: "5 Night Mediterranean",
    ship: "Norwegian Epic",
    departure: "Rome, Italy",
    ports: "Naples • Mykonos • Santorini",
    dates: "June 2025 • July 2025",
    image:
      "https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg",
  },
  {
    id: 4,
    title: "10 Night Alaskan Explorer",
    ship: "Holland America Line",
    departure: "Seattle, Washington",
    ports: "Juneau • Glacier Bay • Sitka • Ketchikan",
    dates: "August 2025 • September 2025",
    image:
      "https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg",
  },
  {
    id: 5,
    title: "14 Night Transatlantic",
    ship: "Queen Mary 2",
    departure: "Southampton, England",
    ports: "New York, USA • Halifax, Canada",
    dates: "October 2025",
    image:
      "https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg",
  },
];

// Cruise Package Card Component
const CruisePackageCard = ({ cruise }) => {
  return (
    <div className="cruise-card">
      <Head title="Search" />
      <div className="cruise-card-image">
        <img src={cruise.image} alt={cruise.title} className="image" />
      </div>
      <div className="cruise-card-content">
        <h1 className="cruise-title">{cruise.title}</h1>
        <h2 className="cruise-ship">{cruise.ship}</h2>
        <p className="cruise-info">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <span>Departing: </span>
          {cruise.departure}
        </p>
        <p className="cruise-info">
          <Ship className="icon" /> <span>Ports of call: </span>
          {cruise.ports}
        </p>
        <p className="cruise-info">
          <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
          <span>Sailing Dates: </span>
          {cruise.dates}
        </p>
        <button className="view-itinerary-btn"><Link href={route('booking_now')}>View Itinerary</Link></button>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [cruises, setCruises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.example.com/cruises")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch cruises");
        }
        return response.json();
      })
      .then((data) => {
        setCruises(data);
      })
      .catch((error) => {
        console.error(error);
        setCruises(dummyData); // Fallback to dummy data
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      {/* Render the search component */}
      <div className="search-section">
        <Search />
      </div>
      {/* Display cruise cards */}
      <div className="cruise-container">
        {cruises.map((cruise) => (
          <CruisePackageCard key={cruise.id} cruise={cruise} />
        ))}
      </div>
    </div>
  );
};

export default App;
