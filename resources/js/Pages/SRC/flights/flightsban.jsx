// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import flightBanner from '../src/components/Banner/2.svg';
// import Header from '../src/components/Common/Header/Header';
// import { Link } from '@inertiajs/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faPlaneDeparture,
//   faCalendarAlt,
//   faUsers,
//   faSearch,
// } from '@fortawesome/free-solid-svg-icons';
// import './landing.css';

// const FlightsLanding = () => {
//   return (
//     <>
//       {/* Header */}
//       <Header />

//       {/* Flight Slider Section */}
//       <section className="flight-slider">
//         <Carousel variant="white">
//           <Carousel.Item>
//             <img src={flightBanner} className="d-block w-100" alt="Flight Search" />
//             <Carousel.Caption>
//               {/* Slider Description */}
//               <div className="slider_des">
//                 <h2 className="sub_text">Explore and Travel</h2>
//                 <p className="heading">
//                   <span>Our Cheapest Flight Search</span>
//                 </p>
//               </div>

//               {/* Search Bar Section */}
//               <div className="bg-white p-4 rounded-lg shadow-md">
//                 <div className="grid grid-cols-5 gap-4 items-center">
//                   {/* From Field */}
//                   <div className="search-item">
//                     <p>From</p>
//                     <h4>Washington D.C. (Any)</h4>
//                     <FontAwesomeIcon icon={faPlaneDeparture} className="icon" />
//                   </div>

//                   {/* To Field */}
//                   <div className="search-item">
//                     <p>To</p>
//                     <h4>Country, city, or airport</h4>
//                     <FontAwesomeIcon icon={faPlaneDeparture} className="icon rotate-45" />
//                   </div>

//                   {/* Depart Field */}
//                   <div className="search-item">
//                     <p>Depart</p>
//                     <h4>Add date</h4>
//                     <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
//                   </div>

//                   {/* Return Field */}
//                   <div className="search-item">
//                     <p>Return</p>
//                     <h4>Add date</h4>
//                     <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
//                   </div>

//                   {/* Travellers & Cabin Class Field */}
//                   <div className="search-item">
//                     <p>Travellers & Cabin</p>
//                     <h4>1 Adult, Economy</h4>
//                     <FontAwesomeIcon icon={faUsers} className="icon" />
//                   </div>

//                   {/* Search Button */}
//                   <button className="flightsearch">
//                     <Link href={route('flights_booking')}>
//                       <FontAwesomeIcon icon={faSearch} className="mr-2" />
//                       Search
//                     </Link>
//                   </button>
//                 </div>
//               </div>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </section>
//     </>
//   );
// };

// export default FlightsLanding;




// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import flightBanner from '../src/components/Banner/2.svg';
// import Header from '../src/components/Common/Header/Header';
// import { Link } from '@inertiajs/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faPlaneDeparture,
//   faCalendarAlt,
//   faUsers,
//   faSearch,
//   faExchangeAlt,
// } from '@fortawesome/free-solid-svg-icons';
// import './landing.css';

// const FlightsLanding= () => {
//   return (
//     <>
//       {/* Header */}
//       <Header />

//       {/* Flight Slider Section */}
//       <section className="flight-slider">
//         <Carousel variant="white">
//           <Carousel.Item>
//             <img src={flightBanner} className="d-block w-100" alt="Flight Search" />
//             <Carousel.Caption>
//               {/* Slider Description */}
//               <div className="slider_des">
//                 <h2 className="sub_text">Explore and Travel</h2>
//                 <p className="heading">
//                   <span>Our Cheapest Flight Search</span>
//                 </p>
//               </div>

//               {/* Search Bar Section */}
//               <div className="bg-white p-4 rounded-lg shadow-md" style={{ borderRadius: '10px' }}>
//                 {/* Trip Type Toggle */}
//                 <div className="flex space-x-2 mb-4">
//                   <button
//                     style={{
//                       backgroundColor: '#007bff',
//                       color: 'white',
//                       padding: '8px 16px',
//                       border: 'none',
//                       borderRadius: '20px',
//                       fontSize: '14px',
//                       fontWeight: 'bold',
//                     }}
//                   >
//                     One Way
//                   </button>
//                   <button
//                     style={{
//                       backgroundColor: '#f8f9fa',
//                       color: '#6c757d',
//                       padding: '8px 16px',
//                       border: '1px solid #ced4da',
//                       borderRadius: '20px',
//                       fontSize: '14px',
//                       fontWeight: 'bold',
//                     }}
//                   >
//                     Round Trip
//                   </button>
//                 </div>

