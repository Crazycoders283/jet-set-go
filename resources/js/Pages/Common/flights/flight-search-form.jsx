"use client"

import React, { useState, useEffect } from "react"
import { Calendar, Users, Plane } from "lucide-react"
import { defaultSearchData, specialFares } from "./data.js"

export default function FlightSearchForm({ initialData, onSearch }) {
  const [formData, setFormData] = useState(initialData || defaultSearchData)

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
  }

  const handleSearch = () => {
    // Call the onSearch prop with the form data
    if (onSearch) {
      onSearch(formData);
    } else {
      // In a real app, this would submit the search data to an API or route
      console.log("Search data:", formData)
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

      {/* Main Search Form */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-0 bg-white rounded-lg overflow-hidden shadow-lg">
        {/* From */}
        <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <label className="block text-xs text-gray-500 font-medium mb-1">From</label>
          <input
            type="text"
            placeholder="Washington D.C. (Any)"
            className="w-full border-none outline-none text-gray-800 text-base"
            value={formData.from}
            onChange={(e) => handleInputChange("from", e.target.value)}
          />
        </div>

        {/* To */}
        <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <label className="block text-xs text-gray-500 font-medium mb-1">To</label>
          <input
            type="text"
            placeholder="Country, city or airport"
            className="w-full border-none outline-none text-gray-800 text-base"
            value={formData.to}
            onChange={(e) => handleInputChange("to", e.target.value)}
          />
        </div>

        {/* Depart */}
        <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <label className="block text-xs text-gray-500 font-medium mb-1">Depart</label>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Add date"
              className="w-full border-none outline-none text-gray-800 text-base"
              value={formData.departDate}
              onChange={(e) => handleInputChange("departDate", e.target.value)}
            />
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Return */}
        <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <label className="block text-xs text-gray-500 font-medium mb-1">Return</label>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Add date"
              className="w-full border-none outline-none text-gray-800 text-base"
              disabled={formData.tripType === "oneWay"}
              value={formData.returnDate}
              onChange={(e) => handleInputChange("returnDate", e.target.value)}
            />
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
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
