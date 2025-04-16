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