//                 {/* Search Fields */}
//                 <div className="grid grid-cols-5 gap-2 items-center">
//                   {/* From Field */}
//                   <div
//                     className="search-item p-3 rounded-lg relative"
//                     style={{ border: '1px solid #ced4da' }}
//                   >
//                     <p style={{ fontSize: '12px', color: '#6c757d' }}>From</p>
//                     <h4 style={{ fontSize: '16px', color: '#212529' }}>Washington D.C. (Any)</h4>
//                     <FontAwesomeIcon
//                       icon={faPlaneDeparture}
//                       className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
//                       style={{ fontSize: '14px' }}
//                     />
//                   </div>

//                   {/* Swap Icon */}
//                   <FontAwesomeIcon
//                     icon={faExchangeAlt}
//                     className="text-gray-400"
//                     style={{ fontSize: '20px', margin: '0 5px' }}
//                   />

//                   {/* To Field */}
//                   <div
//                     className="search-item p-3 rounded-lg relative"
//                     style={{ border: '1px solid #ced4da' }}
//                   >
//                     <p style={{ fontSize: '12px', color: '#6c757d' }}>To</p>
//                     <h4 style={{ fontSize: '16px', color: '#6c757d' }}>Country, city or airport</h4>
//                     <FontAwesomeIcon
//                       icon={faPlaneDeparture}
//                       className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 rotate-45"
//                       style={{ fontSize: '14px' }}
//                     />
//                   </div>

//                   {/* Depart Field */}
//                   <div
//                     className="search-item p-3 rounded-lg relative"
//                     style={{ border: '1px solid #ced4da' }}
//                   >
//                     <p style={{ fontSize: '12px', color: '#6c757d' }}>Depart</p>
//                     <h4 style={{ fontSize: '16px', color: '#6c757d' }}>Add date</h4>
//                     <FontAwesomeIcon
//                       icon={faCalendarAlt}
//                       className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
//                       style={{ fontSize: '14px' }}
//                     />
//                   </div>

//                   {/* Return Field */}
//                   <div
//                     className="search-item p-3 rounded-lg relative"
//                     style={{ border: '1px solid #ced4da' }}
//                   >
//                     <p style={{ fontSize: '12px', color: '#6c757d' }}>Return</p>
//                     <h4 style={{ fontSize: '16px', color: '#6c757d' }}>Add date</h4>
//                     <FontAwesomeIcon
//                       icon={faCalendarAlt}
//                       className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
//                       style={{ fontSize: '14px' }}
//                     />
//                   </div>

//                   {/* Travellers & Cabin Class Field */}
//                   <div
//                     className="search-item p-3 rounded-lg relative"
//                     style={{ border: '1px solid #ced4da' }}
//                   >
//                     <p style={{ fontSize: '12px', color: '#6c757d' }}>Travellers & cabin class</p>
//                     <h4 style={{ fontSize: '16px', color: '#212529' }}>1 Adult, Economy</h4>
//                     <FontAwesomeIcon
//                       icon={faUsers}
//                       className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
//                       style={{ fontSize: '14px' }}
//                     />
//                   </div>

//                   {/* Search Button */}
//                   <button
//                     className="flightsearch p-3 rounded-lg"
//                     style={{
//                       backgroundColor: '#007bff',
//                       color: 'white',
//                       border: 'none',
//                       fontSize: '16px',
//                       fontWeight: 'bold',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       height: '100%',
//                     }}
//                   >
//                     <Link href={route('flights_booking')} style={{ color: 'white', textDecoration: 'none' }}>
//                       <FontAwesomeIcon icon={faSearch} className="mr-2" />
//                       Search
//                     </Link>
//                   </button>
//                 </div>

//                 {/* Special Fares */}
//                 <div className="mt-4">
//                   <p style={{ fontSize: '12px', color: '#6c757d', marginBottom: '8px' }}>
//                     SPECIAL FARES (OPTIONAL):
//                   </p>
//                   <div className="flex space-x-2">
//                     <button
//                       style={{
//                         backgroundColor: '#f8f9fa',
//                         color: '#007bff',
//                         padding: '6px 12px',
//                         border: '1px solid #007bff',
//                         borderRadius: '20px',
//                         fontSize: '12px',
//                         fontWeight: 'bold',
//                       }}
//                     >
//                       Student
//                     </button>
//                     <button
//                       style={{
//                         backgroundColor: '#f8f9fa',
//                         color: '#007bff',
//                         padding: '6px 12px',
//                         border: '1px solid #007bff',
//                         borderRadius: '20px',
//                         fontSize: '12px',
//                         fontWeight: 'bold',
//                       }}
//                     >
//                       Senior Citizen
//                     </button>
//                     <button
//                       style={{
//                         backgroundColor: '#f8f9fa',
//                         color: '#007bff',
//                         padding: '6px 12px',
//                         border: '1px solid #007bff',
//                         borderRadius: '20px',
//                         fontSize: '12px',
//                         fontWeight: 'bold',
//                       }}
//                     >
//                       Armed Forces
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </section>
//     </>
//   );
// };

