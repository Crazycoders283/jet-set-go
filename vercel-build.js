import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// Get the directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔨 Starting pre-build setup for deployment...');
console.log(`Current working directory: ${process.cwd()}`);

// List directory contents to debug
try {
  console.log('Contents of resources directory:');
  console.log(fs.readdirSync(path.join(__dirname, 'resources')));
  
  console.log('Contents of resources/js directory:');
  console.log(fs.readdirSync(path.join(__dirname, 'resources', 'js')));
} catch (err) {
  console.error('Error listing directories:', err);
}

// Create necessary directories
const resourcesDir = path.join(__dirname, 'resources', 'js');
const pagesDir = path.join(resourcesDir, 'Pages');
const pagesCommonDir = path.join(pagesDir, 'Common');
const pagesCruiseDir = path.join(pagesCommonDir, 'cruise');
const pagesCruisePagesDir = path.join(pagesCruiseDir, 'pages');
const contextsDir = path.join(resourcesDir, 'contexts');

// Create all necessary directories
for (const dir of [pagesDir, pagesCommonDir, pagesCruiseDir, pagesCruisePagesDir, contextsDir]) {
  if (!fs.existsSync(dir)) {
    console.log(`📁 Creating directory: ${dir}`);
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Handle AuthContext.jsx
const authContextPath = path.join(contextsDir, 'AuthContext.jsx');
if (!fs.existsSync(authContextPath)) {
  console.log('📝 Creating AuthContext.jsx...');
  
  const authContextContent = `import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Simple login for development
  const login = async (credentials) => {
    setError(null);
    try {
      // Simulate successful login
      localStorage.setItem('isAuthenticated', 'true');
      setCurrentUser({ name: 'Demo User', email: credentials.email });
      return { success: true };
    } catch (err) {
      setError('Login failed');
      throw err;
    }
  };

  // Simple registration for development
  const register = async (userData) => {
    setError(null);
    try {
      // Simulate successful registration
      localStorage.setItem('isAuthenticated', 'true');
      setCurrentUser({ name: userData.name, email: userData.email });
      return { success: true };
    } catch (err) {
      setError('Registration failed');
      throw err;
    }
  };

  // Simple logout
  const logout = async () => {
    localStorage.removeItem('isAuthenticated');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    loading,
    error,
    register,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};`;

  fs.writeFileSync(authContextPath, authContextContent);
  console.log('✅ Created fallback AuthContext.jsx');
}

// Handle API.js
const apiJsPath = path.join(resourcesDir, 'api.js');
if (!fs.existsSync(apiJsPath)) {
  console.log('📝 Creating api.js...');
  
  const apiJsContent = `import axios from 'axios';

// API URL based on environment
const API_URL = '/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Auth API endpoints - simplified for deployment
export const authAPI = {
  register: (userData) => Promise.resolve({ data: { user: userData, token: 'dummy-token' } }),
  login: (credentials) => Promise.resolve({ data: { user: { email: credentials.email }, token: 'dummy-token' } }),
  getCurrentUser: () => Promise.resolve({ data: null }),
  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  }
};

export default api;`;

  fs.writeFileSync(apiJsPath, apiJsContent);
  console.log('✅ Created fallback api.js');
}

// Copy files from lowercase pages to uppercase Pages
const lowerPagesDir = path.join(resourcesDir, 'pages');
if (fs.existsSync(lowerPagesDir)) {
  console.log('📋 Copying files from pages to Pages...');
  
  const copyDirRecursive = (src, dest) => {
    // Create destination directory if it doesn't exist
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    // Get all files and directories in source
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      
      if (entry.isDirectory()) {
        // Recursively copy subdirectories
        copyDirRecursive(srcPath, destPath);
        console.log(`  📁 Copied directory: ${entry.name}`);
      } else {
        // Copy files
        fs.copyFileSync(srcPath, destPath);
        console.log(`  ✅ Copied file: ${entry.name}`);
      }
    }
  };
  
  // Copy entire directory structure
  copyDirRecursive(lowerPagesDir, pagesDir);
}

// Create pages
console.log('📝 Creating required pages...');

// Create Dashboard.jsx
const dashboardContent = `import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  
  const handleLogout = async () => {
    try {
      await logout();
      // Redirect happens automatically through AuthProvider
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1>Dashboard</h1>
        <div>
          <span style={{ marginRight: '15px' }}>
            {currentUser?.name || currentUser?.email || 'User'}
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
          <Link to="/" style={{ display: 'inline-block', marginTop: '10px', color: '#0066B2', textDecoration: 'none' }}>
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

export default Dashboard;`;

fs.writeFileSync(path.join(pagesDir, 'Dashboard.jsx'), dashboardContent);
console.log('✅ Created Dashboard.jsx');

// Create Homepage.jsx instead of Welcome.jsx
const homepageContent = `import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <div style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '100px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Welcome to JetSet</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 30px' }}>
          Your passport to extraordinary travel experiences. Discover amazing cruise destinations and book your dream vacation.
        </p>
        <div>
          <Link to="/dashboard" style={{ 
            display: 'inline-block', 
            margin: '10px', 
            padding: '12px 30px', 
            background: '#0066B2', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '4px',
            fontWeight: 'bold'
          }}>
            View Dashboard
          </Link>
        </div>
      </div>
      
      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '40px' }}>Popular Destinations</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
          <div>
            <img src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Caribbean" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '10px' }} />
            <h3>Caribbean Cruises</h3>
            <p>Experience crystal clear waters and beautiful beaches</p>
            <Link to="/cruises" style={{ color: '#0066B2', textDecoration: 'none' }}>Explore Caribbean →</Link>
          </div>
          
          <div>
            <img src="https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Mediterranean" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '10px' }} />
            <h3>Mediterranean Adventures</h3>
            <p>Discover ancient history and diverse cultures</p>
            <Link to="/cruises" style={{ color: '#0066B2', textDecoration: 'none' }}>Explore Mediterranean →</Link>
          </div>
          
          <div>
            <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="European Rivers" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '10px' }} />
            <h3>European River Cruises</h3>
            <p>Journey through picturesque waterways and charming towns</p>
            <Link to="/cruises" style={{ color: '#0066B2', textDecoration: 'none' }}>Explore Europe →</Link>
          </div>
        </div>
      </div>
      
      <footer style={{ backgroundColor: '#f5f5f5', padding: '40px 20px', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} JetSet - All rights reserved</p>
        <div style={{ margin: '20px 0' }}>
          <a href="#" style={{ margin: '0 10px', color: '#555' }}>Terms of Service</a>
          <a href="#" style={{ margin: '0 10px', color: '#555' }}>Privacy Policy</a>
          <a href="#" style={{ margin: '0 10px', color: '#555' }}>Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;`;

fs.writeFileSync(path.join(pagesDir, 'Homepage.jsx'), homepageContent);
console.log('✅ Created Homepage.jsx');

// Create Error.jsx
const errorContent = `import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '30px',
      textAlign: 'center',
      backgroundColor: '#f8f9fa'
    }}>
      <h1 style={{ fontSize: '8rem', margin: '0', color: '#0066B2' }}>404</h1>
      <h2 style={{ fontSize: '2rem', margin: '20px 0' }}>Page Not Found</h2>
      <p style={{ maxWidth: '500px', marginBottom: '30px', color: '#666' }}>
        The page you are looking for might have been removed, had its name changed, 
        or is temporarily unavailable.
      </p>
      <Link to="/" style={{ 
        padding: '10px 30px', 
        backgroundColor: '#0066B2', 
        color: 'white',
        textDecoration: 'none',
        borderRadius: '4px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s'
      }}>
        Return Home
      </Link>
    </div>
  );
};

export default Error;`;

fs.writeFileSync(path.join(pagesDir, 'Error.jsx'), errorContent);
console.log('✅ Created Error.jsx');

// Special handling for Auth files
const lowerAuthDir = path.join(lowerPagesDir, 'Auth');
if (fs.existsSync(lowerAuthDir)) {
  console.log('📋 Special handling for Auth files...');
  
  // Copy Auth files specifically
  try {
    const authFiles = fs.readdirSync(lowerAuthDir);
    
    for (const file of authFiles) {
      const srcPath = path.join(lowerAuthDir, file);
      const destPath = path.join(pagesDir, file);
      
      if (fs.statSync(srcPath).isFile()) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`  ✅ Copied Auth file ${file} to Pages directory`);
      }
    }
  } catch (err) {
    console.error('Error copying Auth files:', err);
  }
}

