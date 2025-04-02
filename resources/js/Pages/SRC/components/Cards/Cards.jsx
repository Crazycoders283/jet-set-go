import React from "react";
import "../Cards/card.css";
import { Head, Link, useForm } from '@inertiajs/react';
const cardsData = [
  {
    id: 1,
    image: "http://vacay.ca/wp-content/uploads/2019/07/Vancouver-skyline.jpg",
    title: "Carnival",
    rating: "5.0",
    description: "Starts from $31.27/p.p",
    buttonText: "Book Now",
  },
  {
    id: 2,
    image: "https://d3e1m60ptf1oym.cloudfront.net/a23dbaca-c025-4f8d-a5c3-f115b1702532/18-08-2015-1680_xgaplus.jpg",
    title: "Royal Caribbean",
    rating: "4.8",
    description: "Starts from $45.00/p.p",
    buttonText: "Book Now",
  },
  {
    id: 3,
    image: "https://vancouver.ca/images/cov/feature/about-vancouver-facebook-size.jpg",
    title: "Disney Cruise",
    rating: "4.7",
    description: "Starts from $50.00/p.p",
    buttonText: "Book Now",
  },
  {
    id: 3,
    image: "https://vancouver.ca/images/cov/feature/about-vancouver-facebook-size.jpg",
    title: "Curnad",
    rating: "4.7",
    description: "Starts from $50.00/p.p",
    buttonText: "Book Now",
  },
  {
    id: 3,
    image: "https://vancouver.ca/images/cov/feature/about-vancouver-facebook-size.jpg",
    title: "Norwegian Caribbean",
    rating: "4.7",
    description: "Starts from $50.00/p.p",
    buttonText: "Book Now",
  },
  {
    id: 3,
    image: "https://vancouver.ca/images/cov/feature/about-vancouver-facebook-size.jpg",
    title: "Disney Cruise",
    rating: "4.7",
    description: "Starts from $50.00/p.p",
    buttonText: "Book Now",
  },

];

const App = ({data}) => {
  // console.log(data,'cardsDatacardsDatacardsDatacardsData')
  return (
    <div className="main-container">

      <div className="card-grid">
        {data.map((card) => (
          <div className="card" key={card.id}>
            <div className="image-container">
              <img src={card.image} alt={card.title} className="card-image" />
              <div className="rating-badge">
                <span>⭐ {card.rating}</span>
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <button className="book-button"><Link href={route('booking_index')}>{card.buttonText}</Link></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
