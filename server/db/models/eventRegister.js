const mongoose = require('mongoose'),
  validator = require('validator');

const eventReservation = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid.');
        }
      },
    },
    price: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamp: true },
);

const Reservation = mongoose.model('Reservation', eventReservation);

module.exports = Reservation;
