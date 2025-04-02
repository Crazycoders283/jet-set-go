import React from "react";
import "../Flights/Flightcard.css"; // Ensure this file exists
import maskImage from "../src/packages/components/Cards/image 4.png" // Ensure correct image path
import { Head, Link } from "@inertiajs/react"; // Removed useForm since it's not used
// import ValuedPartners from "../src/"; 
// import Header from "resources/js/Pages/src/components/Common/Header";
// import Footer from "resources/js/Pages/src/components/Common/Footer";

const cardsData = [
  {
    id: 1,
    image: maskImage,
    title: "Burj Khalifa",
    subtitle: "Dubai",
  },
  {
    id: 2,
    image: maskImage,
    title: "Burj Al Arab",
    subtitle: "Dubai",
  },
  {
    id: 3,
    image: maskImage,
    title: "Safari",
    subtitle: "Dubai",
  },
  {
    id: 4,
    image: maskImage,
    title: "Safari",
    subtitle: "Dubai",
  },
];

const App = () => {
  return (
    <div className="main-container">
      
      <div className="card-grid">
        {cardsData.map((card) => (
          <div className="card" key={card.id}>
            <div className="image-container">
              <img src={card.image} alt={card.title} className="card-image" />
              <div className="overlay"></div> {/* Semi-transparent layer */}
              <div className="white-box">
                <h3 className="card-title">{card.title}</h3>
                {card.subtitle && <p className="card-subtitle">{card.subtitle}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>

        
    </div>
  );
};

export default App;
