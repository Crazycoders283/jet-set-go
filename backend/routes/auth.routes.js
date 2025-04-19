import express from 'express';
import { register, login, getCurrentUser,updateUserDetails } from '../controllers/auth.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

// Auth routes
router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getCurrentUser);
router.put('/update', protect, updateUserDetails); 

export default router;
