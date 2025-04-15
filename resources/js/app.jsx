import '../css/app.css';
// No need for bootstrap.js as we're not using Laravel's features

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Fallback components
const LoadingComponent = () => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;

const DashboardFallback = () => (
  <div style={{ padding: '50px', textAlign: 'center' }}>
    <h1>Dashboard</h1>
    <p>Your dashboard is loading...</p>
    <a href="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#0066B2', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
      Back to Home
    </a>
  </div>
);

const WelcomeFallback = () => (
  <div style={{ padding: '50px', textAlign: 'center' }}>
    <h1>Welcome to JetSet</h1>
    <p>Loading homepage content...</p>
  </div>
);

const ErrorFallback = () => (
  <div style={{ padding: '50px', textAlign: 'center' }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <a href="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#0066B2', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
      Back to Home
    </a>
  </div>
);

// Dynamic imports with fallbacks
const Dashboard = React.lazy(() => 
  import('./Pages/Dashboard')
    .catch(() => ({ default: DashboardFallback }))
);

const Welcome = React.lazy(() => 
  import('./Pages/Welcome')
    .catch(() => ({ default: WelcomeFallback }))
);

const Error = React.lazy(() => 
  import('./Pages/Error')
    .catch(() => ({ default: ErrorFallback }))
);

// Cruise fallback components
const CruiseCardsFallback = () => (
  <div style={{ padding: '50px', textAlign: 'center' }}>
    <h1>Cruise Options</h1>
    <p>Available cruise options will appear here.</p>
    <a href="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#0066B2', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
      Back to Home
    </a>
  </div>
);

const ItineraryFallback = () => (
  <div style={{ padding: '50px', textAlign: 'center' }}>
    <h1>Cruise Itinerary</h1>
    <p>Detailed itinerary will appear here.</p>
    <a href="/cruises" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#0066B2', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
      Back to Cruises
    </a>
  </div>
);

// Import cruise-related pages with error handling
const CruiseCards = React.lazy(() => 
  import('./Pages/Common/cruise/cruise-cards.tsx')
    .catch(() => ({ default: CruiseCardsFallback }))
);

const Itinerary = React.lazy(() => 
  import('./Pages/Common/cruise/Itinerary')
    .catch(() => ({ default: ItineraryFallback }))
);

// Additional placeholder components for nav links
const FlightsFallback = () => (
  <div style={{ padding: '50px', textAlign: 'center' }}>
    <h1>Flights</h1>
    <p>Flight booking options will appear here.</p>
    <a href="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#0066B2', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
      Back to Home
    </a>
  </div>
);

const PackagesFallback = () => (
  <div style={{ padding: '50px', textAlign: 'center' }}>
    <h1>Vacation Packages</h1>
    <p>Package options will appear here.</p>
    <a href="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#0066B2', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
      Back to Home
    </a>
  </div>
);

const RentalsFallback = () => (
  <div style={{ padding: '50px', textAlign: 'center' }}>
    <h1>Rentals</h1>
    <p>Car and property rental options will appear here.</p>
    <a href="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#0066B2', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
      Back to Home
    </a>
  </div>
);

const MyTripsFallback = () => (
  <div style={{ padding: '50px', textAlign: 'center' }}>
    <h1>My Trips</h1>
    <p>Your trips will be displayed here.</p>
    <a href="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#0066B2', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
      Back to Home
    </a>
  </div>
);

const Flights = React.lazy(() => Promise.resolve({ default: FlightsFallback }));
const Packages = React.lazy(() => Promise.resolve({ default: PackagesFallback }));
const Rentals = React.lazy(() => Promise.resolve({ default: RentalsFallback }));
const MyTrips = React.lazy(() => Promise.resolve({ default: MyTripsFallback }));

const App = () => {
  return (
    <React.Suspense fallback={<LoadingComponent />}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cruises" element={<CruiseCards />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/flight" element={<Flights />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/rental" element={<Rentals />} />
        <Route path="/my-trips" element={<MyTrips />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </React.Suspense>
  );
};

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app');
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
  }
});
