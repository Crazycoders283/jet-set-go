import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, ArrowUpDown, Filter, X, Calendar, ArrowRight, ChevronLeft, ChevronRight, Plane } from "lucide-react";
import FlightSearchForm from "./flight-search-form";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { 
  defaultSearchData, 
  cheapFlights, 
  destinations,
  sourceCities,
  specialFares,
  flightBookingData
} from "./data.js";

// CONFIGURATION: Set this to true when Amadeus API is available
const USE_AMADEUS_API = false;

// Amadeus API configuration (to be used when API is available)
const AMADEUS_API_CONFIG = {
  baseUrl: "https://test.api.amadeus.com/v2",
  apiKey: "YOUR_AMADEUS_API_KEY", // Replace with your actual API key
  apiSecret: "YOUR_AMADEUS_API_SECRET" // Replace with your actual API secret
};

export default function FlightSearchPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialSearchParams = location.state?.searchData || defaultSearchData;
  
  const [searchParams, setSearchParams] = useState(initialSearchParams);
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("price-low");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [tripType, setTripType] = useState("oneWay");
  const [filters, setFilters] = useState({
    priceRange: [0, 10000],
    stops: "any",
    airlines: []
  });
  const [apiToken, setApiToken] = useState(null);
  
  // Date-based pricing state
  const [selectedDateIndex, setSelectedDateIndex] = useState(3); // Middle date as default
  const [dateRange, setDateRange] = useState([]);

  // Generate date range based on current date
  useEffect(() => {
    const today = new Date();
    const dates = [];
    
    // Find the lowest price for highlighting
    let lowestPrice = Number.MAX_SAFE_INTEGER;
    let lowestPriceIndex = 0;
    
    for (let i = -3; i <= 3; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Generate a price based on cheap flights data for more realistic values
      const price = cheapFlights[Math.floor(Math.random() * cheapFlights.length)].price;
      const numericPrice = parseInt(price.replace(/[^\d]/g, ""));
      
      if (numericPrice < lowestPrice) {
        lowestPrice = numericPrice;
        lowestPriceIndex = i + 3; // Adjust index to 0-based array
      }
      
      dates.push({
        date,
        price: numericPrice,
        isLowest: false // Will set the correct one after loop
      });
    }
    
    // Set the lowest price flag
    dates[lowestPriceIndex].isLowest = true;
    
    setDateRange(dates);
  }, []);

  // Authenticate with Amadeus API when component mounts
  useEffect(() => {
    if (USE_AMADEUS_API) {
      authenticateAmadeus();
    }
  }, []);

  // Authenticate with Amadeus API and get token
  const authenticateAmadeus = async () => {
    try {
      // In a real implementation, you would make a POST request to Amadeus auth endpoint
      // Example:
      // const response = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   body: `grant_type=client_credentials&client_id=${AMADEUS_API_CONFIG.apiKey}&client_secret=${AMADEUS_API_CONFIG.apiSecret}`
      // });
      // const data = await response.json();
      // setApiToken(data.access_token);
      
      // For now, we'll just set a mock token
      console.log("Authenticated with Amadeus API (mock)");
      setApiToken("mock_amadeus_token");
    } catch (error) {
      console.error("Failed to authenticate with Amadeus API:", error);
    }
  };

  // Enhanced flight images from Unsplash
  const flightImages = [
    "https://images.unsplash.com/photo-1564698735457-9c2869f64ca1?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1200&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1507812984078-917a274065be?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1465552726352-de2b9d5400c3?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559592892-cbabb419d205?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1570301926313-caac8c745d0d?q=80&w=1200&auto=format&fit=crop"
  ];

  // Generate mock flight data from data.js
  const generateMockFlights = () => {
    return [
      ...cheapFlights.map((flight, index) => ({
        id: flight.id,
        from: searchParams.from || "Washington D.C.",
        to: flight.destination,
        departDate: flight.date,
        returnDate: "",
        airline: ["IndiGo", "Air India", "SpiceJet", "Vistara"][Math.floor(Math.random() * 4)],
        duration: `${Math.floor(Math.random() * 5) + 1}h ${Math.floor(Math.random() * 59) + 1}m`,
        stops: Math.floor(Math.random() * 3),
        price: parseInt(flight.price.replace(/[^\d]/g, "")),
        image: flightImages[index % flightImages.length]
      })),
      // Generate more flights for search results
      ...[...Array(8)].map((_, i) => ({
        id: cheapFlights.length + i + 1,
        from: searchParams.from || "Washington D.C.",
        to: destinations[Math.floor(Math.random() * destinations.length)].name,
        departDate: "Wed, 15 Jan",
        returnDate: "",
        airline: ["IndiGo", "Air India", "SpiceJet", "Vistara"][Math.floor(Math.random() * 4)],
        duration: `${Math.floor(Math.random() * 5) + 1}h ${Math.floor(Math.random() * 59) + 1}m`,
        stops: Math.floor(Math.random() * 3),
        price: Math.floor(Math.random() * 8000) + 1000,
        image: flightImages[i % flightImages.length]
      }))
    ];
  };

  // Search flights using Amadeus API
  const searchFlightsWithApi = async (params) => {
    try {
      if (!apiToken) {
        await authenticateAmadeus();
      }

      // In a real implementation, you would make a GET request to Amadeus flight offers search endpoint
      // Example:
      // const originLocationCode = params.from.substring(0, 3).toUpperCase();
      // const destinationLocationCode = params.to.substring(0, 3).toUpperCase();
      // const departureDate = formatDateForAmadeus(params.departDate);
      // const returnDate = params.tripType === 'roundTrip' ? formatDateForAmadeus(params.returnDate) : '';
      // const adults = parseInt(params.travelers.split(' ')[0]);
      
      // const url = `${AMADEUS_API_CONFIG.baseUrl}/shopping/flight-offers?originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&departureDate=${departureDate}${returnDate ? '&returnDate=' + returnDate : ''}&adults=${adults}&max=20`;
      
      // const response = await fetch(url, {
      //   method: 'GET',
      //   headers: {
      //     'Authorization': `Bearer ${apiToken}`
      //   }
      // });
      
      // const data = await response.json();
      // const apiFlights = transformAmadeusResponse(data);
      // return apiFlights;

      // For now, return mock data with a delay to simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return generateMockFlights();
    } catch (error) {
      console.error("Error fetching flights from Amadeus API:", error);
      // Fallback to mock data if API call fails
      return generateMockFlights();
    }
  };

  // Transform Amadeus API response to our format
  const transformAmadeusResponse = (apiResponse) => {
    // This would parse and transform the Amadeus API response into our flight format
    // For now, just returning mock data
    return generateMockFlights();
  };

  // Format date for Amadeus API (YYYY-MM-DD)
  const formatDateForAmadeus = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  // Get flights data when search parameters change
  useEffect(() => {
    setLoading(true);
    
    const getFlights = async () => {
      try {
        let flightData;
        
        if (USE_AMADEUS_API) {
          // Use real API if enabled
          flightData = await searchFlightsWithApi(searchParams);
        } else {
          // Use mock data as fallback
          flightData = generateMockFlights();
        }
        
        setFlights(flightData);
      } catch (error) {
        console.error("Error getting flights:", error);
        // Fallback to mock data if there's an error
        setFlights(generateMockFlights());
      } finally {
        setLoading(false);
      }
    };
    
    // Simulate delay for better UX
    const timer = setTimeout(() => {
      getFlights();
    }, 500);
    
    return () => clearTimeout(timer);
  }, [searchParams]);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...flights];
    
    // Apply filters
    if (filters.priceRange) {
      result = result.filter(flight => 
        flight.price >= filters.priceRange[0] && 
        flight.price <= filters.priceRange[1]
      );
    }
    
    if (filters.stops !== "any") {
      result = result.filter(flight => 
        filters.stops === "0" ? flight.stops === 0 : 
        filters.stops === "1" ? flight.stops === 1 : 
        flight.stops > 1
      );
    }
    
    if (filters.airlines.length > 0) {
      result = result.filter(flight => 
        filters.airlines.includes(flight.airline)
      );
    }
    
    // Apply sorting
    if (sortOrder === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "duration") {
      result.sort((a, b) => {
        const getMinutes = (duration) => {
          const [hours, minutes] = duration.split("h ").map(part => 
            parseInt(part.replace(/[^\d]/g, ""))
          );
          return hours * 60 + minutes;
        };
        return getMinutes(a.duration) - getMinutes(b.duration);
      });
    }
    
    setFilteredFlights(result);
  }, [flights, filters, sortOrder]);

  // Handle search form submission
  const handleSearch = (formData) => {
    setSearchParams(formData);
    setLoading(true);
  };

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value
    });
  };
  
  // Handle date selection for date-based pricing
  const handleDateSelection = (index) => {
    setSelectedDateIndex(index);
    setLoading(true);
    
    // Get new search date
    const newDate = dateRange[index].date;
    const formattedDate = formatDate(newDate);
    
    // Update search params with the new date
    const updatedParams = {
      ...searchParams,
      departDate: formattedDate
    };
    
    setSearchParams(updatedParams);
  };
  
  // Handle trip type change
  const handleTripTypeChange = (type) => {
    setTripType(type);
  };
  
  // Shift date range left or right
  const shiftDateRange = (direction) => {
    const newDates = [...dateRange];
    
    if (direction === "left") {
      // Shift dates one day back
      newDates.forEach(dateObj => {
        const newDate = new Date(dateObj.date);
        newDate.setDate(newDate.getDate() - 7);
        dateObj.date = newDate;
        // Get a new price from cheap flights data
        const newPrice = cheapFlights[Math.floor(Math.random() * cheapFlights.length)].price;
        dateObj.price = parseInt(newPrice.replace(/[^\d]/g, ""));
      });
    } else {
      // Shift dates one day forward
      newDates.forEach(dateObj => {
        const newDate = new Date(dateObj.date);
        newDate.setDate(newDate.getDate() + 7);
        dateObj.date = newDate;
        // Get a new price from cheap flights data
        const newPrice = cheapFlights[Math.floor(Math.random() * cheapFlights.length)].price;
        dateObj.price = parseInt(newPrice.replace(/[^\d]/g, ""));
      });
    }
    
    // Find the lowest price
    let lowestPrice = Number.MAX_SAFE_INTEGER;
    let lowestPriceIndex = 0;
    
    newDates.forEach((dateObj, index) => {
      dateObj.isLowest = false;
      if (dateObj.price < lowestPrice) {
        lowestPrice = dateObj.price;
        lowestPriceIndex = index;
      }
    });
    
    newDates[lowestPriceIndex].isLowest = true;
    
    setDateRange(newDates);
  };

  // Available airlines from the flights data
  const availableAirlines = [...new Set(flights.map(flight => flight.airline))];
  
  // Format date for display
  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`;
  };

  // Handle booking a flight
  const handleBookFlight = (flight) => {
    if (USE_AMADEUS_API) {
      // In a real app, you would make an API call to create a booking
      console.log("Creating booking with Amadeus API for flight:", flight);
    }
    
    // Navigate to booking confirmation page with flight details
    navigate("/flights/booking-confirmation", { 
      state: { 
        bookingData: {
          ...flightBookingData.bookings[0], // Use mock booking data
          flight: {
            ...flightBookingData.bookings[0].flight,
            departureCity: flight.from,
            arrivalCity: flight.to,
            departureDate: flight.departDate,
            airline: flight.airline
          }
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Search Form Section */}
      <section className="bg-blue-600 pt-20 pb-6">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-white text-2xl font-semibold mb-6">Search for Flights</h1>
          
          {/* Trip Type Selection */}
          <div className="flex justify-center mb-4">
            <div className="bg-blue-700/30 inline-flex rounded-full p-1">
              <button
                className={`px-6 py-2 rounded-full ${
                  tripType === "oneWay" 
                    ? "bg-white text-blue-700 shadow-sm" 
                    : "text-white hover:bg-blue-500/30"
                } transition-colors`}
                onClick={() => handleTripTypeChange("oneWay")}
              >
                One Way
              </button>
              <button
                className={`px-6 py-2 rounded-full ${
                  tripType === "roundTrip" 
                    ? "bg-white text-blue-700 shadow-sm" 
                    : "text-white hover:bg-blue-500/30"
                } transition-colors`}
                onClick={() => handleTripTypeChange("roundTrip")}
              >
                Round Trip
              </button>
            </div>
          </div>
          
          {/* Main Search Form */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
              {/* From */}
              <div className="p-4">
                <label className="block text-xs text-gray-500 font-medium mb-1">From</label>
                <input
                  type="text"
                  placeholder="Washington D.C."
                  className="w-full border-none outline-none text-gray-800 text-base"
                  defaultValue={searchParams.from}
                  readOnly
                  onClick={() => handleSearch(searchParams)}
                />
              </div>

              {/* To */}
              <div className="p-4">
                <label className="block text-xs text-gray-500 font-medium mb-1">To</label>
                <input
                  type="text"
                  placeholder="Country, city or airport"
                  className="w-full border-none outline-none text-gray-800 text-base"
                  defaultValue={searchParams.to}
                  readOnly
                  onClick={() => handleSearch(searchParams)}
                />
              </div>

              {/* Depart */}
              <div className="p-4">
                <label className="block text-xs text-gray-500 font-medium mb-1">Depart</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Add date"
                    className="w-full border-none outline-none text-gray-800 text-base"
                    defaultValue={searchParams.departDate}
                    readOnly
                    onClick={() => handleSearch(searchParams)}
                  />
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Return */}
              <div className="p-4">
                <label className="block text-xs text-gray-500 font-medium mb-1">Return</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Add date"
                    className="w-full border-none outline-none text-gray-800 text-base"
                    disabled={tripType === "oneWay"}
                    defaultValue={searchParams.returnDate}
                    readOnly
                    onClick={() => handleSearch(searchParams)}
                  />
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Search Button */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-1">Travellers and cabin class</label>
                  <div className="flex items-center text-sm">
                    1 Adult, Economy
                  </div>
                </div>
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors flex items-center gap-2"
                  onClick={() => handleSearch(searchParams)}
                >
                  <Plane size={18} className="rotate-90" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Special Fares */}
          <div className="max-w-5xl mx-auto mt-4 flex flex-wrap justify-center gap-3">
            <span className="text-sm text-white">Special Fares:</span>
            {specialFares.map((fare) => (
              <button
                key={fare.id}
                className="px-4 py-1 bg-blue-500/30 hover:bg-blue-500/50 text-white rounded-full text-sm transition-colors"
              >
                {fare.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Background decorative elements */}
        <div className="absolute left-0 top-32 w-full overflow-hidden -z-10 opacity-5 pointer-events-none">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/6357/6357049.png" 
            alt="" 
            className="w-96 h-96 object-contain"
          />
        </div>
        <div className="absolute right-0 bottom-32 w-full overflow-hidden -z-10 opacity-5 pointer-events-none">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/6357/6357049.png" 
            alt="" 
            className="w-96 h-96 object-contain ml-auto transform rotate-180"
          />
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 sticky top-24 overflow-hidden">
              {/* Filter Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 text-white">
                <h3 className="text-lg font-bold flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  FILTER
                </h3>
              </div>
              
              {/* Popular Filters */}
              <div className="p-4 border-b border-gray-200 bg-blue-50">
                <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  Popular Filters
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center p-2 hover:bg-blue-100 rounded-md transition-colors cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" 
                      checked={filters.stops === "0"}
                      onChange={() => handleFilterChange('stops', filters.stops === "0" ? "any" : "0")}
                    />
                    <span className="ml-2 flex items-center">
                      Nonstop
                      <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">Fastest</span>
                    </span>
                  </label>
                  <label className="flex items-center p-2 hover:bg-blue-100 rounded-md transition-colors cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2">Morning Departure</span>
                  </label>
                  {availableAirlines.slice(0, 5).map((airline) => (
                    <label key={airline} className="flex items-center p-2 hover:bg-blue-100 rounded-md transition-colors cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={filters.airlines.includes(airline)}
                        onChange={() => {
                          const newAirlines = filters.airlines.includes(airline)
                            ? filters.airlines.filter(a => a !== airline)
                            : [...filters.airlines, airline];
                          handleFilterChange('airlines', newAirlines);
                        }}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2">{airline}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div className="p-4 border-b border-gray-200">
                <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Price Range
                </h4>
                <div className="relative pt-5">
                  <input 
                    type="range" 
                    min="0" 
                    max="20000" 
                    step="500"
                    value={filters.priceRange[1]}
                    onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span className="font-medium">₹ {filters.priceRange[0]}</span>
                    <span className="font-medium">₹ {filters.priceRange[1]}</span>
                  </div>
                  <div 
                    className="absolute top-0 left-0 right-0 text-xs text-gray-500 text-center"
                    style={{ 
                      left: `${Math.min(100, Math.max(0, (filters.priceRange[1] / 20000) * 100 - 10))}%` 
                    }}
                  >
                    ₹ {filters.priceRange[1]}
                  </div>
                </div>
              </div>
              
              {/* Stops */}
              <div className="p-4 border-b border-gray-200">
                <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                  Stops
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  <div 
                    className={`${filters.stops === "0" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"} text-center py-2 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-colors shadow-sm`}
                    onClick={() => handleFilterChange('stops', filters.stops === "0" ? "any" : "0")}
                  >
                    <div className="font-bold">0</div>
                    <div className="text-xs">nonstop</div>
                  </div>
                  <div 
                    className={`${filters.stops === "1" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"} text-center py-2 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-colors shadow-sm`}
                    onClick={() => handleFilterChange('stops', filters.stops === "1" ? "any" : "1")}
                  >
                    <div className="font-bold">1</div>
                    <div className="text-xs">Stop</div>
                  </div>
                  <div 
                    className={`${filters.stops === "2+" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"} text-center py-2 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-colors shadow-sm`}
                    onClick={() => handleFilterChange('stops', filters.stops === "2+" ? "any" : "2+")}
                  >
                    <div className="font-bold">2+</div>
                    <div className="text-xs">Stop</div>
                  </div>
                </div>
              </div>
              
              {/* Departure from Source */}
              <div className="p-4 border-b border-gray-200">
                <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Departure from {searchParams.from || sourceCities[0]}
                </h4>
                <div className="grid grid-cols-4 gap-1">
                  <div className="text-center border border-gray-200 py-2 rounded-lg cursor-pointer hover:bg-blue-50 text-xs shadow-sm transition-colors">
                    <div>Before</div>
                    <div className="font-medium">6 AM</div>
                  </div>
                  <div className="text-center border border-gray-200 py-2 rounded-lg cursor-pointer hover:bg-blue-50 text-xs shadow-sm transition-colors">
                    <div>6 AM -</div>
                    <div className="font-medium">12 PM</div>
                  </div>
                  <div className="text-center border border-gray-200 py-2 rounded-lg cursor-pointer hover:bg-blue-50 text-xs shadow-sm transition-colors">
                    <div>12 PM -</div>
                    <div className="font-medium">6 PM</div>
                  </div>
                  <div className="text-center border border-gray-200 py-2 rounded-lg cursor-pointer hover:bg-blue-50 text-xs shadow-sm transition-colors">
                    <div>After</div>
                    <div className="font-medium">6 PM</div>
                  </div>
                </div>
              </div>
              
              {/* Arrival at Destination */}
              <div className="p-4 border-b border-gray-200">
                <h4 className="font-medium text-gray-700 mb-3">Arrival at {searchParams.to || "Any Destination"}</h4>
                <div className="grid grid-cols-4 gap-1">
                  <div className="text-center border border-gray-200 py-2 rounded cursor-pointer hover:bg-blue-50 text-xs">
                    <div>Before</div>
                    <div>6 AM</div>
                  </div>
                  <div className="text-center border border-gray-200 py-2 rounded cursor-pointer hover:bg-blue-50 text-xs">
                    <div>6 AM -</div>
                    <div>12 PM</div>
                  </div>
                  <div className="text-center border border-gray-200 py-2 rounded cursor-pointer hover:bg-blue-50 text-xs">
                    <div>12 PM -</div>
                    <div>6 PM</div>
                  </div>
                  <div className="text-center border border-gray-200 py-2 rounded cursor-pointer hover:bg-blue-50 text-xs">
                    <div>After</div>
                    <div>6 PM</div>
                  </div>
                </div>
              </div>
              
              {/* Flight Quality */}
              <div className="p-4 border-b border-gray-200">
                <h4 className="font-medium text-gray-700 mb-3">Flight Quality</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                    <span className="ml-2">Show Wi-Fi flights only</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                    <span className="ml-2">Show Red-Eye</span>
                  </label>
                </div>
              </div>
              
              {/* Airlines */}
              <div className="p-4">
                <h4 className="font-medium text-gray-700 mb-3">Airlines</h4>
                <div className="space-y-2">
                  {availableAirlines.map((airline, index) => {
                    // Get the minimum price for this airline
                    const airlineFlights = flights.filter(f => f.airline === airline);
                    const minPrice = airlineFlights.length ? Math.min(...airlineFlights.map(f => f.price)) : 0;
                    
                    // Airline colors
                    const airlineColors = {
                      "SpiceJet": "bg-red-700",
                      "Indigo": "bg-blue-900",
                      "Air India": "bg-red-800",
                      "Vistara": "bg-purple-700",
                      "Air India Express": "bg-red-600",
                      "AkasaAir": "bg-orange-500"
                    };
                    
                    return (
                      <label key={airline} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input 
                            type="checkbox"
                            checked={filters.airlines.includes(airline)}
                            onChange={() => {
                              const newAirlines = filters.airlines.includes(airline)
                                ? filters.airlines.filter(a => a !== airline)
                                : [...filters.airlines, airline];
                              handleFilterChange('airlines', newAirlines);
                            }}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                          />
                          <span className="ml-2 flex items-center">
                            <span className={`inline-block w-5 h-5 ${airlineColors[airline] || "bg-gray-500"} rounded mr-1`}></span>
                            {airline}
                          </span>
                        </div>
                        {minPrice > 0 && <span className="text-sm text-gray-600">₹ {minPrice}</span>}
                      </label>
                    );
                  })}
                </div>
                {availableAirlines.length > 5 && (
                  <button className="text-blue-600 font-medium mt-3 text-sm flex items-center">
                    More +
                  </button>
                )}
              </div>
            </div>
          </div>
          
          {/* Right Side Content */}
          <div className="w-full md:w-3/4">
            {/* Sort By */}
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-600">
                Showing <span className="font-medium">{filteredFlights.length}</span> flights
              </div>
              <div className="text-sm text-gray-700 flex items-center bg-white p-2 rounded-lg shadow-sm">
                <span className="mr-2 font-medium">Sort By:</span>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                >
                  <option value="price-low">Price (Lowest)</option>
                  <option value="price-high">Price (Highest)</option>
                  <option value="duration">Duration (Shortest)</option>
                </select>
              </div>
            </div>
            
            {/* Date-based Pricing Section */}
            <section className="bg-white rounded-lg shadow-lg border border-gray-200 mb-6 overflow-hidden">
              <div className="relative flex items-center">
                {/* Left Arrow */}
                <button 
                  onClick={() => shiftDateRange("left")}
                  className="p-6 hover:bg-gray-50 border-r border-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Previous dates"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                
                {/* Date Selection */}
                <div className="flex-1 overflow-x-auto">
                  <div className="grid grid-cols-7">
                    {dateRange.map((dateObj, index) => {
                      const dayNum = dateObj.date.getDate();
                      const monthName = dateObj.date.toLocaleDateString('en-US', { month: 'short' });
                      
                      return (
                        <div 
                          key={index}
                          onClick={() => handleDateSelection(index)}
                          className={`cursor-pointer border-r last:border-r-0 transition-all ${
                            index === selectedDateIndex 
                              ? 'bg-yellow-50 relative transform scale-105 z-10 shadow-md'
                              : 'hover:bg-blue-50'
                          }`}
                        >
                          {index === selectedDateIndex && (
                            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500"></div>
                          )}
                          <div className="text-center py-5 px-4">
                            <p className="text-lg font-medium">
                              {monthName} {String(dayNum).padStart(2, '0')}
                            </p>
                            <p className={`text-lg font-semibold mt-1 ${
                              index === selectedDateIndex 
                                ? 'text-blue-700' 
                                : dateObj.isLowest ? 'text-green-600' : 'text-gray-800'
                            }`}>
                              ₹ {dateObj.price}
                              {dateObj.isLowest && !index === selectedDateIndex && (
                                <span className="inline-block ml-1 text-xs bg-green-100 text-green-800 px-1 rounded">Lowest</span>
                              )}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Right Arrow */}
                <button 
                  onClick={() => shiftDateRange("right")}
                  className="p-6 hover:bg-gray-50 border-l border-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Next dates"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
                
                {/* Calendar Button */}
                <button
                  className="p-6 hover:bg-gray-50 border-l border-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Open calendar"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </button>
              </div>
            </section>
            
            {/* Flight Results */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              {/* Flight Results Header */}
              <div className="grid grid-cols-6 bg-gradient-to-r from-blue-700 to-blue-600 text-white px-4 py-3 text-sm font-medium">
                <div>AIRLINES</div>
                <div>DEPARTURE</div>
                <div>DURATION</div>
                <div>ARRIVE</div>
                <div>PRICE</div>
                <div className="text-right">BOOK</div>
              </div>
              
              {/* Loading State */}
              {loading && (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
                </div>
              )}
              
              {/* No Results State */}
              {!loading && filteredFlights.length === 0 && (
                <div className="p-8 text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=600&auto=format&fit=crop" 
                    alt="No flights found" 
                    className="w-32 h-32 object-contain mx-auto mb-4 opacity-60"
                  />
                  <h3 className="text-xl font-semibold mb-2">No flights found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
                  <button 
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                    onClick={() => setFilters({
                      priceRange: [0, 10000],
                      stops: "any",
                      airlines: []
                    })}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
              
              {/* Flight Results */}
              {!loading && filteredFlights.length > 0 && (
                <div>
                  {filteredFlights.map((flight, index) => {
                    // Airline colors
                    const airlineColors = {
                      "SpiceJet": "bg-red-700",
                      "Indigo": "bg-blue-900",
                      "Air India": "bg-red-800",
                      "Vistara": "bg-purple-700"
                    };
                    
                    // Airline code prefixes
                    const airlinePrefixes = {
                      "SpiceJet": "SG-",
                      "Indigo": "6E-",
                      "Air India": "AI-",
                      "Vistara": "UK-"
                    };
                    
                    // Generate flight number
                    const flightNumber = `${airlinePrefixes[flight.airline] || "XX-"}${1000 + flight.id}`;
                    
                    // Random seats left (only show on some flights)
                    const seatsLeft = index % 3 === 2 ? Math.floor(Math.random() * 10) + 1 : null;
                    
                    // Random discount from special fares
                    const discount = specialFares[index % specialFares.length]?.discount || 350;
                    
                    // Calculate arrival time based on departure and duration
                    const getArrivalTime = () => {
                      const durationHours = parseInt(flight.duration.split('h')[0]);
                      const durationMinutes = parseInt(flight.duration.split('h ')[1].replace('m', ''));
                      
                      // Assume departure time is a random hour between 8-23
                      const departHour = 8 + (flight.id % 16); // Between 8 and 23
                      const departMinute = (flight.id * 7) % 60; // Random minute
                      
                      // Calculate arrival time
                      let arrivalHour = (departHour + durationHours) % 24;
                      let arrivalMinute = (departMinute + durationMinutes) % 60;
                      
                      // Adjust for minute overflow
                      if (departMinute + durationMinutes >= 60) {
                        arrivalHour = (arrivalHour + 1) % 24;
                      }
                      
                      return `${arrivalHour.toString().padStart(2, '0')}:${arrivalMinute.toString().padStart(2, '0')}`;
                    };
                    
                    // Format departure time
                    const getDepartureTime = () => {
                      const departHour = 8 + (flight.id % 16); // Between 8 and 23
                      const departMinute = (flight.id * 7) % 60; // Random minute
                      return `${departHour.toString().padStart(2, '0')}:${departMinute.toString().padStart(2, '0')}`;
                    };
                    
                    // Get flight amenities
                    const amenities = [
                      { name: "Wi-Fi", available: flight.id % 2 === 0 },
                      { name: "In-flight Entertainment", available: flight.id % 3 === 0 },
                      { name: "Power Outlets", available: flight.id % 4 === 0 }
                    ];
                    
                    return (
                      <div key={flight.id} className="border-b border-gray-200 last:border-b-0 hover:bg-blue-50 transition-colors group">
                        <div className="p-4">
                          <div className="grid grid-cols-6 items-center">
                            {/* Airline */}
                            <div className="flex items-center gap-3">
                              <div className={`w-16 h-16 ${airlineColors[flight.airline] || "bg-gray-600"} rounded-lg flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform`}>
                                <img 
                                  src={`https://placehold.co/40x40/5272F2/FFFFFF?text=${flight.airline[0]}`}
                                  alt={flight.airline}
                                  className="w-12 h-12 object-contain"
                                />
                              </div>
                              <div>
                                <div className="font-medium text-lg">{flight.airline}</div>
                                <div className="text-gray-500 flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                  </svg>
                                  {flightNumber}
                                </div>
                              </div>
                            </div>
                            
                            {/* Departure */}
                            <div>
                              <div className="text-xl font-bold group-hover:text-blue-700 transition-colors">{getDepartureTime()}</div>
                              <div className="text-gray-600 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {flight.from}
                              </div>
                            </div>
                            
                            {/* Duration */}
                            <div className="text-center">
                              <div className="text-sm text-gray-600 mb-1 font-medium">{flight.duration}</div>
                              <div className="relative">
                                <div className="h-px bg-gradient-to-r from-blue-400 to-blue-600 w-32 mx-auto my-2 relative">
                                  <div className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-blue-500"></div>
                                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                                    <svg width="8" height="8" viewBox="0 0 8 8">
                                      <polygon points="0,4 8,0 8,8" fill="#3B82F6" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="text-sm">
                                  {flight.stops === 0 ? (
                                    <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-medium">Non-stop</span>
                                  ) : (
                                    <span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium">{flight.stops}-stop</span>
                                  )}
                                </div>
                              </div>
                            </div>
                            
                            {/* Arrival */}
                            <div>
                              <div className="text-xl font-bold group-hover:text-blue-700 transition-colors">{getArrivalTime()}</div>
                              <div className="text-gray-600 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {flight.to}
                              </div>
                            </div>
                            
                            {/* Price */}
                            <div>
                              <div className="text-2xl font-bold text-blue-700">₹ {flight.price}</div>
                              <button className="mt-1 text-blue-500 border border-blue-300 rounded-full px-3 py-1 text-sm hover:bg-blue-500 hover:text-white transition-colors">
                                + More Fare
                              </button>
                            </div>
                            
                            {/* Book Button */}
                            <div className="flex flex-col items-end">
                              <button 
                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg transition-all duration-300 uppercase font-bold mb-2 shadow-md transform hover:scale-105"
                                onClick={() => handleBookFlight(flight)}
                              >
                                BOOK NOW
                              </button>
                              {seatsLeft && (
                                <div className="text-sm text-blue-700 flex items-center gap-1 font-medium bg-blue-50 px-2 py-1 rounded-full">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                  </svg>
                                  {seatsLeft} Seats Left
                                </div>
                              )}
                            </div>
                          </div>
                          
                          {/* Promo Message */}
                          <div className="mt-3 bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-300 p-2 text-sm text-gray-800 font-medium rounded-r-md shadow-sm">
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              BOOKNOW: Get extra Rs.{discount} instant discount on this flight
                            </div>
                          </div>
                          
                          {/* Amenities Row */}
                          <div className="mt-3 flex flex-wrap gap-2">
                            {amenities.map((amenity, idx) => (
                              <span 
                                key={idx} 
                                className={`text-xs px-2 py-1 rounded-full flex items-center ${
                                  amenity.available 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-gray-100 text-gray-500 line-through'
                                }`}
                              >
                                {amenity.available ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                )}
                                {amenity.name}
                              </span>
                            ))}
                          </div>
                          
                          {/* Flight Detail Link */}
                          <div className="mt-2 flex justify-start">
                            <button className="text-blue-500 text-sm hover:text-blue-700 transition-colors flex items-center group">
                              <span>Flight Detail</span>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 