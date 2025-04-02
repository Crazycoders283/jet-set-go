import React from 'react';
import './Flightbooking.css';

function Booking() {
  return (
    <div className="container">
      <div className="grid">
        {/* Fare Summary */}
        <div className="fare-summary">
          <h2>Fare Summary</h2>
          <p className="traveller">1 Traveller</p>
          <div className="fare-details">
            <div className="fare-item">
              <span>Fare Type</span>
              <span className="text-green">Partially Refundable</span>
            </div>
            <div className="fare-item">
              <span>Base Fare</span>
              <span>₹4,226</span>
            </div>
            <div className="fare-item">
              <span>Taxes & Fees</span>
              <span>₹1,389</span>
            </div>
            <div className="fare-total">
              <span>Total Amount</span>
              <span>₹5,615</span>
            </div>
          </div>
        </div>

        {/* Flight Details */}
        <div className="flight-details">
          <div className="flight-header">
            <div>
              <h2>Hyderabad → New Delhi</h2>
              <p className="date">Wednesday, Jan 15</p>
            </div>
            <button className="view-rules">View Fare Rules</button>
          </div>
          <div className="airline-info">
            <img src="https://placehold.co/20x20" alt="Airline logo" />
            <div>
              <p className="airline-name">Akasa Air</p>
              <p className="flight-info">QP 1405 | Economy | SAVER</p>
            </div>
          </div>
          <div className="flight-times">
            <div>
              <p className="time">05:50</p>
              <p className="location">Hyderabad, Rajiv Gandhi International Airport</p>
            </div>
            <div className="duration">
              <p>2h 20m</p>
              <i className="fas fa-arrow-right"></i>
            </div>
            <div>
              <p className="time">08:10</p>
              <p className="location">New Delhi, Indira Gandhi International Airport, Terminal T2</p>
            </div>
          </div>
          <div className="baggage-info">
            <div className="baggage-item">
              <i className="fas fa-suitcase-rolling"></i>
              <p>Cabin Baggage: 7 Kgs (1 piece only) / Adult</p>
            </div>
            <div className="baggage-item">
              <i className="fas fa-suitcase"></i>
              <p>Check-In Baggage: 15 Kgs (1 piece only) / Adult</p>
            </div>
          </div>
          <div className="add-baggage">
            <button>ADD BAGGAGE</button>
          </div>
        </div>
      </div>

      {/* Refund on Cancellation */}
      <div className="refund-section">
        <h2>Refund on Cancellation</h2>
        <p className="route">VTZ - DEL</p>
        <div className="refund-timeline">
          <div className="timeline">
            <div className="timeline-item">
              <span>₹2106 refund</span>
              <span>₹1036 refund</span>
              <span>₹1036 refund</span>
              <span>Non-refundable</span>
            </div>
            <div className="timeline-bar">
              <div className="bar"></div>
              <div className="markers">
                <span className="marker yellow"></span>
                <span className="marker yellow"></span>
                <span className="marker yellow"></span>
                <span className="marker red"></span>
              </div>
            </div>
          </div>
          <div className="timeline-dates">
            <p>Now</p>
            <p>12 Jan</p>
            <p>14 Jan</p>
            <p>15 Jan</p>
          </div>
        </div>
        <p className="travel-info">Not sure of your travel?</p>
        <p className="flexibility-info">Get full flexibility with ixigo add-ons</p>
        <div className="addon blue">
          <div className="addon-info">
            <p className="addon-title">Free Cancellation with Assured</p>
            <p className="addon-desc">Instant refund of approx. ₹5615</p>
          </div>
          <button className="addon-button">Add</button>
        </div>
        <div className="addon purple">
          <div className="addon-info">
            <p className="addon-title">Free Cancellation + Rescheduling with Assured Flex</p>
            <p className="addon-desc">Instant refund of approx. ₹5615</p>
            <p className="addon-desc">Full Flexibility on rescheduling. Change date, airline & even sector for free</p>
          </div>
          <button className="addon-button">Add</button>
        </div>
      </div>
      <div className="container">
      <div className="section">
        <h2>Traveller Details</h2>
        <div className="login-info">
          <i className="fas fa-user"></i>
          <a href="#">Log in to view your saved traveller list, unlock amazing deals & much more!</a>
          <a href="#" className="login-now">LOGIN NOW</a>
        </div>
        <div className="adult-info">
          <i className="fas fa-user"></i>
          <span>ADULT (12 yrs+) 1/1 added</span>
        </div>
      </div>
      <div className="section">
        <div className="checkbox-info">
          <input type="checkbox" />
          <span>Adya Paliwal</span>
        </div>
        <div className="input-group">
          <input type="text" placeholder="Adya" />
          <input type="text" placeholder="Paliwal" />
          <div className="gender-buttons">
            <button className="male">MALE</button>
            <button className="female">FEMALE</button>
          </div>
        </div>
        <div className="input-group">
          <div>
            <label>Country Code</label>
            <select>
              <option>India(91)</option>
            </select>
          </div>
          <div>
            <label>Mobile No</label>
            <input type="text" value="7520150859" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" placeholder="Email(Optional)" />
          </div>
        </div>
        <div className="checkbox-info">
          <input type="checkbox" />
          <span>I require wheelchair <span className="optional">(Optional)</span></span>
        </div>
        <a href="#" className="add-new-adult">+ ADD NEW ADULT</a>
      </div>
      <div className="section">
        <h3>Booking details will be sent to</h3>
        <div className="input-group">
          <div>
            <label>Country Code</label>
            <select>
              <option>India(91)</option>
            </select>
          </div>
          <div>
            <label>Mobile No</label>
            <input type="text" value="7520150859" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" value="adyapaliwal007@gmail.com" />
          </div>
        </div>
        <a href="#" className="booking-alerts">Booking details & alerts will also be sent to Adya Paliwal</a>
        <div className="checkbox-info">
          <input type="checkbox" />
          <span>Confirm and save billing details to your profile</span>
        </div>
      </div>
      <div className="section">
        <div className="vip-info">
          <i className="fas fa-plane-departure"></i>
          <span>Fly Like a VIP @ Just $50</span>
        </div>
        <p>Be amongst the first to check-in and get your bags tagged with priority status with Akasa Air Priority Check-in & Bag Services.</p>
        <div className="priority-info">
          <i className="fas fa-check-circle"></i>
          <span>Priority Check-in</span>
          <i className="fas fa-plus"></i>
          <i className="fas fa-check-circle"></i>
          <span>Priority Bag Service</span>
          <span className="price">$50</span>
          <button className="add-button">+ ADD</button>
        </div>
      </div>
      <button className="continue-button">CONTINUE</button>
    </div>
    </div>
  );
}

export default Booking;