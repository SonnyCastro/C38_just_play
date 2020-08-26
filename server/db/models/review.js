import React from 'react';
import { Mongoose } from 'mongoose';

const reviewSchema = new Mongoose.Schema({
  rating: {
    type: Number,
    required: true,
  },
});

const Review = mongoose.model('Review', reviewSchema);
export default review;
