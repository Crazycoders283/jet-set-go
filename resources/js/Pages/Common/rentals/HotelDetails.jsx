import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Star, MapPin, Check, ChevronLeft, Heart, Share, Calendar, Users } from "lucide-react";
import { hotels, hotelDetails } from "./hotel";

export default function HotelDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const hotelId = queryParams.get("id");
  
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className="min-h-screen bg-white pb-16">
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
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="p-2 rounded-full border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-800 transition-colors">
              <Heart size={20} />
            </button>
            <button className="p-2 rounded-full border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-800 transition-colors">
              <Share size={20} />
            </button>
          </div>
        </div>

        {/* Photo gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden h-[300px] md:h-[400px]">
              <img 
                src={selectedHotel.images.main} 
                alt={selectedHotel.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {selectedHotel.images.gallery.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden h-[140px] md:h-[192px]">
                  <img 
                    src={image} 
                    alt={`${selectedHotel.name} ${index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this hotel</h2>
              <p className="text-gray-600 mb-4">{selectedHotel.description}</p>
              <p className="text-gray-600">{selectedHotel.longDescription}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What this place offers</h2>
              <div className="grid grid-cols-2 gap-4">
                {selectedHotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <Check size={18} className="text-[#0061ff] mr-2" />
                    <span>{typeof amenity === 'string' ? amenity : amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
              <p className="text-gray-600 mb-4">{selectedHotel.address || selectedHotel.location}</p>
              <div className="bg-gray-200 rounded-lg h-[200px] flex items-center justify-center">
                <p className="text-gray-500">Map view will be displayed here</p>
              </div>
            </div>
          </div>

          {/* Booking card */}
          <div>
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sticky top-6">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold text-gray-900">${selectedHotel.price}</span>
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
                    <div className="p-4 border-r border-b border-gray-200">
                      <label className="block text-xs text-gray-500 mb-1">CHECK-IN</label>
                      <div className="flex items-center">
                        <Calendar size={16} className="text-gray-400 mr-2" />
                        <span className="text-gray-800">Jul 24, 2022</span>
                      </div>
                    </div>
                    <div className="p-4 border-b border-gray-200">
                      <label className="block text-xs text-gray-500 mb-1">CHECK-OUT</label>
                      <div className="flex items-center">
                        <Calendar size={16} className="text-gray-400 mr-2" />
                        <span className="text-gray-800">Jul 28, 2022</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-b border-gray-200">
                    <label className="block text-xs text-gray-500 mb-1">GUESTS</label>
                    <div className="flex items-center">
                      <Users size={16} className="text-gray-400 mr-2" />
                      <span className="text-gray-800">2 adults, 1 child</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700">${selectedHotel.price} x 4 nights</span>
                  <span className="text-gray-700">${selectedHotel.price * 4}</span>
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
                  <span>${selectedHotel.price * 4 + 50 + 30}</span>
                </div>
              </div>

              <button className="w-full bg-[#0061ff] hover:bg-blue-700 text-white py-3 rounded-lg transition-colors font-medium">
                Reserve Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}