const mongoose = require('mongoose');
const moment = require('moment');

const eventSchema = new mongoose.Schema(
  {
<<<<<<< HEAD
    eventTitle: { type: String, required: true },
    eventReccommendation: { type: String, required: true },
    eventLocation: { type: String, required: true },
    eventTime: { type: Date, required: true },
    eventType: { type: Array, required: true },
    eventAttendees: { type: Array, required: true },
    eventPrice: { type: String, required: true },
    eventOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    eventRating: { type: Number, max: 5 },
=======
    title: {
      type: String,
      required: true,
    },
    reccommendation: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    time: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
      enum: ['soccer'],
      required: true,
    },
    attendees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    price: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    rating: {
      type: Number,
    },
>>>>>>> 5210a32ad9ac03eeea0d1c69f0689cc084706700
  },
  { timestamp: true },
);

eventSchema.methods.toJSON = function () {
  const event = this;
  const eventObject = event.toObject();
<<<<<<< HEAD
  if (eventObject.eventTime) {
    eventObject.eventTime = moment(eventObject.eventTime).format('llll');
=======
  if (eventObject.time) {
    eventObject.time = moment(eventObject.time).format('LLLL');
>>>>>>> 5210a32ad9ac03eeea0d1c69f0689cc084706700
  }
  return eventObject;
};

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
