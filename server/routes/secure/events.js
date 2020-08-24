const router = require('express').Router(),
  mongoose = require('mongoose'),
  IsAdmin = require('../../middleware/authorization/index'),
  Event = require('../../db/models/event');

// **************************************//
// Create an Event
// **************************************//
router.post('/api/events', IsAdmin(), async (req, res) => {
  const event = new Event({
    ...req.body,
    owner: req.user._id,
  });
  try {
    await event.save();
    res.status(201).json(event);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

// ***********************************************//
// Get a specific task
// ***********************************************//
router.get('/api/events/:id', async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).send('Not a valid task id');

  try {
    const event = await Event.findOne({ _id });
    if (!event) return res.sendStatus(404);

    res.json(event);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

// ***********************************************//
// Get all tasks
// ***********************************************//
router.get('/api/events', async (req, res) => {
  const { eventType } = req.query;
  try {
    if (eventType) {
      const events = await Event.find({ eventType });
      return res.json(events);
    }
    const events = await Event.find({});
    return res.json(events);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

//

module.exports = router;
