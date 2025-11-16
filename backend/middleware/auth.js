const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Protect routes – require valid JWT
exports.protect = async (req, res, next) => {
  let token;

  // Check Authorization header: "Bearer <token>"
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    [, token] = req.headers.authorization.split(' ');
  }

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: 'Not authorized, token missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: 'Not authorized, user not found' });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error('JWT verification error:', err.message);
    return res
      .status(401)
      .json({ success: false, message: 'Not authorized, token invalid' });
  }
};

// Optional role-based authorization (for future admin-only routes)
exports.authorize = (...roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.role)) {
    return res
      .status(403)
      .json({ success: false, message: 'User role not authorized' });
  }
  next();
};