const router = require('express').Router(),
  mongoose = require('mongoose'),
  Event = require('../../db/models/event');

// **************************************//
// Create an Event
// **************************************//
router.post('/api/events', async (req, res) => {
  const event = new Event({
    ...req.body,
    eventOwner: req.user._id,
  });
  try {
    await event.save();
    res.status(201).json(event);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

module.exports = router;
