import '../css/app.css';
// No need for bootstrap.js as we're not using Laravel's features

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

// Import your pages
const Dashboard = React.lazy(() => import('./Pages/Dashboard'));
const Welcome = React.lazy(() => import('./Pages/Welcome'));
const Error = React.lazy(() => import('./Pages/Error'));

// Auth pages 
const Login = React.lazy(() => import('./Pages/Auth/CustomLogin'));
const Register = React.lazy(() => import('./Pages/Auth/CustomRegister'));

// Import cruise-related pages
const CruiseCards = React.lazy(() => import('./Pages/Common/cruise/pages/cruise-cards'));
const Itinerary = React.lazy(() => import('./Pages/Common/cruise/pages/Itinerary'));
// We'll create a placeholder for the itinerary until it's implemented
// const ItineraryPlaceholder = () => (
//   <div style={{ padding: '50px', textAlign: 'center' }}>
//     <h1>Cruise Itinerary</h1>
//     <p>This page is under construction. Check back soon for detailed cruise itineraries!</p>
//     <button onClick={() => window.history.back()} style={{ padding: '10px 20px', marginTop: '20px' }}>
//       Back to Cruises
//     </button>
//   </div>
// );

const App = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cruises" element={<CruiseCards />} />
        <Route path="/itinerary" element={<Itinerary />} />
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
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>
      </React.StrictMode>
    );
  }
});
