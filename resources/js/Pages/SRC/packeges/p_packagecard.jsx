import React from "react";
import { Circle, Check } from "lucide-react";
import "../Home/packagecard.css";
import Header from "../components/Common/Header/Header";
import Footer from "../components/Common/Footer/Footer";
import Image from "../Home/Rectangle 23394.png";
import Comments from "../Home/ItineraryReviewsPage"; // Corrected import
import { Head, Link, useForm } from '@inertiajs/react';
// Star Icon Component
const Star = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="star-icon">
    <path d="M10 1l2.472 6.098L19 7.919l-4.784 4.154 1.177 6.927L10 15.867 4.607 19l1.177-6.927L1 7.919l6.528-.821L10 1z" fill="#FFD700" />
  </svg>
);

// Hotel Icon Component
const HotelIcon = ({ color }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="amenity-icon">
    <path d="M19 7h-1V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1H5a2 2 0 0 0-2 2v11h18V9a2 2 0 0 0-2-2zM7 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1H7V6zm12 13H5v-7h14v7zm0-8H5V9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2z" fill={color} />
  </svg>
);

// Meal Icon Component
const MealIcon = ({ color }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="amenity-icon">
    <path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-7 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" fill={color} />
  </svg>
);

// Package Data
const packages = [
  {
    name: "Bronze",
    price: "$899/per person",
    stars: 3,
    color: "#cd7f32",
    travel: true,
    meals: false,
  },
  {
    name: "Gold",
    price: "$899/per person",
    stars: 4,
    color: "#ffd700",
    travel: true,
    meals: true,
  },
  {
    name: "Diamond",
    price: "$899/per person",
    stars: 5,
    color: "#0dcaf0",
    travel: true,
    meals: true,
  },
];

// Package Card Component
const PackageCard = ({ pkg }) => (
  <div className="package-card">
    <div className="package-header">
      <div className="icon-circle">
        <Circle className="header-icon" color={pkg.color} />
      </div>
      <h3 style={{ color: pkg.color }}>{pkg.name}</h3>
    </div>

    <ul className="package-details">
      <li className="detail-item">
        <HotelIcon color={pkg.color} />
        <span className="detail-label">Hotel</span>
        <div className="stars">
          {[...Array(pkg.stars)].map((_, i) => (
            <Star key={i} />
          ))}
        </div>
      </li>

      <li className="detail-item">
        <svg className="plane-icon amenity-icon" width="24" height="24" viewBox="0 0 24 24" fill={pkg.color}>
          <path d="M22 16.5H2c-.6 0-1-.4-1-1s.4-1 1-1h20c.6 0 1 .4 1 1s-.4 1-1 1zM14.5 6.5c0-1.1-.9-2-2-2s-2 .9-2 2v8h4v-8z" />
        </svg>
        <span className="detail-label">Travel</span>
        {pkg.travel && <Check className="check-icon" color="green" />}
      </li>

      <li className="detail-item">
        <MealIcon color={pkg.color} />
        <span className="detail-label">Meals</span>
        {pkg.meals && <Check className="check-icon" color="green" />}
      </li>
    </ul>

    <div className="price-section">
      <p className="package-price">{pkg.price}</p>
    </div>
    <button className="book-button"><Link href={route('package_itinerary_booking')}>Book Now</Link></button>
  </div>
);

// Contact Form Component
const ContactForm = () => (
  <div className="contact-form">
    <h3>Your Trip, Your Way – Let's Plan Together!</h3>
    <form className="form-content">
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="tel" placeholder="Phone Number" required />
      <textarea placeholder="Message" rows="4"></textarea>
      <div className="recaptcha-placeholder">
        <div className="g-recaptcha"></div>
      </div>
      <button type="submit" className="submit-button">Request Call Back</button>
    </form>
  </div>
);

// Main Packages Component
const Packages = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="hero-section">
        <img src={Image} alt="Travel Packages" className="packages-image" />
      </div>

      <div className="packages-container">
        <h2 className="packages-title">Our Packages</h2>
        <div className="main-content-wrapper">
          <div className="packages-section">
            {packages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} />
            ))}
          </div>
          <ContactForm />
        </div>
      </div>

      <Comments /> {/* Corrected component usage */}

      <Footer />
    </div>
  );
};

export default Packages;
