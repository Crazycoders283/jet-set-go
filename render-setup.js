import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// Get the directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔨 Starting Render build setup...');
console.log(`Current directory: ${process.cwd()}`);

try {
  // Print out directory listing for debugging
  console.log('\n📁 Contents of current directory:');
  console.log(execSync('ls -la').toString());

  console.log('\n📦 Node.js and npm versions:');
  console.log(execSync('node -v && npm -v').toString());

  // Create Pages directory and subdirectories
  const resourcesDir = path.join(__dirname, 'resources', 'js');
  console.log(`\n🔍 Checking resources directory: ${resourcesDir}`);
  if (fs.existsSync(resourcesDir)) {
    console.log('✅ Resources directory exists');
  } else {
    console.log('❌ Resources directory not found');
    process.exit(1);
  }

  // Log contents
  console.log('\n📁 Contents of resources/js directory:');
  console.log(fs.readdirSync(resourcesDir));

  const pagesDir = path.join(resourcesDir, 'Pages');
  const pagesAuthDir = path.join(pagesDir, 'Auth');

  // Create directories if they don't exist
  if (!fs.existsSync(pagesDir)) {
    console.log('📁 Creating Pages directory...');
    fs.mkdirSync(pagesDir, { recursive: true });
  }

  if (!fs.existsSync(pagesAuthDir)) {
    console.log('📁 Creating Pages/Auth directory...');
    fs.mkdirSync(pagesAuthDir, { recursive: true });
  }

  // Copy files from lowercase pages to uppercase Pages
  const lowerPagesDir = path.join(resourcesDir, 'pages');
  if (fs.existsSync(lowerPagesDir)) {
    console.log('📋 Copying files from pages to Pages...');
    
    console.log('📁 Contents of pages directory:');
    console.log(fs.readdirSync(lowerPagesDir));
    
    // Copy function
    const copyDirRecursively = (src, dest) => {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      
      const entries = fs.readdirSync(src, { withFileTypes: true });
      
      for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        try {
          if (entry.isDirectory()) {
            copyDirRecursively(srcPath, destPath);
            console.log(`📁 Copied directory: ${entry.name}`);
          } else {
            fs.copyFileSync(srcPath, destPath);
            console.log(`✅ Copied file: ${srcPath} to ${destPath}`);
          }
        } catch (err) {
          console.error(`❌ Error copying ${srcPath}: ${err.message}`);
        }
      }
    };
    
    copyDirRecursively(lowerPagesDir, pagesDir);
  } else {
    console.log('⚠️ Lowercase pages directory not found');
  }

  console.log('\n📁 After copying, Contents of Pages directory:');
  if (fs.existsSync(pagesDir)) {
    console.log(fs.readdirSync(pagesDir));
  } else {
    console.log('❌ Pages directory still not found');
  }
  
  // Update app.jsx
  const appPath = path.join(resourcesDir, 'app.jsx');
  if (fs.existsSync(appPath)) {
    console.log('\n📝 Updating app.jsx...');
    let appContent = fs.readFileSync(appPath, 'utf8');
    appContent = appContent.replace(/from\s+['"]\.\/pages\//g, 'from \'./Pages/');
    fs.writeFileSync(appPath, appContent);
    console.log('✅ Updated app.jsx imports');
  } else {
    console.log('❌ app.jsx not found');
  }
  
  console.log('\n🔨 Installing dependencies...');
  // First try to install the required packages directly (most reliable)
  console.log('📦 Explicitly installing vite and plugin-react first...');
  execSync('npm install @vitejs/plugin-react vite --no-save', { stdio: 'inherit' });
  
  // Then install all packages
  console.log('📦 Installing all dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  // Use our simplified Vite config
  console.log('\n🔧 Using simplified vite config...');
  
  console.log('\n🏗️ Building application...');
  execSync('npx vite build --config simple-vite.config.js', { stdio: 'inherit' });
  
  console.log('\n✅ Build completed successfully!');
} catch (error) {
  console.error('\n❌ Build failed:', error);
  process.exit(1);
} 