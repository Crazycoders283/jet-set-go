import React from "react";
import "./card.css";

const Cards = ({ destinations }) => {
  return (
    <div className="card-grid">
      {destinations.map((destination) => (
        <div className="card" key={destination.id}>
          <img
            src={destination.image}
            alt={destination.name}
            className="card-image"
          />
          <div className="card-content">
            <div className="card-header">
              <h3>{destination.name}</h3>
              <span className="rating">⭐ {destination.rating}</span>
            </div>
            <p>Starts from {destination.price}</p>
            <button className="book-button">Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
