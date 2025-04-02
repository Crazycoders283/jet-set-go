import React from "react";
import Banner from '../../../../js/Pages/SRC/components/Banner/Banner';

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

    </>
  );
};

export default Home;
