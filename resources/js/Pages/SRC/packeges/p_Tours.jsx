import React, { useState, useEffect } from "react";
import Itinerary from "../cruise/Itinerary";
import ItineraryReviewsPage from "./ItineraryReviewsPage";
import "./Tour.css";
import { Head, Link, useForm } from '@inertiajs/react';
import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer/Footer";
import InclusionsExclusions from "./inclusions";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dummyData = [
    {
      departure: "Dubai",
      duration: "2N/3D",
      price: 499,
      days: [
        {
          dayNumber: 1,
          title: "Miami Port",
          subtitle: "WELCOME ONBOARD",
          description:
            "Just as you step aboard the Empress—the top cruise in India—also known as 'A City on the Sea,' you'll be greeted with a warm welcome. Once settled, dive right in and explore the many offerings lined up for you aboard our cruise ship.",
        },
        {
          dayNumber: 2,
          title: "At Sea",
          subtitle: "DAY AT SEA",
          description:
            "Enjoy the day with luxurious amenities and endless ocean views as you sail to your destination.",
        },
        {
          dayNumber: 4,
          title: "Florida Port",
          subtitle: "ARRIVED IN FLORIDA",
          description:
            "Dock at Florida Port and explore beautiful beaches, unique attractions, and vibrant culture.",
        },
      ],
    },
  ];

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch("https://api.example.com/tours");
        if (!response.ok) throw new Error("Failed to fetch tours data");
        const data = await response.json();

        const formattedData = data.map((tour) => ({
          departure: tour.departure || "Unknown Departure",
          destination: tour.destination || "Unknown Destination",
          duration: tour.duration || "N/A",
          price: tour.price || 0,
          days: tour.days?.map((day, index) => ({
            dayNumber: day.dayNumber || index + 1,
            title: day.title || "Untitled",
            subtitle: day.subtitle || "No Subtitle",
            description: day.description || "No Description",
          })) || [],
        }));

        setTours(formattedData);
      } catch (error) {
        setError(error.message);
        setTours(dummyData);
      } finally {
        setLoading(false);
      }
    };
    fetchTours();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <>
      <Header />

      <div className="tour-image-container">
        <img
          src="https://images.pickyourtrail.com/piotr_chrobot_6o_Usye_Y_Xg_Tg_unsplash_f34241cefb.jpg?w=1152&h=440&fit=crop&dpr=1&q=40"
          alt="Tour Image"
          className="tour-image"
        />
      </div>

      <div className="tours-page" style={{ marginTop: '40px' }}>
        {tours.map((tour, index) => (
          <div key={index} className="tour-section">
            <div className="details-section shadow">
              <div className="details-content">
                <div className="details-left">
                  <div className="tour-info">
                    <h2>
                      {tour.departure} {tour.destination}
                      <span className="tour-duration">{tour.duration}</span>
                    </h2>
                  </div>
                  <div className="embarkation-disembarkation">
                    <div className="tour-info">
                      <span className="icon-hotel">🏨 </span>
                      <p>Hotel <span className="checkmark-circle"></span></p>
                    </div>
                    <div className="tour-info">
                      <span className="icon-meals">🍽 </span>
                      <p>Meals <span className="checkmark-circle"></span></p>
                    </div>
                  </div>
                  <div className="embarkation-disembarkation">
                    <div className="tour-info">
                      <span className="icon-flight">✈️ </span>
                      <p>Flights <span className="checkmark-circle"></span></p>
                    </div>
                    <div className="tour-info">
                      <span className="icon-hygiene">🧼 </span>
                      <p>Hygiene <span className="checkmark-circle"></span></p>
                    </div>
                  </div>
                </div>

                <div className="divider"></div>

                <div className="details-right">
                  <div className="details-right-content">
                    <div className="pricing-box">
                      <p className="price-label">Book now at</p>
                      <p className="price-value"> ${tour.price?.toLocaleString() || "N/A"}</p>
                      <p className="tax-info">Excl. Tax Per Person</p>
                    </div>
                    <button className="book-now-btn26">
                      <Link className="text-white">BOOK NOW</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Itinerary days={tour.days} />
            <InclusionsExclusions />





            <ItineraryReviewsPage />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Tours;
