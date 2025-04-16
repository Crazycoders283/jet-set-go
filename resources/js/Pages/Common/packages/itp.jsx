import React, { useState } from "react";
import { ChevronDown, MapPin, Calendar, Star, Clock, Users, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { FaHotel, FaPlane, FaUtensils, FaShieldAlt, FaCheck, FaMapMarkerAlt, FaRegClock, FaUsers, FaStar, FaCalendarAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import itineraryData from '../../../data/itinerarypackages.json'

const ItineraryPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('dubai')
  const [expandedDay, setExpandedDay] = useState(null)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    request: '',
    isRobot: false
  })

  const packageData = itineraryData[selectedPackage]?.packages[0]

  // Dubai images from Unsplash
  const packageImages = [
    {
      url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      caption: "Dubai Skyline with Burj Khalifa"
    },
    {
      url: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      caption: "Dubai Marina at Night"
    },
    {
      url: "https://images.unsplash.com/photo-1584551246679-0daf2d10548a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      caption: "Dubai Desert Safari"
    },
    {
      url: "https://images.unsplash.com/photo-1578681041175-9717c638f401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      caption: "Palm Jumeirah"
    },
    {
      url: "https://images.unsplash.com/photo-1582672752486-45c67f7b149c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      caption: "Dubai Mall Fountain"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % packageImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + packageImages.length) % packageImages.length);
  };

  const handleDayClick = (day) => {
    setExpandedDay(expandedDay === day ? null : day)
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  if (!packageData) return null

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Image Gallery Section */}
        <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden group">
          {/* Main Image */}
          <div className="absolute inset-0 transition-transform duration-700 ease-in-out transform">
            <img 
              src={packageImages[currentImageIndex].url}
              alt={packageImages[currentImageIndex].caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-4xl font-bold mb-2">Dubai Explorer</h1>
                <p className="text-lg text-white/90">{packageImages[currentImageIndex].caption}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {packageImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {packageImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative rounded-lg overflow-hidden aspect-[4/3] ${
                index === currentImageIndex ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <img 
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </button>
          ))}
        </div>

        {/* Package Details Card - Simple and Clean Design */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 mb-12">
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-8 py-3">
            <span className="text-blue-700 font-medium">Featured Package</span>
          </div>

          <div className="px-8 py-6">
            <div className="flex items-start justify-between">
              {/* Left Side - Package Info */}
              <div className="flex-1">
                {/* Title Section */}
                <div className="flex items-center gap-3 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">Dubai</h2>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                    4N/5D
                  </span>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-x-24 gap-y-8">
                  {/* Hotel */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center">
                      <FaHotel className="text-amber-500 text-xl" />
                    </div>
                    <div>
                      <span className="text-gray-700 font-medium block mb-1">Hotel</span>
                      <div className="flex gap-1">
                        {[1, 2, 3].map((star, i) => (
                          <FaStar key={i} className="text-amber-400 text-sm" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Meals */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center">
                      <FaUtensils className="text-orange-500 text-xl" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-700 font-medium">Meals</span>
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <FaCheck className="text-green-600 text-xs" />
                      </div>
                    </div>
                  </div>

                  {/* Travel */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                      <FaPlane className="text-blue-500 text-xl" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-700 font-medium">Travel</span>
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <FaCheck className="text-green-600 text-xs" />
                      </div>
                    </div>
                  </div>

                  {/* Hygienic */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center">
                      <FaShieldAlt className="text-green-500 text-xl" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-700 font-medium">Hygienic+</span>
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <FaCheck className="text-green-600 text-xs" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Pricing and Booking */}
              <div className="text-right pl-8">
                <p className="text-gray-600 text-sm mb-1">Book now at</p>
                <div className="mb-1">
                  <span className="text-4xl font-bold text-gray-900">$499</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">Excl. Tax Per Person</p>
                
                <button 
                  onClick={() => setShowQuoteModal(true)}
                  className="bg-[#2B4D6F] text-white font-medium py-3 px-8 rounded-xl hover:bg-[#1a3b5c] transition-all duration-300"
                >
                  GET QUOTE
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 px-8 py-3 text-center">
            <span className="text-blue-700">
              <span className="font-medium">Special Offer:</span> Book now and get free airport transfers!
            </span>
          </div>
        </div>

        {/* Itinerary Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Itinerary</h1>
          <p className="text-gray-600">Day wise details of your package</p>
          <hr className="my-6" />

          <div className="space-y-6">
            {packageData.itinerary.map((day) => (
              <div key={day.day}>
                <div className="flex">
                  <div className="bg-[#2B4D6F] text-white py-2 px-4 font-medium w-24 text-center">
                    Day {day.day}
                  </div>
                  <div className="bg-[#F5F8FA] flex-1 py-2 px-4 font-medium">
                    {day.title}
                  </div>
                </div>
                <div className="mt-4 pl-6 space-y-2">
                  {day.activities.map((activity, idx) => (
                    <div key={idx}>
                      <span className="font-medium">{activity.time}: </span>
                      <span className="text-gray-700">{activity.description}</span>
                      {activity.details && (
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          {activity.details.map((detail, detailIdx) => (
                            <li key={detailIdx} className="text-gray-600">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setExpandedDay(null)} 
            className="flex items-center justify-center text-blue-600 mt-6 mx-auto gap-2"
          >
            View Full Itinerary
            <ChevronDown className={expandedDay ? 'rotate-180' : ''} />
          </button>
        </div>

        {/* Inclusions & Exclusions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Inclusions */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-[#2B4D6F] mb-6">Inclusions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Accommodation:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {packageData.inclusions.accommodation.map((item, idx) => (
                    <li key={idx} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Meals:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {packageData.inclusions.meals.map((item, idx) => (
                    <li key={idx} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Transfers:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {packageData.inclusions.transfers.map((item, idx) => (
                    <li key={idx} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Tours & Activities:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {packageData.inclusions.tours_activities.map((item, idx) => (
                    <li key={idx} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Exclusions */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-[#2B4D6F] mb-6">Exclusions</h2>
            
            <div className="space-y-6">
              {Object.entries(packageData.exclusions).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-medium mb-2">{category.replace('_', ' ')}:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {items.map((item, idx) => (
                      <li key={idx} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-md mx-auto bg-[#F5FFFF] rounded-lg p-6 border border-gray-100 mb-12">
          <h3 className="text-center text-[#2B4D6F] font-medium mb-6">
            Your Trip, Your Way - Let's Plan Together!
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="e.g. John Smith"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
            
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
            
            <input
              type="tel"
              name="phone"
              placeholder="Enter your 10 digit number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
            
            <input
              type="text"
              name="request"
              placeholder="Any Special Request"
              value={formData.request}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
            
            <div className="border border-gray-300 rounded p-3 flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="robot"
                  name="isRobot"
                  type="checkbox"
                  checked={formData.isRobot}
                  onChange={handleInputChange}
                  className="w-4 h-4 border border-gray-300 rounded"
                />
              </div>
              <label htmlFor="robot" className="ml-2 text-sm text-gray-600">
                I'm not a robot
              </label>
              <div className="ml-auto">
                <div className="text-xs text-gray-400">reCAPTCHA</div>
                <div className="text-xs text-gray-400">Privacy-Terms</div>
              </div>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-[#2B4D6F] text-white py-3 rounded font-medium hover:bg-[#1a3b5c] transition-colors"
            >
              Request Call Back
            </button>
          </form>
        </div>

        {/* Trending Destinations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-1">Trending destinations</h2>
          <p className="text-center text-gray-600 mb-8">Most Popular choices for travelers from Kashmir India</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { 
                name: 'Mughal Garden', 
                image: 'https://images.unsplash.com/photo-1566837497312-7be4a47d0c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
              },
              { 
                name: 'Gulmarg', 
                image: 'https://images.unsplash.com/photo-1566837497312-7be4a47d0c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
              },
              { 
                name: 'Srinagar', 
                image: 'https://images.unsplash.com/photo-1593096725460-eb3300e8019b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
              },
              { 
                name: 'Pehelgam', 
                image: 'https://images.unsplash.com/photo-1593181629936-11c609b8db9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
              },
              { 
                name: 'Yousmarg', 
                image: 'https://images.unsplash.com/photo-1593181629936-11c609b8db9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
              }
            ].map((destination) => (
              <div key={destination.name} className="text-center group">
                <div className="rounded-lg overflow-hidden mb-2 aspect-w-4 aspect-h-3">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-medium text-lg">{destination.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Request Modal */}
        {showQuoteModal && (
          <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-xl w-full max-w-md relative animate-modal-entry"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowQuoteModal(false)}
                className="absolute -top-2 -right-2 bg-white w-7 h-7 rounded-full shadow-lg flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors z-10"
              >
                <X size={16} />
              </button>

              {/* Modal Content */}
              <div className="relative overflow-hidden">
                {/* Top Decoration */}
                <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl" />
                
                <div className="relative pt-8 px-6 pb-6">
                  {/* Title Section */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Get Your Personalized Quote
                    </h3>
                    <p className="text-sm text-gray-600">
                      Fill in your details for the perfect travel package
                    </p>
                  </div>

                  {/* Package Summary */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <FaPlane className="text-blue-600 text-lg" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">Dubai Package</h4>
                        <p className="text-xs text-gray-600">4 Nights, 5 Days</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-600">Starting from</p>
                      <p className="text-base font-bold text-gray-900">$499</p>
                    </div>
                  </div>
                  
                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-4">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-gray-400 text-sm"
                        />
                      </div>

                      {/* Email and Phone in Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-gray-400 text-sm"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            name="phone"
                            placeholder="Your phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-gray-400 text-sm"
                          />
                        </div>
                      </div>

                      {/* Special Requests */}
                      <div>
                        <label htmlFor="request" className="block text-xs font-medium text-gray-700 mb-1">
                          Special Requests
                        </label>
                        <textarea
                          id="request"
                          name="request"
                          rows="2"
                          placeholder="Any special requirements or questions?"
                          value={formData.request}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-gray-400 text-sm resize-none"
                        />
                      </div>
                    </div>

                    {/* reCAPTCHA */}
                    <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                      <input
                        id="robot"
                        name="isRobot"
                        type="checkbox"
                        checked={formData.isRobot}
                        onChange={handleInputChange}
                        className="w-4 h-4 border-2 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="robot" className="text-xs text-gray-600 flex-1">
                        I'm not a robot
                      </label>
                      <div className="text-right">
                        <div className="text-[10px] text-gray-400">reCAPTCHA</div>
                        <div className="text-[10px] text-gray-400">Privacy-Terms</div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-2.5 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm"
                    >
                      Request Quote
                    </button>
                  </form>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-1">
                        <FaShieldAlt className="text-green-600 text-xs" />
                      </div>
                      <p className="text-[10px] text-gray-600">Secure Booking</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-1">
                        <FaPhoneAlt className="text-blue-600 text-xs" />
                      </div>
                      <p className="text-[10px] text-gray-600">24/7 Support</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-1">
                        <FaEnvelope className="text-purple-600 text-xs" />
                      </div>
                      <p className="text-[10px] text-gray-600">Instant Quote</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add these styles to your CSS */}
        <style jsx>{`
          @keyframes modalEntry {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-modal-entry {
            animation: modalEntry 0.3s ease-out;
          }
        `}</style>
      </div>
    </div>
  )
}

export default ItineraryPackage