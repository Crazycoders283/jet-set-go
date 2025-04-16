"use client"

import React, { useState } from "react"
import { cheapFlights, sourceCities } from "./data.js"

export default function CheapestFlights() {
  const [selectedCity, setSelectedCity] = useState(sourceCities[0])
  const [showCityDropdown, setShowCityDropdown] = useState(false)

  const handleCitySelect = (city) => {
    setSelectedCity(city)
    setShowCityDropdown(false)
  }

  return (
    <div className="bg-[#2B4D6F] rounded-xl p-8 shadow-lg">
      <div className="flex items-center mb-8">
        <h3 className="text-white text-2xl font-medium">Cheapest Fares From</h3>
        <div className="relative ml-3">
          <button
            className="bg-[#2B4D6F] text-white px-4 py-1 rounded-md border border-white/30 text-base flex items-center gap-1"
            onClick={() => setShowCityDropdown(!showCityDropdown)}
          >
            {selectedCity}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {showCityDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg z-10">
              {sourceCities.map((city) => (
                <button
                  key={city}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={() => handleCitySelect(city)}
                >
                  {city}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cheapFlights.map((flight) => (
          <div key={flight.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group">
            {/* Image container with decorative elements */}
            <div className="relative h-32 overflow-hidden">
              <img 
                src={flight.image || "/placeholder.svg"} 
                alt={flight.destination} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
              />
              {/* Overlay gradient for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-bl-xl"></div>
              
              {/* Price tag */}
              <div className="absolute bottom-2 right-2 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold py-1 px-2 rounded-md flex items-center shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                Best Price
              </div>
            </div>
            
            {/* Content section */}
            <div className="p-4">
              {/* Destination and region */}
              <div className="mb-2">
                <div className="flex items-center">
                  <h4 className="font-bold text-gray-800">{flight.destination}</h4>
                  <span className="text-gray-400 mx-1">,</span>
                  <p className="text-gray-600">{flight.region}</p>
                </div>
                <div className="flex items-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-500 text-xs font-medium">{flight.date}</p>
                </div>
              </div>
              
              {/* Price and button */}
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                <div className="flex items-baseline">
                  <p className="font-bold text-blue-600 text-lg">{flight.price}</p>
                  <span className="text-xs text-gray-500 ml-1">onwards</span>
                </div>
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors shadow-sm">
                  Book Flight
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
