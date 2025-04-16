import React from "react"
import { useNavigate } from "react-router-dom"
import FlightSearchForm from "./flight-search-form"
import PopularDestinations from "./popular-destination"
import CheapestFlights from "./cheapest-flight"
import SubscribeSection from "./subscribe-section"
import Navbar from "../Navbar"
import Footer from "../Footer"

// Importing data from the data file
import { heroImage } from "./data.js"

export default function FlightLanding() {
  const navigate = useNavigate();

  const handleSearch = (formData) => {
    // Navigate to search page with query parameters
    navigate('/flights/search', { state: { searchData: formData } });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[650px]">
        <img
          src={heroImage || "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"}
          alt="Airplane wing view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 z-10">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <div className="flex items-center mb-3">
                <div className="h-0.5 w-12 bg-white mr-4"></div>
                <h2 className="text-white text-xl font-light">
                  <span className="font-script">Explore and Travel</span>
                </h2>
              </div>
              <h1 className="text-white text-4xl md:text-6xl font-bold mb-12">Our Cheapest Flight Search</h1>
            </div>
            <FlightSearchForm onSearch={handleSearch} />
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="bg-sky-50 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-teal-700 uppercase text-sm font-semibold mb-4">
            Choose your favourite destination
          </h3>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-700 mb-12">
            Explore By Popular Destination
          </h2>
          <PopularDestinations />
          <div className="flex justify-center mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium">
              Explore more
            </button>
          </div>
        </div>
      </section>

      {/* Cheapest Flights Section */}
      <section className="bg-sky-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <div className="w-56 h-auto relative flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1583833005442-a186a4efe0f9?q=80&w=1470&auto=format&fit=crop"
                alt="Airplane illustration"
                className="w-full h-full object-contain"
                style={{ filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))" }}
              />
            </div>
            <h2 className="text-4xl font-bold text-[#2B4D6F]">Get Cheapest Flights from here</h2>
          </div>
          <CheapestFlights />
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <SubscribeSection />
      </section>
      
      <Footer />
    </div>
  )
}
