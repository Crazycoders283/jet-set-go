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
const pagesAuthDir = path.join(pagesDir, 'Auth');
const pagesCommonDir = path.join(pagesDir, 'Common');
const pagesCruiseDir = path.join(pagesCommonDir, 'cruise');
const pagesCruisePagesDir = path.join(pagesCruiseDir, 'pages');
const contextsDir = path.join(resourcesDir, 'contexts');

// Create all necessary directories
for (const dir of [pagesDir, pagesAuthDir, pagesCommonDir, pagesCruiseDir, pagesCruisePagesDir, contextsDir]) {
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

// Special handling for Auth files
const lowerAuthDir = path.join(lowerPagesDir, 'Auth');
if (fs.existsSync(lowerAuthDir)) {
  console.log('📋 Special handling for Auth files...');
  
  // Ensure Auth directory exists
  if (!fs.existsSync(pagesAuthDir)) {
    fs.mkdirSync(pagesAuthDir, { recursive: true });
  }
  
  // Copy Auth files specifically
  try {
    const authFiles = fs.readdirSync(lowerAuthDir);
    
    for (const file of authFiles) {
      const srcPath = path.join(lowerAuthDir, file);
      const destPath = path.join(pagesAuthDir, file);
      
      if (fs.statSync(srcPath).isFile()) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`  ✅ Copied Auth file: ${file}`);
      }
    }
  } catch (err) {
    console.error('Error copying Auth files:', err);
    
    // Create fallback Auth files if copying fails
    console.log('Creating fallback Auth files...');
    
    // Create CustomLogin.jsx
    const loginContent = `import React from 'react';
import { Link } from 'react-router-dom';

const CustomLogin = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Login</h1>
      <p>Please log in to access your account</p>
      <Link to="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#0066B2', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
        Back to Home
      </Link>
    </div>
  );
};

export default CustomLogin;`;
    
    fs.writeFileSync(path.join(pagesAuthDir, 'CustomLogin.jsx'), loginContent);
    console.log('  ✅ Created fallback CustomLogin.jsx');
    
    // Create CustomRegister.jsx
    const registerContent = `import React from 'react';
import { Link } from 'react-router-dom';

const CustomRegister = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Register</h1>
      <p>Create a new account</p>
      <Link to="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#0066B2', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
        Back to Home
      </Link>
    </div>
  );
};

export default CustomRegister;`;
    
    fs.writeFileSync(path.join(pagesAuthDir, 'CustomRegister.jsx'), registerContent);
    console.log('  ✅ Created fallback CustomRegister.jsx');
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