// export default FlightsLanding;

// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import flightBanner from '../src/components/Banner/2.svg';
// import Header from '../src/components/Common/Header/Header';
// import { Link } from '@inertiajs/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faPlaneDeparture,
//   faCalendarAlt,
//   faUsers,
//   faSearch,
// } from '@fortawesome/free-solid-svg-icons';
// import './landing.css';

// // Flight Search Bar Component
// const FlightSearchBar = () => {
//   return (
//     <div className="search-bar">
//       <div className="filter-item">
//         <div>
//           <p>Location</p>
//           <h4>USA</h4>
//         </div>
//       </div>

//       <div className="divider"></div>

//       <div className="filter-item">
//         <div>
//           <p>Packages</p>
//           <h4>Select Package</h4>
//         </div>
//       </div>

//       <div className="divider"></div>

//       <div className="filter-item">
//         <div className="date-container">
//           <div>
//             <p>Date</p>
//             <h4>13 May, 2023</h4>
//           </div>
//           <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
//         </div>
//       </div>

//       <div className="divider"></div>

//       <div className="filter-item">
//         <div>
//           <p>Persons</p>
//           <h4>Number of Guests</h4>
//         </div>
//       </div>

//       {/* Fixed Search Button */}
//       <button className="bg-white px-4 py-2 rounded shadow hover:bg-gray-100 transition">
//         <FontAwesomeIcon icon={faSearch} />
//       </button>
//     </div>
//   );
// };

// // Main FlightsLanding Component
// const FlightsLanding = () => {
//   return (
//     <>
//       {/* Header */}
//       <Header />

//       {/* Flight Slider Section */}
//       <section className="flight-slider">
//         <Carousel variant="white">
//           <Carousel.Item>
//             <img src={flightBanner} className="d-block w-100" alt="Flight Search" />
//             <Carousel.Caption>
//               {/* Slider Description */}
//               <div className="slider_des">
//                 <h2 className="sub_text">Explore and Travel</h2>
//                 <p className="heading">
//                   <span>Our Cheapest Flight Search</span>
//                 </p>
//               </div>

//               {/* Search Bar Component */}
//               <FlightSearchBar />
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </section>
//     </>
//   );
// };

// export default FlightsLanding;


