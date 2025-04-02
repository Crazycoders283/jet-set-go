import React from 'react';
// import { Head, Link, router } from '@inertiajs/react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../src/components/Common/Footer/Footer';
import { Head, Link, useForm } from '@inertiajs/react';

// Import your existing components
import Banner from './ban';
import Cards from './FlightsCards';
import ValuedPartners from './partners';
import bg from './Group 48095476.png';

// Sample flight data - this will be replaced with your actual data
const flightDeals = [
  {
    id: 1,
    title: 'New York',
    image: '../assets/images/flights/newyork.jpg',
    description: 'Experience the vibrant city life in the Big Apple',
    rating: 4.8,
    score: '(254 reviews)',
  },
  {
    id: 2,
    title: 'Paris',
    image: '../assets/images/flights/paris.jpg',
    description: 'Discover the city of love and its iconic landmarks',
    rating: 4.9,
    score: '(349 reviews)',
  },
  {
    id: 3,
    title: 'Tokyo',
    image: '../assets/images/flights/tokyo.jpg',
    description: 'Immerse yourself in Japan\'s fascinating blend of tradition and innovation',
    rating: 4.7,
    score: '(198 reviews)',
  },
];

const airlines = [
  {
    id: 1,
    title: 'Emirates',
    image: '../assets/images/airlines/emirates.jpg',
    description: 'Award-winning service with unparalleled comfort',
    rating: 4.9,
    score: '(432 reviews)',
  },
  {
    id: 2,
    title: 'Singapore Airlines',
    image: '../assets/images/airlines/singapore.jpg',
    description: 'Experience the epitome of luxury air travel',
    rating: 4.8,
    score: '(356 reviews)',
  },
  {
    id: 3,
    title: 'Qatar Airways',
    image: '../assets/images/airlines/qatar.jpg',
    description: 'World-class service and hospitality in the skies',
    rating: 4.7,
    score: '(289 reviews)',
  },
];

const popularRoutes = [
  {
    id: 1,
    title: 'London to New York',
    image: '../assets/images/routes/london-ny.jpg',
    description: 'Direct flights starting from $399',
    rating: 4.6,
    score: '(178 reviews)',
  },
  {
    id: 2,
    title: 'Singapore to Sydney',
    image: '../assets/images/routes/singapore-sydney.jpg',
    description: 'Premium economy from $749',
    rating: 4.7,
    score: '(203 reviews)',
  },
  {
    id: 3,
    title: 'Dubai to Bangkok',
    image: '../assets/images/routes/dubai-bangkok.jpg',
    description: 'Luxury business class from $899',
    rating: 4.8,
    score: '(167 reviews)',
  },
];

const Home = () => {
  return (
    <>
      <Head title="Flight Bookings & Deals" />

      {/* Banner Section */}
      <Banner />

      {/* Flight Deals Section */}
      <section className="popular py-5">
        <Container>
          <Row>
            <Col md={12}>
              <div className="main_heading text-center">
                <h1>Skyward Adventures Await</h1>
                <p className="subtitle">Discover extraordinary flight deals to dream destinations worldwide</p>
              </div>
            </Col>
          </Row>
          <Cards data={flightDeals} />
          <div className="explore-more-container">
            <button className="explore-more-btn"><Link className='text-white' href={route('flight_explore_more')}>Explore More</Link></button>
          </div>
        </Container>
      </section>

      {/* Featured Airlines Section */}
      <section className="popular py-10">
        <Container>
          <Row>
            <Col md={12}>
              <div className="main_heading text-center">
                <h1>Premium Airline Partners</h1>
                <p className="subtitle">Travel with confidence aboard the world's most prestigious carriers</p>
              </div>
            </Col>
          </Row>
          <Cards data={airlines} />
          <div className="explore-more-container10">
            <button className="explore-more-btn10"><Link className='text-white' href={route('flight_explore_more')}>Explore More</Link></button>
          </div>
        </Container>
      </section>

      {/* Popular Flight Routes Section (Commented Out) */}
      {/* <section className="popular py-5">
        <Container>
          <Row>
            <Col md={12}>
              <div className="main_heading text-center">
                <h1>Trending Flight Routes</h1>
                <p className="subtitle">The most sought-after connections for your next journey</p>
              </div>
            </Col>
          </Row>
          <Cards data={popularRoutes} />
          <div className="explore-more-container">
            <button className="explore-more-btn">View All Routes</button>
          </div>
        </Container>
      </section> */}

      {/* Call to Action Section with Background Image */}
      <section
        className="call_us"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        {/* <div
          className="overlay"
          style={{
            background: 'rgba(0, 0, 0, 0.5)',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        ></div> */}
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Row>
            <Col lg={8} md={12}>
              <h3 className="title">Ready for Your Next Adventure?</h3>
              <h2 className="heading">Special Flight Offers Await Savvy Travelers</h2>
              <p>
                Our travel experts have curated exclusive flight deals just for you. Book now and save up to 30% on your
                next journey.
              </p>
              <Link href="/contact" className="secondary_btn">
                Contact Our Experts
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Valued Partners Section */}
      <ValuedPartners />
      <Footer />
    </>
  );
};

export default Home;