"use client"

import React, { useState, useEffect } from "react"
import { Calendar, Users, Plane } from "lucide-react"
import { defaultSearchData, specialFares } from "./data.js"

// Get this from a config or parent component
const USE_AMADEUS_API = false;

export default function FlightSearchForm({ initialData, onSearch }) {
  const [formData, setFormData] = useState(initialData || defaultSearchData)
  const [formErrors, setFormErrors] = useState({})

  // Update form data when initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleTripTypeChange = (type) => {
    setFormData({ ...formData, tripType: type })
  }

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
    
    // Clear validation error when field is changed
    if (formErrors[field]) {
      setFormErrors({
        ...formErrors,
        [field]: null
      });
    }
  }

  const validateForm = () => {
    const errors = {};
    
    if (!formData.from) {
      errors.from = "Please enter departure city";
    }
    
    if (!formData.to) {
      errors.to = "Please enter destination city";
    }
    
    if (!formData.departDate) {
      errors.departDate = "Please select departure date";
    }
    
    if (formData.tripType === "roundTrip" && !formData.returnDate) {
      errors.returnDate = "Please select return date";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const handleSearch = () => {
    // Validate form before submitting
    if (!validateForm()) {
      return;
    }
    
    // Check if using Amadeus API
    if (USE_AMADEUS_API) {
      // In a real app, we'd get airport codes for the API
      const formattedData = {
        ...formData,
        // If using the real API, we'd need to format data for Amadeus
        // originLocationCode: getAirportCode(formData.from),
        // destinationLocationCode: getAirportCode(formData.to)
      };
      
      console.log("Using Amadeus API with data:", formattedData);
      
      if (onSearch) {
        onSearch(formattedData);
      }
    } else {
      // Using mock data from data.js
      console.log("Using mock data with data:", formData);
      
      if (onSearch) {
        onSearch(formData);
      } else {
        console.log("Search data:", formData)
      }
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Trip Type Selection */}
      <div className="flex mb-4">
        <button
          className={`px-8 py-2 rounded-l-full ${
            formData.tripType === "oneWay" 
              ? "bg-blue-600 text-white" 
              : "bg-white/90 text-gray-700 hover:bg-white"
          } transition-colors`}
          onClick={() => handleTripTypeChange("oneWay")}
        >
          One Way
        </button>
        <button
          className={`px-8 py-2 rounded-r-full ${
            formData.tripType === "roundTrip" 
              ? "bg-blue-600 text-white" 
              : "bg-white/90 text-gray-700 hover:bg-white"
          } transition-colors`}
          onClick={() => handleTripTypeChange("roundTrip")}
        >
          Round Trip
        </button>
      </div>

      {/* Main Search Form - Will use either mock data or Amadeus API based on configuration */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-0 bg-white rounded-lg overflow-hidden shadow-lg">
        {/* From */}
        <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <label className="block text-xs text-gray-500 font-medium mb-1">From</label>
          <input
            type="text"
            placeholder="Washington D.C. (Any)"
            className={`w-full border-none outline-none text-gray-800 text-base ${formErrors.from ? 'border-red-500' : ''}`}
            value={formData.from}
            onChange={(e) => handleInputChange("from", e.target.value)}
          />
          {formErrors.from && <div className="text-xs text-red-500 mt-1">{formErrors.from}</div>}
        </div>

        {/* To */}
        <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <label className="block text-xs text-gray-500 font-medium mb-1">To</label>
          <input
            type="text"
            placeholder="Country, city or airport"
            className={`w-full border-none outline-none text-gray-800 text-base ${formErrors.to ? 'border-red-500' : ''}`}
            value={formData.to}
            onChange={(e) => handleInputChange("to", e.target.value)}
          />
          {formErrors.to && <div className="text-xs text-red-500 mt-1">{formErrors.to}</div>}
        </div>

        {/* Depart */}
        <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <label className="block text-xs text-gray-500 font-medium mb-1">Depart</label>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Add date"
              className={`w-full border-none outline-none text-gray-800 text-base ${formErrors.departDate ? 'border-red-500' : ''}`}
              value={formData.departDate}
              onChange={(e) => handleInputChange("departDate", e.target.value)}
            />
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          {formErrors.departDate && <div className="text-xs text-red-500 mt-1">{formErrors.departDate}</div>}
        </div>

        {/* Return */}
        <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <label className="block text-xs text-gray-500 font-medium mb-1">Return</label>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Add date"
              className={`w-full border-none outline-none text-gray-800 text-base ${formErrors.returnDate ? 'border-red-500' : ''}`}
              disabled={formData.tripType === "oneWay"}
              value={formData.returnDate}
              onChange={(e) => handleInputChange("returnDate", e.target.value)}
            />
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          {formErrors.returnDate && <div className="text-xs text-red-500 mt-1">{formErrors.returnDate}</div>}
        </div>

        {/* Travelers and Class */}
        <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <label className="block text-xs text-gray-500 font-medium mb-1">Travellers and cabin class</label>
          <div className="flex items-center">
            <input
              type="text"
              value={formData.travelers}
              className="w-full border-none outline-none text-gray-800 text-base"
              onChange={(e) => handleInputChange("travelers", e.target.value)}
            />
            <Users className="h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-center justify-center p-3">
          <button 
            className="w-full h-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors flex items-center justify-center gap-2"
            onClick={handleSearch}
          >
            <Plane size={18} className="rotate-90" />
            <span>Search</span>
          </button>
        </div>
      </div>

      {/* Special Fares */}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="text-sm text-white">Special Fares:</span>
        <div className="flex flex-wrap gap-2">
          {specialFares.map((fare) => (
            <button
              key={fare.id}
              className="px-4 py-1 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full text-sm border border-white/30 transition-colors"
            >
              {fare.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
