import fs from 'fs';
import path from 'path';

// Create Pages directory if it doesn't exist
const pagesDir = path.resolve('./resources/js/Pages');
const pagesAuthDir = path.resolve('./resources/js/Pages/Auth');

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
  console.log('Created Pages directory');
}

if (!fs.existsSync(pagesAuthDir)) {
  fs.mkdirSync(pagesAuthDir, { recursive: true });
  console.log('Created Pages/Auth directory');
}

// Copy files from pages to Pages
const sourcePagesDir = path.resolve('./resources/js/pages');
if (fs.existsSync(sourcePagesDir)) {
  // Copy main page files
  fs.readdirSync(sourcePagesDir).forEach(file => {
    const sourceFile = path.join(sourcePagesDir, file);
    
    // Skip directories except 'Auth'
    if (fs.statSync(sourceFile).isDirectory() && file !== 'Auth') {
      return;
    }
    
    // Skip the Auth directory itself
    if (file === 'Auth') {
      return;
    }
    
    const targetFile = path.join(pagesDir, file);
    
    if (fs.statSync(sourceFile).isFile()) {
      fs.copyFileSync(sourceFile, targetFile);
      console.log(`Copied ${file} to Pages/`);
    }
  });
  
  // Copy Auth directory files
  const sourceAuthDir = path.join(sourcePagesDir, 'Auth');
  if (fs.existsSync(sourceAuthDir)) {
    fs.readdirSync(sourceAuthDir).forEach(file => {
      const sourceFile = path.join(sourceAuthDir, file);
      const targetFile = path.join(pagesAuthDir, file);
      
      if (fs.statSync(sourceFile).isFile()) {
        fs.copyFileSync(sourceFile, targetFile);
        console.log(`Copied Auth/${file} to Pages/Auth/`);
      }
    });
  }
}

console.log('Import path fixing completed'); 