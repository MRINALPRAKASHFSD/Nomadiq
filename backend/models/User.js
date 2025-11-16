const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, select: false }, // select:false so we don’t send password in responses
    googleId: { type: String },
    phone: { type: String },
    profilePicture: { type: String },

    preferredLanguage: {
      type: String,
      enum: ['en', 'hi', 'ta', 'te'],
      default: 'en',
    },

    savedPlaces: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Destination' }],
    savedHotels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' }],
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],

    emergencyContacts: [
      {
        name: String,
        phone: String,
        relationship: String,
      },
    ],

    liveTrackingEnabled: { type: Boolean, default: false },
    trustedContacts: [
      {
        email: String,
        name: String,
      },
    ],

    // optional role for future admin features
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  { timestamps: true }
);

// Hash password before saving if modified
userSchema.pre('save', async function (next) {
  if (!this.isModified('password') || !this.password) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare raw password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  if (!this.password) return false;
  return bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);