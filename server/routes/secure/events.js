const router = require('express').Router(),
  mongoose = require('mongoose'),
  fs = require('fs'),
  isAdmin = require('../../middleware/authorization/index'),
  Event = require('../../db/models/event'),
  cloudinary = require('cloudinary'),
  multer = require('multer');
storage = multer.memoryStorage();
upload = multer({ dest: 'tmp/events' });
// **************************************//
// Create an Event
// **************************************//
router.post('/api/events', isAdmin, async (req, res) => {
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
const formMiddleWear = upload.fields([
  {
    name: 'image',
    maxCount: 1,
  },
  {
    name: 'textFields',
    maxCount: 6,
  },
]);
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
router.post('/api/events/all', formMiddleWear, async (req, res) => {
  console.log(req.files.image[0]);
  try {
    const response = await cloudinary.uploader.upload(req.files.image[0].path);
    const event = new Event({
      ...req.body,
      image: response.secure_url,
      owner: req.user._id,
    });
    console.log('Post Event', event);
    await event.save();
    res.send(event);
    fs.unlinkSync(req.files.image[0].path, (err) => {
      if (err) throw err;
      // if no error, file has been deleted successfully
      console.log('File deleted!');
    });
  } catch (error) {
    console.log('Error msg', error);
    res.send('Error', error);
    // res.status(400).json({ error: error.toString() });
  }
});
module.exports = router;
