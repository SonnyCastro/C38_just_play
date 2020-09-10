require('./db/config');
const express = require('express'),
  path = require('path'),
  openRoutes = require('./routes/open'),
  passport = require('./middleware/authentication/'),
  userRoutes = require('./routes/secure/users'),
  eventRoutes = require('./routes/secure/events'),
  fileUpload = require('express-fileupload'),
  reservation = require('./routes/secure/reservation'),
  morgan = require('morgan'),
  cookieParser = require('cookie-parser');

const app = express();

app.use(morgan('dev'));
//Middleware
app.use(express.json());

// Unauthenticated routes
app.use(openRoutes);

// gives us access to req.cookies
app.use(cookieParser());

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(
  '/api/*',
  passport.authenticate('jwt', {
    session: false,
  }),
);
app.use(eventRoutes);
app.use(userRoutes);
app.use(reservation);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/images',
  }),
);

// Any authentication middleware and related routing would be here.

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
