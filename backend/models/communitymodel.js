const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true }
});

const reviewSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  comment: { type: String, required: true },
  date: { type: String, required: true },
  rating: { type: Number, required: true }
});

const eventSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  address: { type: addressSchema, required: true }
});

const communitySchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  address: { type: addressSchema, required: true },
  meetingTime: { type: String, required: true },
  contact: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: [reviewSchema], default: [] },
  events: { type: [eventSchema], default: [] }
});

const Community = mongoose.model('Community', communitySchema, 'communities');

module.exports = Community;
