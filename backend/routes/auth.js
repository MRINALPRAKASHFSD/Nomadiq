const express = require('express');
const {
  register,
  login,
  getMe,
  updateProfile,
} = require('../controllers/authController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// POST /api/auth/register  – register a new user
router.post('/register', register);

// POST /api/auth/login     – login user
router.post('/login', login);

// GET /api/auth/me         – get current logged-in user
router.get('/me', protect, getMe);

// PUT /api/auth/me         – update profile
router.put('/me', protect, updateProfile);

module.exports = router;