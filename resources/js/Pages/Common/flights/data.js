// Central data store for the flight application

// Popular destinations data
export const destinations = [
  {
    id: 1,
    name: "Raja Ampat",
    region: "Bali",
    image: "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=2025&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Labuan Bajo",
    region: "NTT",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Kawah Ijen",
    region: "Jawa Timur",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1972&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Bromo",
    region: "Jawa Timur",
    image: "https://images.unsplash.com/photo-1589303906132-2e0a2a5b3b6d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Raja Ampat",
    region: "Bali",
    image: "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=2025&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Labuan Bajo",
    region: "NTT",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Kawah Ijen",
    region: "Jawa Timur",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1972&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Bromo",
    region: "Jawa Timur",
    image: "https://images.unsplash.com/photo-1589303906132-2e0a2a5b3b6d?q=80&w=2070&auto=format&fit=crop",
  },
];

// Cheapest flights data
export const cheapFlights = [
  {
    id: 1,
    destination: "Bathinda",
    region: "Punjab",
    price: "₹1,260",
    date: "Wed, 05 Feb",
    image: "https://images.unsplash.com/photo-1606210122158-eeb10e0823bf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    destination: "Jaipur",
    region: "Rajasthan",
    price: "₹2,367",
    date: "Sat, 28 Dec",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    destination: "Leh",
    region: "Ladakh",
    price: "₹2,748",
    date: "Thu, 02 Jan",
    image: "https://images.unsplash.com/photo-1589793907316-f94025b46888?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    destination: "Chandigarh",
    region: "Chandigarh",
    price: "₹2,899",
    date: "Wed, 01 Jan",
    image: "https://images.unsplash.com/photo-1598194809745-f5c29365bda8?q=80&w=1200&auto=format&fit=crop",
  },
];

// Default search form data
export const defaultSearchData = {
  from: "Washington D.C. (Any)",
  to: "",
  departDate: "",
  returnDate: "",
  travelers: "1 Adult, Economy",
  tripType: "oneWay",
};

// Source cities for cheapest flights
export const sourceCities = ["New Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad"];

// Special fare types
export const specialFares = [
  { id: "student", label: "Student" },
  { id: "senior", label: "Senior Citizen" },
  { id: "armed", label: "Armed Forces" },
];

// Hero image
export const heroImage = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop";

// Airplane illustration
export const airplaneIllustration =
  "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop";

// Subscription section airplane
export const subscriptionAirplane =
  "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=2070&auto=format&fit=crop";

// Flight booking data

