const router = require('express').Router(),
  mongoose = require('mongoose'),
  fs = require('fs'),
  isAdmin = require('../../middleware/authorization/index'),
  Event = require('../../db/models/event'),
<<<<<<< HEAD
  cloudinary = require('cloudinary');
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


=======
  cloudinary = require('cloudinary'),
  multer = require('multer');
storage = multer.memoryStorage();
upload = multer({ dest: 'tmp/events' });
>>>>>>> 5a685b0ebb265c5bc646b88266262631294188e5
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
<<<<<<< HEAD


//Fetch(Grab) an Event by its unique ID

router.get('/api/events/:id', async (req, res) => {
=======
// ***********************************************//
// Get a specific event
// ***********************************************//
router.get('/api/events/:id', async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).send('Not a valid task id');
>>>>>>> 5a685b0ebb265c5bc646b88266262631294188e5
  try {
    const _id = req.params.id;
    if (!mongoose.Events.ObjectId.isValid(_id))
      return res.status(400).json({ error: 'not a valid event id' });
    const event = await Event.findOne({ _id, eventOwner: req.user._id });
    if (!event) return res.sendStatus(404);
<<<<<<< HEAD
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.tostring() });
  }
});

// Get(grab) all Events

=======
    res.json(event);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});
// ***********************************************//
// Get all event
// ***********************************************//
>>>>>>> 5a685b0ebb265c5bc646b88266262631294188e5
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
<<<<<<< HEAD

// Delete an Event

=======
// ***********************************************//
// Delete a events
// ***********************************************//
>>>>>>> 5a685b0ebb265c5bc646b88266262631294188e5
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


// ***********************************************//
// Upload entire event
// ***********************************************//
router.post('/api/events/entire', isAdmin(), async (req, res) => {
  console.log('Req Body', req.body);
  console.log('Req Files', req.files);

  res.send('req.files');
});

module.exports = router;
