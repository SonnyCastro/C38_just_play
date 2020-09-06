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

  if (eventObject.eventTime) {
    eventObject.eventTime = moment(eventObject.eventTime).format('LLLL');
  }
  return eventObject;
};

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