export const flightBookingData = {
  bookings: [
    {
      bookingId: "BK789012",
      bookingDate: "2024-07-15T12:00:00Z",
      status: "Confirmed",
      pnr: "ABC1234",
      flight: {
        airline: "Akasa Air",
        flightNumber: "QP 1405",
        departureCity: "Hyderabad",
        departureAirport: "Rajiv Gandhi International Airport (HYD)",
        departureTime: "05:50",
        departureDate: "2024-01-15",
        arrivalCity: "New Delhi",
        arrivalAirport: "Indira Gandhi International Airport, Terminal T2 (DEL)",
        arrivalTime: "08:10",
        arrivalDate: "2024-01-15",
        duration: "2h 20m",
        stops: 0,
        cabin: "Economy",
        fareType: "SAVER",
        aircraft: "Boeing 737-800",
        basePrice: 4226, // Per passenger base price
        tax: 1389 // Per passenger tax
      },
      baggage: {
        cabin: "7 Kgs (1 piece only) / Adult",
        checkIn: "15 Kgs (1 piece only) / Adult"
      },
      passengers: [
        {
          id: 1,
          type: "Adult",
          title: "Mr",
          firstName: "Adya",
          lastName: "Paliwal",
          seatNumber: "12A",
          meal: "Vegetarian",
          baggage: "15 Kg",
          mobile: "7520150859",
          email: "adyapaliwal007@gmail.com",
          gender: "male",
          requiresWheelchair: false
        }
      ],
      contact: {
        email: "adyapaliwal007@gmail.com",
        phone: "7520150859",
      },
      payment: {
        baseFare: 4226,
        tax: 1389,
        totalAmount: 5615,
        method: "Credit Card",
        cardNumber: "**** **** **** 4567",
        transactionId: "TXN789012",
      },
      refund: {
        timeline: [
          { time: "Now", date: "17:06", refund: 2106 },
          { time: "12 Jan", date: "02:00", refund: 1036 },
          { time: "14 Jan", date: "02:00", refund: 1036 },
          { time: "15 Jan", date: "20:00", refund: 0, label: "Non-refundable" },
          { time: "Departure", date: "15 Jan, 02:00", refund: 0 }
        ]
      },
      addOns: [
        { 
          id: 1, 
          title: "Free Cancellation with Assured", 
          price: 589,
          perTraveller: true,
          popular: true,
          benefits: ["Instant refund of approx. ₹5615"]
        },
        {
          id: 2,
          title: "Free Cancellation + Rescheduling with Assured Flex",
          price: 889,
          perTraveller: true,
          benefits: [
            "Instant refund of approx. ₹5615",
            "Full Flexibility on rescheduling. Change date, airline & even sector for free"
          ]
        }
      ],
      vipServiceFee: 50, // VIP service fee in dollars (equivalent to ~₹4200)
      isInternational: false
    }
  ],
  
  // Add international flight with visa requirements
  internationalBookings: [
    {
      bookingId: "BK567890",
      bookingDate: "2024-08-10T14:30:00Z",
      status: "Confirmed",
      pnr: "XYZ5678",
      flight: {
        airline: "Emirates",
        flightNumber: "EK 507",
        departureCity: "Mumbai",
        departureAirport: "Chhatrapati Shivaji Maharaj International Airport (BOM)",
        departureTime: "10:30",
        departureDate: "2024-09-15",
        arrivalCity: "Dubai",
        arrivalAirport: "Dubai International Airport, Terminal 3 (DXB)",
        arrivalTime: "12:20",
        arrivalDate: "2024-09-15",
        duration: "3h 20m",
        stops: 0,
        cabin: "Economy",
        fareType: "FLEX",
        aircraft: "Boeing 777-300ER",
        basePrice: 22500,
        tax: 5600
      },
      baggage: {
        cabin: "8 Kgs (1 piece only) / Adult",
        checkIn: "30 Kgs (1 piece only) / Adult"
      },
      passengers: [
        {
          id: 1,
          type: "Adult",
          title: "Mr",
          firstName: "Rahul",
          lastName: "Sharma",
          seatNumber: "24F",
          meal: "Regular",
          baggage: "30 Kg",
          mobile: "9876543210",
          email: "rahul.sharma@example.com",
          gender: "male",
          requiresWheelchair: false
        }
      ],
      contact: {
        email: "rahul.sharma@example.com",
        phone: "9876543210",
      },
      payment: {
        baseFare: 22500,
        tax: 5600,
        totalAmount: 28100,
        method: "Credit Card",
        cardNumber: "**** **** **** 1234",
        transactionId: "TXN567890",
      },
      refund: {
        timeline: [
          { time: "Now", date: "17:06", refund: 21000 },
          { time: "1 Sep", date: "02:00", refund: 15000 },
          { time: "10 Sep", date: "02:00", refund: 10000 },
          { time: "14 Sep", date: "20:00", refund: 0, label: "Non-refundable" },
          { time: "Departure", date: "15 Sep, 10:30", refund: 0 }
        ]
      },
      addOns: [
        { 
          id: 1, 
          title: "Free Cancellation with Assured", 
          price: 2100,
          perTraveller: true,
          popular: true,
          benefits: ["Instant refund of approx. ₹28100"]
        },
        {
          id: 2,
          title: "Free Cancellation + Rescheduling with Assured Flex",
          price: 3400,
          perTraveller: true,
          benefits: [
            "Instant refund of approx. ₹28100",
            "Full Flexibility on rescheduling. Change date, airline & even sector for free"
          ]
        }
      ],
      vipServiceFee: 80,
      isInternational: true,
      visaRequirements: {
        destination: "United Arab Emirates",
        documentNeeded: true,
        visaType: "Tourist Visa",
        requirements: [
          "Valid passport with at least 6 months validity",
          "Confirmed return ticket",
          "Hotel reservation confirmation",
          "Passport-size photographs with white background",
          "Bank statements for the last 3 months",
          "Travel insurance"
        ],
        processingTime: "3-5 business days",
        officialWebsite: "https://www.dubaitourism.gov.ae/en/travel-requirements"
      }
    }
  ]
};

export default flightBookingData; 