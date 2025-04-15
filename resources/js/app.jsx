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
const Login = React.lazy(() => import('./Pages/Login'));
const Register = React.lazy(() => import('./Pages/Register'));

// Auth pages - using a fallback component if imports fail
const LoginFallback = () => (
  <div style={{ padding: '50px', textAlign: 'center' }}>
    <h1>Login</h1>
    <p>Please log in to access your account</p>
    <a href="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#0066B2', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
      Back to Home
    </a>
  </div>
);

const RegisterFallback = () => (
  <div style={{ padding: '50px', textAlign: 'center' }}>
    <h1>Register</h1>
    <p>Create a new account</p>
    <a href="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#0066B2', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
      Back to Home
    </a>
  </div>
);

// Use dynamic imports with error handling
const LoginComponent = React.lazy(() => 
  import('./Pages/Login')
    .catch(() => ({ default: LoginFallback }))
);

const RegisterComponent = React.lazy(() => 
  import('./Pages/Register')
    .catch(() => ({ default: RegisterFallback }))
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
  import('./Pages/Common/cruise/pages/cruise-cards')
    .catch(() => ({ default: CruiseCardsFallback }))
);

const Itinerary = React.lazy(() => 
  import('./Pages/Common/cruise/pages/Itinerary')
    .catch(() => ({ default: ItineraryFallback }))
);

const App = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
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
