require('./db/config');
const express = require('express'),
  path = require('path'),
  openRoutes = require('./routes/open'),
  passport = require('./middleware/authentication/'),
  userRoutes = require('./routes/secure/users'),
  cookieParser = require('cookie-parser');

const app = express();

//Middleware
app.use(express.json());

// Unauthenticated routes
app.use(openRoutes);

// gives us access to resp.cookies
app.use(cookieParser());

app.use(
  passport.authenticate('jwt', {
    session: false,
  }),
);

app.use(userRoutes);

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
