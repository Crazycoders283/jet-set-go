import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  Star, MapPin, Check, ChevronLeft, Heart, Share, Calendar, 
  Users, X, ChevronRight, ChevronDown, ThumbsUp, MessageCircle, 
  Award, Camera, Coffee, ArrowRight, Bookmark, Phone, Mail, Facebook, Twitter, Instagram
} from "lucide-react";
import { hotels, hotelDetails } from "./hotel";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function HotelDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const hotelId = queryParams.get("id");
  
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [guestCount, setGuestCount] = useState({ adults: 2, children: 1 });
  const [showReviews, setShowReviews] = useState(false);
  const [checkInDate, setCheckInDate] = useState("Jul 24, 2025");
  const [checkOutDate, setCheckOutDate] = useState("Jul 28, 2025");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [showBookingConfirmation, setShowBookingConfirmation] = useState(false);

  // Mock room types
  const roomTypes = [
    { id: 0, name: "Deluxe Room", price: 199, capacity: 2, features: ["Mountain View", "King Bed", "Free WiFi"] },
    { id: 1, name: "Premium Suite", price: 299, capacity: 3, features: ["Lake View", "King Bed + Sofa Bed", "Free WiFi", "Jacuzzi"] },
    { id: 2, name: "Family Suite", price: 399, capacity: 4, features: ["Mountain View", "2 Queen Beds", "Free WiFi", "Kitchenette"] }
  ];

  // Mock reviews
  const reviews = [
    { id: 1, user: "Sarah J.", avatar: "https://randomuser.me/api/portraits/women/12.jpg", rating: 5, date: "June 2023", comment: "The hotel exceeded our expectations. Views were breathtaking and staff was very attentive to our needs." },
    { id: 2, user: "Michael T.", avatar: "https://randomuser.me/api/portraits/men/32.jpg", rating: 5, date: "May 2023", comment: "Perfect for our family vacation! Great amenities and close to all the local attractions." },
    { id: 3, user: "Emily P.", avatar: "https://randomuser.me/api/portraits/women/44.jpg", rating: 4, date: "April 2023", comment: "Beautiful room with amazing views. Only small issue was slow WiFi, but otherwise perfect." }
  ];

  const overviewRef = useRef(null);
  const roomsRef = useRef(null);
  const amenitiesRef = useRef(null);
  const locationRef = useRef(null);
  const reviewsRef = useRef(null);

  useEffect(() => {
    // Simulate loading data
    setIsLoading(true);
    
    setTimeout(() => {
      if (hotelId) {
        const foundHotel = hotels.find(h => h.id.toString() === hotelId);
        if (foundHotel) {
          setSelectedHotel({
            ...foundHotel,
            longDescription: hotelDetails.longDescription,
            address: hotelDetails.address,
            reviewCount: hotelDetails.reviewCount,
            amenities: hotelDetails.amenities
          });
        } else {
          setSelectedHotel(hotelDetails);
        }
      } else {
        setSelectedHotel(hotelDetails);
      }
      setIsLoading(false);
    }, 500);
  }, [hotelId]);

  const handleBack = () => {
    navigate("/rental");
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleShare = () => {
    // Mock share functionality
    alert("Share feature would open native share dialog here");
  };

  const nextImage = () => {
    if (showGalleryModal) {
      setActiveImage((prev) => 
        prev === selectedHotel.images.gallery.length ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (showGalleryModal) {
      setActiveImage((prev) => 
        prev === 0 ? selectedHotel.images.gallery.length : prev - 1
      );
    }
  };

  const handleRoomSelect = (id) => {
    setSelectedRoom(id);
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  const handleGuestChange = (type, action) => {
    if (type === 'adults') {
      if (action === 'increase') {
        setGuestCount((prev) => ({ ...prev, adults: prev.adults + 1 }));
      } else if (action === 'decrease' && guestCount.adults > 1) {
        setGuestCount((prev) => ({ ...prev, adults: prev.adults - 1 }));
      }
    } else if (type === 'children') {
      if (action === 'increase') {
        setGuestCount((prev) => ({ ...prev, children: prev.children + 1 }));
      } else if (action === 'decrease' && guestCount.children > 0) {
        setGuestCount((prev) => ({ ...prev, children: prev.children - 1 }));
      }
    }
  };

  const handleReserveNow = () => {
    setShowBookingConfirmation(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0061ff] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading hotel details...</p>
        </div>
      </div>
    );
  }

  if (!selectedHotel) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md px-4">
          <div className="text-red-500 text-5xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Hotel Not Found</h2>
          <p className="text-gray-600 mb-6">We couldn't find the hotel you're looking for. It may have been removed or you may have followed an incorrect link.</p>
          <button 
            onClick={handleBack}
            className="bg-[#0061ff] hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
          >
            Back to Rentals
          </button>
        </div>
      </div>
    );
  }

  const currentRoomPrice = roomTypes[selectedRoom].price;
  const totalNights = 4;
  const totalPrice = currentRoomPrice * totalNights + 50 + 30;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pb-16 pt-16">
        {/* Back button */}
        <div className="px-4 py-3 bg-white shadow-sm">
          <button 
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-[#0061ff] transition-colors"
          >
            <ChevronLeft size={20} className="mr-1" />
            <span>Back to Rentals</span>
          </button>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto px-4 mt-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedHotel.name}</h1>
              <div className="flex items-center text-gray-600 mb-1">
                <MapPin size={16} className="mr-1" />
                <span>{selectedHotel.location}</span>
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 text-gray-700 font-medium">{selectedHotel.rating}</span>
                  <span className="ml-1 text-gray-500">({selectedHotel.reviewCount} reviews)</span>
                  <button 
                    onClick={toggleReviews}
                    className="ml-2 text-blue-600 text-sm hover:underline"
                  >
                    See reviews
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button 
                onClick={toggleFavorite}
                className="p-2 rounded-full border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-red-500 transition-colors"
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <Heart size={20} className={isFavorite ? "text-red-500 fill-red-500" : ""} />
              </button>
              <button 
                onClick={handleShare}
                className="p-2 rounded-full border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <Share size={20} />
              </button>
            </div>
          </div>

          {/* Photo gallery - clickable */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                className="rounded-lg overflow-hidden h-[300px] md:h-[400px] cursor-pointer relative group"
                onClick={() => {setShowGalleryModal(true); setActiveImage(0);}}
              >
                <img 
                  src={selectedHotel.images.main} 
                  alt={selectedHotel.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/80 rounded-full p-2">
                    <Camera className="h-6 w-6 text-gray-800" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {selectedHotel.images.gallery.map((image, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg overflow-hidden h-[140px] md:h-[192px] cursor-pointer relative group"
                    onClick={() => {setShowGalleryModal(true); setActiveImage(index + 1);}}
                  >
                    <img 
                      src={image} 
                      alt={`${selectedHotel.name} ${index + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>
            </div>
            <button 
              className="mt-4 text-blue-600 flex items-center hover:underline"
              onClick={() => setShowGalleryModal(true)}
            >
              <Camera className="h-5 w-5 mr-1" />
              View all photos ({1 + selectedHotel.images.gallery.length})
            </button>
          </div>

          {/* Main details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="mb-8" ref={overviewRef}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="mr-2 text-blue-600 h-6 w-6" />
                  About this hotel
                </h2>
                <p className="text-gray-600 mb-4">{selectedHotel.description}</p>
                <p className="text-gray-600">{selectedHotel.longDescription}</p>
              </div>

              {/* Room selection section */}
              <div className="mb-8" ref={roomsRef}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="mr-2 text-blue-600 h-6 w-6" />
                  Select your room
                </h2>
                <div className="space-y-4">
                  {roomTypes.map((room) => (
                    <div 
                      key={room.id}
                      className={`border ${selectedRoom === room.id ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'} rounded-lg p-4 hover:border-blue-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-lg`}
                      onClick={() => handleRoomSelect(room.id)}
                    >
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-bold text-gray-900">{room.name}</h3>
                          <p className="text-sm text-gray-600">Up to {room.capacity} guests</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">${room.price}</p>
                          <p className="text-sm text-gray-600">per night</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="grid grid-cols-2 gap-2">
                          {room.features.map((feature, i) => (
                            <div key={i} className="flex items-center text-gray-700">
                              <Check size={16} className="text-green-500 mr-1 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8" ref={amenitiesRef}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Coffee className="mr-2 text-blue-600 h-6 w-6" />
                  What this place offers
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {selectedHotel.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-gray-700 p-2 hover:bg-blue-50 rounded-md transition-colors">
                      <Check size={18} className="text-[#0061ff] mr-2" />
                      <span>{typeof amenity === 'string' ? amenity : amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8" ref={locationRef}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="mr-2 text-blue-600 h-6 w-6" />
                  Location
                </h2>
                <p className="text-gray-600 mb-4">{selectedHotel.address || selectedHotel.location}</p>
                <div className="bg-gray-200 rounded-lg h-[300px] flex items-center justify-center relative overflow-hidden group">
                  <img 
                    src="https://maps.googleapis.com/maps/api/staticmap?center=Jammu+Kashmir&zoom=12&size=800x300&maptype=roadmap&markers=color:red%7C33.7782,76.5762&key=YOUR_API_KEY" 
                    alt="Map location" 
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg transform transition-transform group-hover:scale-105">
                      <p className="text-gray-800 font-medium">Interactive map will be displayed here</p>
                      <p className="text-gray-600 text-sm">Exact location provided after booking</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews section */}
              <div className="mb-8" ref={reviewsRef}>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Guest Reviews</h2>
                  <button 
                    onClick={toggleReviews} 
                    className="text-blue-600 flex items-center text-sm hover:underline"
                  >
                    {showReviews ? "Hide reviews" : "Show all reviews"}
                    <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${showReviews ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white rounded-lg px-3 py-2 flex items-center mr-4">
                    <span className="text-xl font-bold mr-1">{selectedHotel.rating}</span>
                    <Star className="h-5 w-5 fill-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Excellent</p>
                    <p className="text-sm text-gray-600">Based on {selectedHotel.reviewCount} reviews</p>
                  </div>
                </div>
                
                {showReviews && (
                  <div className="space-y-6">
                    {reviews.map(review => (
                      <div key={review.id} className="border-b border-gray-200 pb-6">
                        <div className="flex items-center mb-3">
                          <img 
                            src={review.avatar} 
                            alt={review.user} 
                            className="w-10 h-10 rounded-full mr-3" 
                          />
                          <div>
                            <p className="font-semibold text-gray-900">{review.user}</p>
                            <div className="flex items-center">
                              <div className="flex mr-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                        <div className="flex items-center mt-3 text-sm text-gray-600">
                          <button className="flex items-center mr-4 hover:text-blue-600">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            Helpful
                          </button>
                          <button className="flex items-center hover:text-blue-600">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            Reply
                          </button>
                        </div>
                      </div>
                    ))}
                    <button className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors">
                      Show more reviews
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Booking card */}
            <div>
              <div id="booking-card" className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sticky top-24 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">${currentRoomPrice}</span>
                    <span className="text-gray-600 ml-1">per night</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-gray-700">{selectedHotel.rating}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="border border-gray-200 rounded-t-lg overflow-hidden">
                    <div className="grid grid-cols-2">
                      <div 
                        className="p-4 border-r border-b border-gray-200 cursor-pointer hover:bg-blue-50 transition-colors date-picker"
                        onClick={() => setShowDatePicker(!showDatePicker)}
                      >
                        <label className="block text-xs text-gray-500 mb-1">CHECK-IN</label>
                        <div className="flex items-center">
                          <Calendar size={16} className="text-gray-400 mr-2" />
                          <span className="text-gray-800">{checkInDate}</span>
                        </div>
                      </div>
                      <div 
                        className="p-4 border-b border-gray-200 cursor-pointer hover:bg-blue-50 transition-colors date-picker"
                        onClick={() => setShowDatePicker(!showDatePicker)}
                      >
                        <label className="block text-xs text-gray-500 mb-1">CHECK-OUT</label>
                        <div className="flex items-center">
                          <Calendar size={16} className="text-gray-400 mr-2" />
                          <span className="text-gray-800">{checkOutDate}</span>
                        </div>
                      </div>
                    </div>
                    <div 
                      className="p-4 border-b border-gray-200 cursor-pointer hover:bg-blue-50 transition-colors guest-dropdown relative"
                      onClick={() => setShowGuestDropdown(!showGuestDropdown)}
                    >
                      <label className="block text-xs text-gray-500 mb-1">GUESTS</label>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Users size={16} className="text-gray-400 mr-2" />
                          <span className="text-gray-800">{guestCount.adults} adults, {guestCount.children} child</span>
                        </div>
                        <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${showGuestDropdown ? 'rotate-180' : ''}`} />
                      </div>
                      
                      {/* Guest dropdown */}
                      {showGuestDropdown && (
                        <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-4">
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">Adults</span>
                              <div className="flex items-center">
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleGuestChange('adults', 'decrease');
                                  }}
                                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                                  disabled={guestCount.adults <= 1}
                                >
                                  -
                                </button>
                                <span className="mx-3 w-4 text-center">{guestCount.adults}</span>
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleGuestChange('adults', 'increase');
                                  }}
                                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="font-medium">Children</span>
                              <div className="flex items-center">
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleGuestChange('children', 'decrease');
                                  }}
                                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                                  disabled={guestCount.children <= 0}
                                >
                                  -
                                </button>
                                <span className="mx-3 w-4 text-center">{guestCount.children}</span>
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleGuestChange('children', 'increase');
                                  }}
                                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowGuestDropdown(false);
                            }}
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Apply
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-700">${currentRoomPrice} x {totalNights} nights</span>
                    <span className="text-gray-700">${currentRoomPrice * totalNights}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Cleaning fee</span>
                    <span className="text-gray-700">$50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Service fee</span>
                    <span className="text-gray-700">$30</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${totalPrice}</span>
                  </div>
                </div>

                <button 
                  onClick={handleReserveNow}
                  className="w-full bg-[#0061ff] hover:bg-blue-700 text-white py-3 rounded-lg transition-colors font-medium flex items-center justify-center gap-2 group"
                >
                  <span>Reserve Now</span>
                  <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  You won't be charged yet
                </p>
              </div>

              {/* Special offer banner */}
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                <div className="flex items-start">
                  <div className="text-blue-500 mr-3 mt-1">
                    <Bookmark className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Special Offer</h4>
                    <p className="text-sm text-blue-800">Book 4+ nights and get 15% off your stay. Use code <span className="font-semibold">SUMMER15</span> at checkout.</p>
                  </div>
                </div>
              </div>

              {/* Contact host section */}
              <div className="mt-4 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-3">Contact Host</h4>
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src="https://randomuser.me/api/portraits/men/85.jpg" 
                    alt="Host" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">Rajesh Kumar</p>
                    <p className="text-sm text-gray-600">Response rate: 98%</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <button className="w-full border border-gray-300 rounded-lg py-2 text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <Phone size={16} />
                    <span>Call Host</span>
                  </button>
                  <button className="w-full border border-gray-300 rounded-lg py-2 text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <Mail size={16} />
                    <span>Message Host</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-screen gallery modal */}
      {showGalleryModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button 
            onClick={() => setShowGalleryModal(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={24} />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft size={32} />
          </button>
          
          <div className="max-w-4xl max-h-screen p-4">
            <img 
              src={activeImage === 0 ? selectedHotel.images.main : selectedHotel.images.gallery[activeImage - 1]} 
              alt={`${selectedHotel.name} image ${activeImage + 1}`}
              className="max-h-[80vh] mx-auto"
            />
            <p className="text-white text-center mt-4">
              {activeImage + 1} / {1 + selectedHotel.images.gallery.length}
            </p>
          </div>
          
          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}

      {/* Booking confirmation modal */}
      {showBookingConfirmation && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 animate-scaleIn">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
              <p className="text-gray-600">Your reservation at {selectedHotel.name} has been successfully confirmed.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">CHECK-IN</p>
                  <p className="font-medium">{checkInDate}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">CHECK-OUT</p>
                  <p className="font-medium">{checkOutDate}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">GUESTS</p>
                  <p className="font-medium">{guestCount.adults} adults, {guestCount.children} child</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">ROOM TYPE</p>
                  <p className="font-medium">{roomTypes[selectedRoom].name}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${totalPrice}</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={() => setShowBookingConfirmation(false)}
                className="flex-1 bg-white border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <button 
                onClick={() => {
                  setShowBookingConfirmation(false);
                  navigate("/my-trips");
                }}
                className="flex-1 bg-[#0061ff] text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Trips
              </button>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">A confirmation email has been sent to your email address.</p>
              <div className="flex justify-center mt-4 space-x-4">
                <button className="text-gray-500 hover:text-blue-600">
                  <Facebook size={20} />
                </button>
                <button className="text-gray-500 hover:text-blue-400">
                  <Twitter size={20} />
                </button>
                <button className="text-gray-500 hover:text-pink-600">
                  <Instagram size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}