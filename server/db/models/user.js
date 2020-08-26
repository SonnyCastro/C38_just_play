const mongoose = require('mongoose'),
  validator = require('validator'),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken'),
  Event = require('./event');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid.');
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error("can't be password.");
        }
        if (value.length < 6) {
          throw new Error('Password must be at least 6 characters long.');
        }
      },
    },
    admin: {
      type: Boolean,
      required: true,
      default: false,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

<<<<<<< HEAD
//connect to events (tie them to eachother)
userSchema.virtual('events', {
  ref: Event,
  localField: '_id',
  foreignField: 'eventOwner',
=======
// Create relation between User and task.
userSchema.virtual('events', {
  ref: Event,
  localField: '_id',
  foreignField: 'owner',
>>>>>>> 5210a32ad9ac03eeea0d1c69f0689cc084706700
});

// By naming this method toJSON we don't need to call it for it to run because of our express res.send methods calls it for us.
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString(), name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: '24h' },
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

// find user by email and password
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Unable to log in.');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Unable to login.');
  return user;
};

// This mongoose middleware will hash our user's passwords whenever a user is created or a user password is updated.
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password'))
    user.password = await bcrypt.hash(user.password, 8);

  next();
});

// Delete user events when a user is removed
userSchema.pre('remove', async function (next) {
  const user = this;
  await Event.deleteMany({
    owner: user._id,
  });
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
