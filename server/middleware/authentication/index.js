const passport = require('passport'),
  JwtStrategy = require('passport-jwt').Strategy,
  User = require('../../db/models/user'),
  ExtractJwt = require('passport-jwt').ExtractJwt;

// ******************************
// JWT Strategy
// ******************************
const jwtOptions = {
  jwtFromRequest: (req) => {
    return req.cookies.jwt || ExtractJwt.fromAuthHeaderWithScheme('jwt')(req);
  },
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  'jwt',
  new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    if (Date.now() > jwtPayload.expires) {
      return done(null, false, { message: 'jwt expired' });
    }

    const userData = await User.findById(jwtPayload._id);
    return done(null, userData);
  }),
);

module.exports = passport;
