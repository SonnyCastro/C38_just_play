const { Mongoose } = require('mongoose');

const router = require('express').Router(),
  mongoose = require('mongoose'),
  event = require('../../db/models/event');

//Create a new Event (Async try await)

router.post('/api/events', async (req, res) => {
  const {
    eventTitle,
    eventRecommendation,
    eventLocation,
    eventTime,
    eventType,
    eventAttendees,
    eventPrice,
    eventOwner,
    eventRating,
  } = req.body;
  try {
    const event = new Event({
      eventTitle,
      eventRecommendation,
      eventLocation,
      eventTime,
      eventType,
      eventAttendees,
      eventPrice,
      eventOwner: req.user._id,
      eventRating,
    });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.tostring() });
  }
});

//Fetch(Grab) an Event by its unique ID

router.get('/api/events/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    if (!mongoose.Events.ObjectId.isValid(_id))
      return res.status(400).json({ error: 'not a valid event id' });
    const event = await Event.findOne({ _id, eventOwner: req.user._id });
    if (!event) return res.sendStatus(404);
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.tostring() });
  }
});

// Get(grab) all Events

router.get('/api/events', async (req, res) => {
  try {
    const match = {},
      sort = {};
    if (req.query.completed) {
      match.completed = req.query.completed === 'true';
    }

    if (req.query.completed) {
      const parts = req.query.sortby.split(':');
      sort[parts[0]] = parts === 'desc' ? -1 : 1;
    }
    await req.user
      .populate({
        path: 'events',
        match,
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort,
        },
      })
      .execPopulate();
    res.json(req.user.events);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

// Delete an Event

router.delete('/api/events/:id', async (req, res) => {
  try {
    const event = await Event.findOneAndDelete({
      _id: req.params.id,
      eventOwner: req.user._id,
    });
    if (!event) throw new Error('event not found');
    res.json(task);
  } catch (error) {
    res.status(404).json({ error: error.toString() });
  }
});

// Update(patch) an Event.

router.patch('/api/tasks/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    eventTitle,
    eventRecommendation,
    eventLocation,
    eventTime,
    eventType,
    eventPrice,
  ];
  const isValidOperation = updates.every.apply((update) =>
    allowedUpdates.includes(update),
  );
  if (!isValidOperation)
    return res.status(400).send({ error: 'Invalid updates' });
  try {
    const event = await Event.findOne({
      _id: req.params.id,
      eventOwner: req.user._id,
    });
    if (!event) return res.status(404).json({ error: 'Event not found' });
    updates.forEach((update) => (event[update] = req.body[update]));
    await event.save();
    res.json(event);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

module.exports = router;
