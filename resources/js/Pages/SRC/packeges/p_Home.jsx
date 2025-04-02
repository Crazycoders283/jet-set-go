import React from "react";
import Banner from '../components/Banner/Banner';
import Features from "../components/Features/Features";
import { Container, Row, Col } from "react-bootstrap";
import ValuedPartners from "./ValuedPartners";
import Cards from "../components/Cards/Cards";
import "./home.css";
import europe from "../components/Cards/europe";
import C1 from "../Home/C1.png";
import { Head, Link, useForm } from '@inertiajs/react';
import Footer from "../components/Common/Footer/Footer";
import Europe from "../components/Cards/europe";
import kashmir from "../components/Cards/kashmir"; // Kashmir component imported
import Kashmir from "../components/Cards/kashmir";
import Bhutan from"../components/Cards/bhutan";
import footer from "../components/Common/Footer/Footer";

const destinations = [
  {
    id: 1,
    name: "Vancouver BC",
    price: "$64/p",
    image: "https://images.hdqwalls.com/download/vancouver-city-night-3840x2160.jpg",
    rating: "5.0",
  },
  {
    id: 2,
    name: "Texas USA",
    price: "$72/p",
    image: "https://www.tripsavvy.com/thmb/uqNzAoqBIraz1RIKIPklL3H-z5Y=/2270x1321/filters:fill(auto,1)/GettyImages-629829924-5bdb57f74cedfd0026ae431f.jpg",
    rating: "5.0",
  },
  {
    id: 3,
    name: "Florida",
    price: "$85/p",
    image: "https://media.timeout.com/images/105496849/image.jpg",
    rating: "5.0",
  },
];

const cruises = [
  {
    id: 1,
    name: "Celebrity Cruiseline",
    price: "$96/p",
    image: "https://example.com/image1.jpg",
    rating: "5.0",
  },
  {
    id: 2,
    name: "Carnival",
    price: "$127/p",
    image: "https://example.com/image2.jpg",
    rating: "5.0",
  },
  {
    id: 3,
    name: "Disney Cruiseline",
    price: "$77/p",
    image: "https://example.com/image3.jpg",
    rating: "5.0",
  },
  {
    id: 4,
    name: "Cunard",
    price: "$96/p",
    image: "https://example.com/image4.jpg",
    rating: "5.0",
  },
  {
    id: 5,
    name: "Norwegian Cruiseline",
    price: "$3127/p",
    image: "https://example.com/image5.jpg",
    rating: "5.0",
  },
];

const Home = () => {
  return (
    <>
      <Banner />
      
      {/* Destination Section */}
      <section className="popular py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading text-center">
                <h1>Discover Luxury and Adventure in the Desert</h1>
                <p className="subtitle">Dubai Packages</p>
              </div>
            </Col>
          </Row>
          <Cards data={destinations} />
        </Container>
      </section>

      <div className="explore-more-container">
        <button className="explore-more-btn">Explore More</button>
      </div>

      {/* Europe Section (py-6) */}
      <section className="popular py-6">
        <Container>
          <Europe /> {/* Europe Component is Used Here */}
        </Container>
      </section>
      <div className="explore-more-container2">
        {/* <button className="explore-more-btn">Explore More</button> */}
      </div>

      {/* Kashmir Section in py-8 container */}
      <section className="popular py-8">
        <Container>
        < Kashmir/> {/* kashmir Component is Used Here */}
        </Container>
      </section>
      <div className="explore-more-container3">
        <button className="explore-more-btn3">Explore More</button>
      </div>
          
              

      {/* Bhutan Section in py-8 container */}
<section className="popular py-8">
  <Container>
    <Bhutan /> {/* Bhutan Component is Used Here */}
  </Container>
</section>
<div className="explore-more-container4">
  <button className="explore-more-btn4">Explore More</button>
</div>


      {/* Showcase Valued Partners Section */}
      <ValuedPartners />
      <Footer/>
    </>
  );
};

export default Home;
