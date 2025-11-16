const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const helmet = require('helmet');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');

dotenv.config();

// ----- MongoDB connection -----
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

// ----- Express app -----
const app = express();

// Security headers
app.use(helmet());

// Gzip compression
app.use(compression());

// Logger
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Body parsers
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS
const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:5173';
app.use(
  cors({
    origin: allowedOrigin,
    credentials: true
  })
);

// Rate limit for /api
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false
});
app.use('/api', apiLimiter);

// Static for uploads (optional)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ----- Routes (add files as you build them) -----
let authRoutes,
  destinationRoutes,
  hotelRoutes,
  restaurantRoutes,
  attractionRoutes,
  reviewRoutes,
  bookingRoutes,
  chatbotRoutes,
  translationRoutes,
  paymentRoutes;

try {
  authRoutes = require('./routes/auth');
  destinationRoutes = require('./routes/destinations');
  hotelRoutes = require('./routes/hotels');
  restaurantRoutes = require('./routes/restaurants');
  attractionRoutes = require('./routes/attractions');
  reviewRoutes = require('./routes/reviews');
  bookingRoutes = require('./routes/bookings');
  chatbotRoutes = require('./routes/chatbot');
  translationRoutes = require('./routes/translation');
  paymentRoutes = require('./routes/payments');
} catch (err) {
  console.warn('One or more route files are missing yet:', err.message);
}

// Mount routes if available
if (authRoutes) app.use('/api/auth', authRoutes);
if (destinationRoutes) app.use('/api/destinations', destinationRoutes);
if (hotelRoutes) app.use('/api/hotels', hotelRoutes);
if (restaurantRoutes) app.use('/api/restaurants', restaurantRoutes);
if (attractionRoutes) app.use('/api/attractions', attractionRoutes);
if (reviewRoutes) app.use('/api/reviews', reviewRoutes);
if (bookingRoutes) app.use('/api/bookings', bookingRoutes);
if (chatbotRoutes) app.use('/api/chatbot', chatbotRoutes);
if (translationRoutes) app.use('/api/translation', translationRoutes);
if (paymentRoutes) app.use('/api/payments', paymentRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    env: process.env.NODE_ENV || 'development',
    time: new Date().toISOString()
  });
});

// Simple global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  const status = err.statusCode || 500;
  res.status(status).json({
    success: false,
    error: err.message || 'Server Error'
  });
});

// ----- Start -----
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Nomadiq API server running on port ${PORT}`);
  });
};

startServer();