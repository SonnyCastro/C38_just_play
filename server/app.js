require('./db/config');
const express = require('express'),
  path = require('path'),
  openRoutes = require('./routes/open'),
  passport = require('./middleware/authentication/'),
  userRoutes = require('./routes/secure/users'),
<<<<<<< HEAD
  eventRoutes = require('./routes/secure/events');
const fileUpload = require('express-fileupload');
cookieParser = require('cookie-parser');
=======
  eventRoutes = require('./routes/secure/events'),
  fileUpload = require('express-fileupload'),
  reservation = require('./routes/secure/reservation'),
  cookieParser = require('cookie-parser');
>>>>>>> 5a685b0ebb265c5bc646b88266262631294188e5

const app = express();

//Middleware
app.use(express.json());
app.use(openRoutes);

// Unauthenticated routes
app.use(openRoutes);

// gives us access to req.cookies
app.use(cookieParser());

app.use(
  passport.authenticate('jwt', {
    session: false,
  }),
);
<<<<<<< HEAD

// This middleware gives us access to the req.files object
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/images',
  }),
);

app.use(userRoutes);
=======
>>>>>>> 5a685b0ebb265c5bc646b88266262631294188e5
app.use(eventRoutes);
app.use(userRoutes);
app.use(reservation);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/images',
  }),
);

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Any authentication middleware and related routing would be here.

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
