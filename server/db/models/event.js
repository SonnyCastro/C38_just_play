const mongoose = require('mongoose');
const moment = require('moment');
const eventSchema = new mongoose.Schema(
  {
    eventTitle: {
      type: String,
      required: true,
    },
    eventReccommendation: {
      type: String,
      required: true,
    },
    eventLocation: {
      type: String,
      required: true,
    },
    eventTime: {
      type: Date,
      required: true,
    },
    eventType: {
      type: Array,
      required: true,
    },
    eventAttendees: {
      type: Array,
      required: true,
    },
    eventPrice: {
      type: String,
      required: true,
    },
    eventOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    eventRating: {
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
