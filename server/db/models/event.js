const mongoose = require('mongoose');
const moment = require('moment');
const eventSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
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