// Special handling for cruise-cards.jsx and Itinerary.jsx
try {
  console.log('📋 Special handling for cruise files...');
  
  // Check for lowercase cruise-cards.jsx
  const lowerCruiseCardsPath = path.join(lowerPagesDir, 'Common', 'cruise', 'pages', 'cruise-cards.jsx');
  const upperCruiseCardsPath = path.join(pagesDir, 'Common', 'cruise', 'pages', 'cruise-cards.jsx');
  
  if (fs.existsSync(lowerCruiseCardsPath)) {
    // Ensure directories exist
    fs.mkdirSync(path.join(pagesDir, 'Common', 'cruise', 'pages'), { recursive: true });
    fs.copyFileSync(lowerCruiseCardsPath, upperCruiseCardsPath);
    console.log('  ✅ Copied cruise-cards.jsx to correct location');
  } else {
    // Create fallback cruise-cards.jsx
    const cruiseCardsContent = `import React from 'react';
import { Link } from 'react-router-dom';

const CruiseCards = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Cruise Cards</h1>
      <p>Available cruise options will appear here.</p>
      <Link to="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#0066B2', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
        Back to Home
      </Link>
    </div>
  );
};

export default CruiseCards;`;
    
    fs.writeFileSync(upperCruiseCardsPath, cruiseCardsContent);
    console.log('  ✅ Created fallback cruise-cards.jsx');
  }
  
  // Check for Itinerary.jsx and handle case sensitivity issues
  const possibleItineraryPaths = [
    path.join(lowerPagesDir, 'Common', 'cruise', 'pages', 'Itinerary.jsx'),
    path.join(lowerPagesDir, 'Common', 'cruise', 'pages', 'itinerary.jsx'),
    path.join(lowerPagesDir, 'Common', 'cruise', 'pages', 'itinerary.tsx')
  ];
  
  const upperItineraryPath = path.join(pagesDir, 'Common', 'cruise', 'pages', 'Itinerary.jsx');
  
  // Find the first existing Itinerary file
  const existingItineraryPath = possibleItineraryPaths.find(p => fs.existsSync(p));
  
  if (existingItineraryPath) {
    fs.copyFileSync(existingItineraryPath, upperItineraryPath);
    console.log(`  ✅ Copied ${path.basename(existingItineraryPath)} to Itinerary.jsx`);
    
    // Remove any conflicting itinerary.tsx if it exists
    const upperItineraryTsxPath = path.join(pagesDir, 'Common', 'cruise', 'pages', 'itinerary.tsx');
    if (fs.existsSync(upperItineraryTsxPath)) {
      fs.unlinkSync(upperItineraryTsxPath);
      console.log('  ✅ Removed conflicting itinerary.tsx');
    }
  } else {
    // Create fallback Itinerary.jsx
    const itineraryContent = `import React from 'react';
import { Link } from 'react-router-dom';

const Itinerary = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Cruise Itinerary</h1>
      <p>Detailed itinerary will appear here.</p>
      <Link to="/cruises" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#0066B2', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
        Back to Cruises
      </Link>
    </div>
  );
};

export default Itinerary;`;
    
    fs.writeFileSync(upperItineraryPath, itineraryContent);
    console.log('  ✅ Created fallback Itinerary.jsx');
  }
} catch (err) {
  console.error('Error handling cruise files:', err);
}

