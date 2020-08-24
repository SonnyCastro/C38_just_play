const mongoose = require('mongoose');
const moment = require('moment');
const eventSchema = new mongoose.Schema(
  {
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
  },
  { timestamp: true },
);

eventSchema.methods.toJSON = function () {
  const event = this;
  const eventObject = event.toObject();
  if (eventObject.time) {
    eventObject.time = moment(eventObject.time).format('LLLL');
  }
  return eventObject;
};

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
