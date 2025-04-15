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

const ProfileFallback = () => (
  <div style={{ padding: '50px', textAlign: 'center' }}>
    <h1>User Profile</h1>
    <p>Your profile is loading...</p>
    <a href="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#0066B2', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
      Back to Home
    </a>
  </div>
);

const ProfileEditFallback = () => (
  <div style={{ padding: '50px', textAlign: 'center' }}>
    <h1>Edit Profile</h1>
    <p>Profile editor is loading...</p>
    <a href="/profile" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#0066B2', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
      Back to Profile
    </a>
  </div>
);

// Dynamic imports with fallbacks
const Dashboard = React.lazy(() => 
  import('./pages/Dashboard')
    .catch(() => ({ default: DashboardFallback }))
);

const Welcome = React.lazy(() => 
  import('./pages/Welcome')
    .catch(() => ({ default: WelcomeFallback }))
);

const Error = React.lazy(() => 
  import('./pages/Error')
    .catch(() => ({ default: ErrorFallback }))
);

const Profile = React.lazy(() => 
  import('./pages/Profile')
    .catch(() => ({ default: ProfileFallback }))
);

const ProfileEdit = React.lazy(() => 
  import('./pages/Profile/Edit')
    .catch(() => ({ default: ProfileEditFallback }))
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
  import('./pages/Common/cruise/pages/cruise-cards')
    .catch(() => ({ default: CruiseCardsFallback }))
);

const Itinerary = React.lazy(() => 
  import('./pages/Common/cruise/pages/Itinerary')
    .catch(() => ({ default: ItineraryFallback }))
);

const App = () => {
  return (
    <React.Suspense fallback={<LoadingComponent />}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
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
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
  }
});
