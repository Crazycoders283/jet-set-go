import React from "react";
import "./ItineraryReviewsPage.css";

const ItineraryReviewsPage = () => {
  return (
    <div className="itinerary-page">
      {/* Cruise Highlight Section */}
      <section className="highlight-section">
        <h2 className="section-title">Trending Destinations</h2>
        <div className="image-grid">
          <img
            src="https://www.jaden-fox.com/wp-content/uploads/2017/02/Dinner-River-Cruise2-1.jpg"
            alt="Dining on a Cruise"
            className="highlight-image"
          />
          <img
            src="https://source.unsplash.com/600x400/?cruise-night"
            alt="Night on a Cruise"
            className="highlight-image"
          />
          <img
            src="https://source.unsplash.com/600x400/?party"
            alt="Cruise Party"
            className="highlight-image"
          />
        </div>
      </section>

      {/* Divider for better separation */}
      <hr style={{ margin: "40px 0", border: "1px solid #ddd" }} />

      {/* Customer Reviews Section */}
      <section className="reviews-section">
        <h2 className="section-title">Customer Reviews</h2>
        <p className="quote-symbol">&ldquo;</p>
        <p className="review-text">
          The tours in this website are great. I had been really enjoying with
          my family! The team is very professional and takes great care of the
          customers. Will surely recommend my friends to join this company!
        </p>
        <p className="review-author">Ali Tufan</p>
        <p className="review-role">Product Manager, Apple Inc.</p>

        <div className="review-images">
          <img
            src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
            alt="Reviewer 1"
            className="review-avatar"
          />
          <img
            src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
            alt="Reviewer 2"
            className="review-avatar"
          />
          <img
            src="https://i.pinimg.com/originals/83/10/ab/8310ab709f70727b92fa1a6917897c82.jpg"
            alt="Reviewer 3"
            className="review-avatar"
          />
          <img
            src="https://i.pinimg.com/originals/83/10/ab/8310ab709f70727b92fa1a6917897c82.jpg"
            alt="Reviewer 4"
            className="review-avatar"
          />
          <img
            src="https://i.pinimg.com/originals/83/10/ab/8310ab709f70727b92fa1a6917897c82.jpg"
            alt="Reviewer 5"
            className="review-avatar"
          />
        </div>
      </section>
    </div>
  );
};

export default ItineraryReviewsPage;
