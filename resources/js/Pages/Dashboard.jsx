import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Simulate a user object
  const user = {
    name: 'Demo User',
    email: 'user@example.com'
  };
  
  const handleLogout = () => {
    // Simple logout logic without AuthContext
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/';
  };

  return (
    <div style={{ padding: '30px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1>Dashboard</h1>
        <div>
          <span style={{ marginRight: '15px' }}>
            {user.name || user.email || 'User'}
          </span>
          <button 
            onClick={handleLogout}
            style={{ padding: '8px 15px', background: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Log Out
          </button>
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px', backgroundColor: '#f9f9f9' }}>
          <h2>My Bookings</h2>
          <p>View and manage your current bookings</p>
          <Link to="/cruises" style={{ display: 'inline-block', marginTop: '10px', color: '#0066B2', textDecoration: 'none' }}>
            Browse Cruises →
          </Link>
        </div>
        
        <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px', backgroundColor: '#f9f9f9' }}>
          <h2>Account Settings</h2>
          <p>Update your profile and preferences</p>
          <Link to="/profile" style={{ display: 'inline-block', marginTop: '10px', color: '#0066B2', textDecoration: 'none' }}>
            Manage Account →
          </Link>
        </div>
        
        <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px', backgroundColor: '#f9f9f9' }}>
          <h2>Saved Itineraries</h2>
          <p>View your saved travel plans</p>
          <Link to="/itinerary" style={{ display: 'inline-block', marginTop: '10px', color: '#0066B2', textDecoration: 'none' }}>
            View Itinerary →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
