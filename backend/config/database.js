import { Sequelize } from 'sequelize';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Setup __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Determine database path based on environment
let dbPath;

// For Vercel deployment, use in-memory SQLite
if (process.env.VERCEL_ENV) {
  dbPath = ':memory:';
  console.log('Using in-memory SQLite database for Vercel deployment');
} else {
  // For local development or other hosting, use file-based SQLite
  dbPath = process.env.DB_DATABASE || path.resolve(__dirname, '../../database/database.sqlite');
  console.log(`Using file-based SQLite database at: ${dbPath}`);
}

// Create Sequelize instance with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
  logging: process.env.NODE_ENV !== 'production' ? console.log : false
});

// Note: Connection testing is now handled in server.js

export default sequelize; 