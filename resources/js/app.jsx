import '../css/app.css';
// No need for bootstrap.js as we're not using Laravel's features

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

// Import your pages using dynamic imports that will work regardless of case
const Dashboard = React.lazy(() => {
  try {
    return import('./Pages/Dashboard').catch(() => import('./pages/Dashboard'));
  } catch (e) {
    return import('./pages/Dashboard');
  }
});

const Welcome = React.lazy(() => {
  try {
    return import('./Pages/Welcome').catch(() => import('./pages/Welcome'));
  } catch (e) {
    return import('./pages/Welcome');
  }
});

const Error = React.lazy(() => {
  try {
    return import('./Pages/Error').catch(() => import('./pages/Error'));
  } catch (e) {
    return import('./pages/Error');
  }
});

// Auth pages with dynamic imports
const Login = React.lazy(() => {
  try {
    return import('./Pages/Auth/Login').catch(() => import('./pages/Auth/Login'));
  } catch (e) {
    return import('./pages/Auth/Login');
  }
});

const Register = React.lazy(() => {
  try {
    return import('./Pages/Auth/Register').catch(() => import('./pages/Auth/Register'));
  } catch (e) {
    return import('./pages/Auth/Register');
  }
});

const App = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
