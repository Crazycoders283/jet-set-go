import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
// import authMiddleware from '../middleware/auth.middleware';  // Authentication middleware

// Environment variable for JWT secret (should be in .env file)
const JWT_SECRET = process.env.JWT_SECRET || 'jetset-app-secret-key';
const JWT_EXPIRE = process.env.JWT_EXPIRE || '30d';

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRE
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      password
    });

    if (user) {
      res.status(201).json({
        success: true,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        },
        token: generateToken(user.id)
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Login user & get token
// @route   POST /api/auth/login
// @access  Public
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find user by email
//     const user = await User.findOne({ where: { email } });

//     // Check if user exists and password matches
//     if (user && (await user.matchPassword(password))) {
//       res.json({
//         success: true,
//         user: {
//           id: user.id,
//           name: user.name,
//           email: user.email,
//           role: user.role
//         },
//         token: generateToken(user.id)
//       });
//     } else {
//       res.status(401).json({ message: 'Invalid email or password' });
//     }
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };


export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate JWT Token
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  // Send token in the response
  res.json({ token });
};

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password'] }
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      id: user.id,
      email: user.email,
      role: user.role,
      first_name:user.first_name,
      last_name:user.last_name,
      profile_picture: user.profile_picture,
      gender:user.gender,
      date_of_birth:user.date_of_birth,
      mobile_number:user.mobile_number
    });
  } catch (error) {
    console.error('Get current user error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateUserDetails = async (req, res) => {
  try {
    const userId = req.user.id; // Get user ID from the protected request
    const { first_name, last_name, email, mobile_number, date_of_birth, gender, profile_picture } = req.body;

    if (!first_name || !last_name || !email) {
      return res.status(400).json({ message: 'First name, last name, and email are required.' });
    }

    // Find the user by primary key (ID)
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Update the user's details
    user.first_name = first_name || user.first_name;
    user.last_name = last_name || user.last_name;
    user.email = email || user.email;
    user.mobile_number = mobile_number || user.mobile_number;
    user.date_of_birth = date_of_birth || user.date_of_birth;
    user.gender = gender || user.gender;
    user.profile_picture = profile_picture || user.profile_picture;

    // Save the updated user
    await user.save();

    // Return updated user details as response
    res.status(200).json(user);
  } catch (error) {
    console.error('Error updating user details:', error);
    res.status(500).json({ message: 'An error occurred while updating the profile.' });
  }
};