// Update app.jsx to reference the correct path
const appPath = path.join(resourcesDir, 'app.jsx');
if (fs.existsSync(appPath)) {
  console.log('📝 Updating app.jsx imports...');
  
  let appContent = fs.readFileSync(appPath, 'utf8');
  
  // Replace any import from './pages/ to './Pages/
  appContent = appContent.replace(/from\s+['"]\.\/pages\//g, 'from \'./Pages/');
  
  fs.writeFileSync(appPath, appContent);
  console.log('✅ Updated app.jsx imports');
}

console.log('Creating index.html in public directory for hosting...');
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const buildDir = path.join(__dirname, 'public', 'build');
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

const indexContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JetSet App</title>
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/build/main.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(buildDir, 'index.html'), indexContent);
console.log('✅ Created index.html in public/build directory');

// Create images directory to prevent 404 errors
const imagesDir = path.join(buildDir, 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log('✅ Created images directory in public/build');
}

// Create partners directory to prevent 404 errors
const partnersDir = path.join(imagesDir, 'partners');
if (!fs.existsSync(partnersDir)) {
  fs.mkdirSync(partnersDir, { recursive: true });
  console.log('✅ Created partners directory in public/build/images');
}

console.log('🚀 Pre-build setup complete, running Vite build...');

// Run vite build
try {
  execSync('vite build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
} 