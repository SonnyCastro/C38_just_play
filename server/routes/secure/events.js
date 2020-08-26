const router = require('express').Router(),
  mongoose = require('mongoose'),
  IsAdmin = require('../../middleware/authorization/index'),
  Event = require('../../db/models/event'),
  cloudinary = require('cloudinary');

// **************************************//
// Create an Event
// **************************************//
router.post('/api/events', async (req, res) => {
  console.log(req.body);
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
// Get a specific event
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
// Get all event
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

// ***********************************************//
// Delete a events
// ***********************************************//
router.delete('/api/events/:id', async (req, res) => {
  try {
    const event = await Event.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!event) throw new Error('Event not found');
    res.json(event);
  } catch (error) {
    res.status(404).json({ error: error.toString() });
  }
});

// ***********************************************//
// Upload event img
// ***********************************************//
router.post('/api/events/img', async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.avatar.tempFilePath,
    );
    req.user.avatar = response.secure_url;
    await req.user.save();
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

module.exports = router;
