# Nomadiq

# Nomadiq – India-focused Travel Platform

Nomadiq is a full-stack travel web app for exploring Indian destinations, planning itineraries, booking stays/meals, multilingual UI and content, AI-powered assistance, safety features, and India-specific payments (UPI via Razorpay).

Sections:
- Project Structure
- Environment Configuration
- Backend Setup
- Frontend Setup
- Demo Data (Seed)
- Deployment Guide
- Local Setup Instructions
- API Documentation (see API.md)
- Important Warnings and Notes

---

## Project Structure

```
nomadiq/
├── backend/
│   ├── config/
│   │   ├── apis.js
│   │   ├── database.js
│   │   └── env.js
│   ├── controllers/
│   │   ├── attractionController.js
│   │   ├── authController.js
│   │   ├── bookingController.js
│   │   ├── chatbotController.js
│   │   ├── destinationController.js
│   │   ├── paymentController.js
│   │   ├── restaurantController.js
│   │   ├── reviewController.js
│   │   └── translationController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── upload.js
│   ├── models/
│   │   ├── Attraction.js
│   │   ├── Booking.js
│   │   ├── Destination.js
│   │   ├── EmergencyContact.js
│   │   ├── Hotel.js
│   │   ├── Restaurant.js
│   │   ├── Review.js
│   │   └── User.js
│   ├── routes/
│   │   ├── attractions.js
│   │   ├── auth.js
│   │   ├── bookings.js
│   │   ├── chatbot.js
│   │   ├── destinations.js
│   │   ├── payments.js
│   │   ├── restaurants.js
│   │   ├── reviews.js
│   │   └── translation.js
│   ├── seeds/
│   │   └── seedData.js
│   ├── utils/
│   │   ├── cloudinary.js
│   │   ├── googleMaps.js
│   │   ├── openai.js
│   │   ├── razorpay.js
│   │   └── translation.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
└── frontend/
    ├── .env.example
    ├── index.html
    ├── package.json
    ├── public/
    │   └── manifest.json
    ├── src/
    │   ├── App.jsx
    │   ├── api/
    │   │   └── axios.js
    │   ├── components/
    │   │   ├── AppBar.jsx
    │   │   ├── Footer.jsx
    │   │   ├── LanguageSwitcher.jsx
    │   │   └── ProtectedRoute.jsx
    │   ├── hooks/
    │   │   └── useAuth.js
    │   ├── i18n/
    │   │   └── index.js
    │   ├── main.jsx
    │   ├── pages/
    │   │   ├── Auth/
    │   │   │   ├── Login.jsx
    │   │   │   └── Register.jsx
    │   │   ├── Chatbot.jsx
    │   │   ├── Dashboard.jsx
    │   │   ├── Explore.jsx
    │   │   ├── Landing.jsx
    │   │   ├── PlaceDetails.jsx
    │   │   ├── Reviews.jsx
    │   │   └── SOS.jsx
    │   ├── store/
    │   │   ├── slices/
    │   │   │   ├── authSlice.js
    │   │   │   ├── bookingSlice.js
    │   │   │   └── destinationSlice.js
    │   │   └── store.js
    │   ├── theme.js
    │   └── utils/
    │       ├── geolocation.js
    │       ├── maps.js
    │       └── razorpay.js
    ├── vite.config.js
    └── vercel.json
```

---

## Environment Configuration

See backend/.env.example and frontend/.env.example for required variables. Do not commit secrets. Use distinct values for development and production.

---

## Backend Setup

- Node.js/Express
- MongoDB (Mongoose)
- JWT authentication
- Multer + Cloudinary for media
- Razorpay for UPI payments (test mode)
- Google Maps for geolocation
- Bhashini/Google Translate integration with fallback
- OpenAI/Gemini for chatbot

Endpoints include:
- /api/auth
- /api/destinations
- /api/hotels
- /api/restaurants
- /api/attractions
- /api/reviews
- /api/bookings
- /api/payments
- /api/chatbot
- /api/translate

---

## Frontend Setup

- React + Vite
- Material-UI
- Redux Toolkit
- i18next (English, Hindi, Tamil, Telugu)
- Axios API layer
- Razorpay Checkout integration
- Google Maps JS API usage
- Safety (SOS) page with geolocation consent

---

## Demo Data (Seed)

The backend seeds script creates:
- 15 destinations
- 25 hotels
- 35 restaurants
- 50 attractions
- Emergency contacts per destination

Run from backend:
- npm run seed

---

## Deployment

- Frontend: Vercel
- Backend: Railway

See DEPLOYMENT.md for step-by-step deployment.

---

## Local Setup

1) Backend
- cd backend
- cp .env.example .env (fill keys)
- npm i
- npm run dev

2) Frontend
- cd frontend
- cp .env.example .env (fill public keys)
- npm i
- npm run dev

---

## API Documentation

See API.md for endpoints, params, and response examples.

---

## Warnings

- API Rate Limits: Handle graceful degradation and exponential backoff.
- Payment Testing: Razorpay test mode only for dev.
- Geolocation Privacy: Always request permission; handle denial.
- Image Upload Size: Validate size < Cloudinary plan limits.
- Translation Accuracy: Provide feedback UI for corrections.
- Offline Maps: Progressive caching; warn about storage usage.
- Regional Content: Provide authentic translations; seed includes samples.
- Emergency Contacts: Regularly verify numbers; admin update endpoint recommended.
- CORS: Ensure correct whitelisting.
- Database Security: Never commit real connection strings or secrets.
