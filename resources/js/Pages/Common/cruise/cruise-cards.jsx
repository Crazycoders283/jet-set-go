import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendar, FaArrowLeft } from 'react-icons/fa';
// import './cruise-cards.css';
import cruiseLineData from './data/cruiselines.json';

const CruiseCards = () => {
  const [searchParams] = useSearchParams();
  const cruiseLineParam = searchParams.get('cruiseLine');
  const destinationParam = searchParams.get('destination');
  const countryParam = searchParams.get('country');
  
  const [title, setTitle] = useState("All Cruises");

  // Sample cruise data - in a real app this would be from an API
  const cruisesData = [
    {
      id: 1,
      title: "7 Night Caribbean Cruise",
      cruiseLine: "Royal Caribbean",
      departing: "Miami, Florida",
      destination: "Caribbean",
      portsOfCall: "Cozumel, Mexico • George Town, Grand Cayman • Falmouth, Jamaica",
      sailingDates: "January 2025 • February 2025 • March 2025",
      image: "/images/royal-caribbean.jpg",
    },
    {
      id: 2,
      title: "5 Night Mediterranean Cruise",
      cruiseLine: "Norwegian Cruise Line",
      departing: "Barcelona, Spain",
      destination: "Mediterranean",
      portsOfCall: "Naples, Italy • Rome (Civitavecchia), Italy • Florence/Pisa (Livorno), Italy",
      sailingDates: "April 2025 • May 2025 • June 2025",
      image: "/images/norwegian.jpg",
    },
    {
      id: 3,
      title: "10 Night Alaska Cruise",
      cruiseLine: "Celebrity Cruises",
      departing: "Vancouver BC, Canada",
      destination: "Vancouver BC",
      country: "Canada",
      portsOfCall: "Ketchikan, Alaska • Juneau, Alaska • Skagway, Alaska • Glacier Bay National Park",
      sailingDates: "June 2025 • July 2025 • August 2025",
      image: "/images/celebrity.jpg",
    },
    {
      id: 4,
      title: "4 Night Bahamas Cruise",
      cruiseLine: "Disney Cruise Line",
      departing: "Port Canaveral, Florida",
      destination: "Bahamas",
      portsOfCall: "Nassau, Bahamas • Disney Castaway Cay",
      sailingDates: "January 2025 • February 2025 • March 2025",
      image: "/images/disney.jpg",
    },
    {
      id: 5,
      title: "7 Night Japan Cruise",
      cruiseLine: "Princess Cruises",
      destination: "Tokyo",
      country: "Japan",
      departing: "Tokyo (Yokohama), Japan",
      portsOfCall: "Kobe, Japan • Busan, South Korea • Nagasaki, Japan",
      sailingDates: "May 2025 • June 2025 • July 2025",
      image: "/images/princess.jpg",
    },
    {
      id: 6,
      title: "7 Night Mediterranean Cruise",
      cruiseLine: "MSC Cruises",
      destination: "Santorini",
      country: "Greece",
      departing: "Piraeus (Athens), Greece",
      portsOfCall: "Santorini, Greece • Mykonos, Greece • Kusadasi, Turkey",
      sailingDates: "June 2025 • July 2025 • August 2025",
      image: "/images/msc.jpg",
    },
  ];

  // Filter cruises based on query parameters
  const [filteredCruises, setFilteredCruises] = useState(cruisesData);

  useEffect(() => {
    let filtered = cruisesData;
    let filterTitle = "All Cruises";

    if (cruiseLineParam) {
      filtered = filtered.filter(cruise => 
        cruise.cruiseLine.toLowerCase() === cruiseLineParam.toLowerCase()
      );
      filterTitle = `${cruiseLineParam} Cruises`;
    }

    if (destinationParam) {
      filtered = filtered.filter(cruise => 
        cruise.destination?.toLowerCase() === destinationParam.toLowerCase() ||
        cruise.portsOfCall?.toLowerCase().includes(destinationParam.toLowerCase())
      );
      filterTitle = `Cruises to ${destinationParam}`;
    }

    if (countryParam) {
      filtered = filtered.filter(cruise => 
        cruise.country?.toLowerCase() === countryParam.toLowerCase() ||
        cruise.portsOfCall?.toLowerCase().includes(countryParam.toLowerCase())
      );
      if (!destinationParam) {
        filterTitle = `Cruises to ${countryParam}`;
      }
    }

    setFilteredCruises(filtered);
    setTitle(filterTitle);
  }, [cruiseLineParam, destinationParam, countryParam]);

  return (
    <div className="max-w-[1400px] mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        <Link to="/" className="bg-[#0066b2] hover:bg-[#005091] text-white font-medium py-2 px-4 rounded-md transition-colors">
          Back to Home
        </Link>
      </div>

      {filteredCruises.length === 0 ? (
        <div className="text-center py-10">
          <h2 className="text-2xl font-semibold mb-4">No cruises found matching your criteria</h2>
          <p className="mb-6">Try searching with different parameters or view all available cruises.</p>
          <Link to="/cruises" className="bg-[#0066b2] hover:bg-[#005091] text-white font-medium py-3 px-8 rounded-md transition-colors">
            View All Cruises
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {filteredCruises.map((cruise) => (
            <div
              key={cruise.id}
              className="bg-white rounded-[20px] overflow-hidden flex flex-row shadow-lg relative"
              style={{
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                marginBottom: "30px",
              }}
            >
              <div style={{ width: "35%", minHeight: "400px" }}>
                <img
                  src={cruise.image || "/placeholder.svg"}
                  alt={cruise.cruiseLine}
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                style={{ width: "65%" }}
                className="p-6 md:p-10 flex flex-col justify-center"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-1">{cruise.title}</h2>
                <p className="text-lg md:text-xl font-medium text-black mb-6">{cruise.cruiseLine}</p>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start">
                    <div className="w-6 h-6 mr-4 mt-1 text-[#0066b2]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <div>
                      <span className="text-[16px] font-semibold">Departing: </span>
                      <span className="text-[16px]">{cruise.departing}</span>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 mr-4 mt-1 text-[#0066b2]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 8C18 4.5 15 3 12 3C9 3 6 4.5 6 8C6 11.5 3 10 3 16L4.5 17.5H19.5L21 16C21 10 18 11.5 18 8Z"></path>
                        <path d="M12 20V17.5"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="text-[16px] font-semibold">Ports of calls: </span>
                      <span className="text-[16px]">{cruise.portsOfCall}</span>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 mr-4 mt-1 text-[#0066b2]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <div>
                      <span className="text-[16px] font-semibold">Sailing Dates: </span>
                      <span className="text-[16px]">{cruise.sailingDates}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    to={`/itinerary?cruise=${cruise.id}&cruiseLine=${encodeURIComponent(cruise.cruiseLine)}`}
                    className="bg-[#0066b2] hover:bg-[#005091] text-white font-medium py-3 px-8 rounded-md transition-colors"
                  >
                    View Itinerary
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CruiseCards; 