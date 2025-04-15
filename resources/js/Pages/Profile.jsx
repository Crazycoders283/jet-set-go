import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  // Simulate a user object
  const user = {
    name: 'Demo User',
    email: 'user@example.com',
    role: 'Customer',
    joined: 'April 2023'
  };

  return (
    <div style={{ padding: '30px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1>User Profile</h1>
        <Link 
          to="/dashboard"
          style={{ padding: '8px 15px', background: '#0066B2', color: 'white', border: 'none', borderRadius: '4px', textDecoration: 'none' }}
        >
          Back to Dashboard
        </Link>
      </div>
      
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        backgroundColor: '#f9f9f9',
        padding: '30px',
        borderRadius: '8px',
        border: '1px solid #e0e0e0'
      }}>
        <div>
          <h2 style={{ marginBottom: '20px' }}>Account Information</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '15px', maxWidth: '500px' }}>
            <div style={{ fontWeight: 'bold' }}>Name:</div>
            <div>{user.name}</div>
            
            <div style={{ fontWeight: 'bold' }}>Email:</div>
            <div>{user.email}</div>
            
            <div style={{ fontWeight: 'bold' }}>Account Type:</div>
            <div>{user.role}</div>
            
            <div style={{ fontWeight: 'bold' }}>Member Since:</div>
            <div>{user.joined}</div>
          </div>
        </div>
        
        <div style={{ marginTop: '20px' }}>
          <Link 
            to="/profile/edit"
            style={{ 
              padding: '8px 15px', 
              background: '#0066B2', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile; 