import React from 'react';
import { Carousel } from 'react-bootstrap';
import flightBanner from '../src/components/Banner/2.svg';
import Header from '../src/components/Common/Header/Header';
import { Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlaneDeparture,
  faCalendarAlt,
  faUsers,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

// Flight Search Bar Component
const FlightSearchBar = () => {
  return (
    <div className="search-bar">
      <div className="filter-item">
        <div>
          <p>From</p>
          <h4>USA</h4>
        </div>
      </div>

      <div className="divider"></div>

      <div className="filter-item">
        <div>
          <p>To</p>
          <h4>Select </h4>
        </div>
      </div>
      <div className="divider"></div>

      <div className="filter-item">
        <div>
          <p>Return</p>
          <h4>USA</h4>
        </div>
      </div>

      


      <div className="divider"></div>

      <div className="filter-item">
        <div className="date-container">
          <div>
            <p>Date</p>
            <h4>13 May, 2023</h4>
          </div>
          <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
        </div>
      </div>

      <div className="divider"></div>

      <div className="filter-item">
        <div>
          <p>Persons</p>
          <h4>Number of Guests</h4>
        </div>
      </div>

      {/* Search Button */}
      <button className="search-btn"><Link href={route('flight_explore_more')}>
        <FontAwesomeIcon icon={faSearch} /></Link>
      </button>
    </div>
  );
};

// Main FlightsLanding Component
const FlightsLanding = () => {
  return (
    <>
      {/* CSS Styles */}
      <style>
        {`
          /* Search Bar Section - Horizontal Layout */
          .search-bar {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 14px;
            padding: 10px 20px;
            width: 1252px;
            height: 105.13px;
            max-width: 100%;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin: 10px auto;
            transition: all 0.3s ease;
            margin-left: 175px;
            background: rgba(255, 255, 255, 1);
            margin-top: 75px;
          }
          
          /* Filter Item - Horizontal */
          .filter-item {
            display: flex;
            align-items: center;
            gap: 15px;
          }
          
          .filter-item p {
            font-size: 18px;
            color: #000000;
            margin: 15px;
            font-weight: 600;
            font-family: "Poppins", sans-serif;
            align-items: center;
            margin-left: 15px;
          }
          
          .filter-item h4 {
            font-size: 14px;
            margin: 5px;
            color: rgba(0,0,0,0.70);
            font-family: "Poppins", sans-serif;
            font-weight: 4;
            margin-left: 15px;
            align-items: center!important;
          }
          
          /* Divider - Thin Vertical Line */
          .divider {
            width: 1px;
            height: 75px;
            background-color: rgba(0,0,0, 0.43);
            margin-left: 25px;
          }
          
          .date-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 0px;
          }
          
          .icon {
            margin-top: 50px;
            margin-left: 25px;
            color: #000000;
          }
          
          /* Search Button Styling */
          .search-btn {
            background-color: #0855A2;
            color: #ffffff;
            border: none;
            padding: 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(8, 85, 162, 0.2);
          }
          
          .search-btn:hover {
            background-color: #064585;
            transform: translateY(-3px);
            box-shadow: 0 6px 16px rgba(8, 85, 162, 0.3);
          }
          
          /* Flight Slider Styles */
          .flight-slider {
            position: relative;
            z-index: 99;
          }
          
          .flight-slider .carousel {
            position: relative;
          }
          
          // .flight-slider .carousel::after {
          //   content: "";
          //   background-color: rgba(0, 0, 0, 0.6);
          //   position: absolute;
          //   top: 0;
          //   left: 0;
          //   width: 100%;
          //   height: 100%;
          // }
          
          .flight-slider .carousel .carousel-item .carousel-caption {
            z-index: 9;
            bottom: 29%;
            left: 5%;
            text-align: left;
          }
          
          .flight-slider .carousel .carousel-item .carousel-caption .slider_des p.heading {
            color: rgba(255, 255, 255, 0.7);
            text-align: center;
            font-family: "Poppins", sans-serif;
            font-size: 20px;
            font-weight: 400;
            line-height: 120%;
            margin-left: 150px;
            margin-top: -70px;
          }
          
          .flight-slider .carousel .carousel-item .carousel-caption .slider_des h2.sub_text {
            font-size: 86px;
            color: #ffffff;
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            margin-bottom: 85px;
            margin-left: 175px;
            text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
            margin-right: -75%;
            gap: 10%!important;
            margin-top: 75px!important;
            top: 25%;
          }
          
          /* Responsive Styles */
          
          /* Tablets */
          @media only screen and (max-width: 991px) {
            .search-bar {
              width: 100%;
              padding: 10px 15px;
              margin-left: 0;
            }
            
            .flight-slider .carousel .carousel-item .carousel-caption {
              bottom: 15%;
              left: 3%;
            }
            
            .flight-slider .carousel .carousel-item .carousel-caption .slider_des h2.sub_text {
              font-size: 50px;
              margin-left: 50px;
            }
            
            .flight-slider .carousel .carousel-item .carousel-caption .slider_des p.heading {
              margin-left: 50px;
            }
          }
          
          /* Mobile Devices */
          @media only screen and (max-width: 767px) {
            .search-bar {
              width: 100%;
              flex-direction: row;
              align-items: center;
              padding: 10px 15px;
              overflow-x: scroll;
              margin-left: 0;
            }
            
            .flight-slider .carousel .carousel-item img {
              height: 350px;
              object-fit: cover;
            }
            
            .flight-slider .carousel .carousel-item .carousel-caption {
              bottom: 10%;
              left: 3%;
            }
            
            .flight-slider .carousel .carousel-item .carousel-caption .slider_des h2.sub_text {
              font-size: 40px;
              margin-left: 20px;
            }
            
            .flight-slider .carousel .carousel-item .carousel-caption .slider_des p.heading {
              margin-left: 20px;
              font-size: 16px;
            }
          }
          
          /* Small Mobile Screens */
          @media only screen and (max-width: 420px) {
            .search-bar {
              width: 100%;
              padding: 10px;
              overflow-x: scroll;
              margin-left: 0;
              height: auto;
            }
            
            .filter-item {
              flex-direction: row;
              align-items: center;
            }
            
            .flight-slider .carousel .carousel-item img {
              height: 300px;
            }
            
            .flight-slider .carousel .carousel-item .carousel-caption .slider_des h2.sub_text {
              font-size: 30px;
              margin-left: 10px;
              margin-bottom: 30px;
            }
            
            .flight-slider .carousel .carousel-item .carousel-caption .slider_des p.heading {
              font-size: 14px;
              margin-left: 10px;
            }
            
            .divider {
              height: 50px;
            }
          }
        `}
      </style>

      {/* Header */}
      <Header />

      {/* Flight Slider Section */}
      <section className="flight-slider">
        
        <Carousel variant="white">
          <Carousel.Item>
            <img src={flightBanner} className="d-block w-100" alt="Flight Search" />
            <Carousel.Caption>
              {/* Slider Description */}
              <div className="slider_des">
                <h2 className="sub_text">Explore and Travel</h2>
                <p className="heading">
                  <span>Our Cheapest Flight Search</span>
                </p>
              </div>
              

              {/* Search Bar Component */}
              <FlightSearchBar />
            </Carousel.Caption>
            
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default FlightsLanding;