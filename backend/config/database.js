import { Sequelize } from 'sequelize';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Setup __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the database path relative to project root
const dbPath = path.resolve(__dirname, '../../database/database.sqlite');

// Create Sequelize instance with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DB_DATABASE || dbPath,
  logging: process.env.NODE_ENV !== 'production' ? console.log : false
});

// Note: Connection testing is now handled in server.js

export default sequelize; 