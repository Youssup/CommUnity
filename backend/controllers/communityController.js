const Community = require('../models/communityModel.js');
const mongoose = require('mongoose');

// Get all communities
exports.getAllCommunities = async (req, res) => {
  try {
    const communities = await Community.find({});
    res.status(200).json({
      communities
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching communities", error: err });
  }
};

// get community by id
exports.getCommunityById = async (req, res) => {
  try {
    const community = await Community.findOne({ id: req.params.id });
    if (!community) {
      return res.status(404).json({ message: "Community not found" });
    }
    res.status(200).json(community);
  } catch (err) {
    console.log({err})
    res.status(500).json({ message: "Error fetching community", error: err });
  }
};

// Create a new community
exports.createCommunity = async (req, res) => {
  const { id,name, address, meetingTime, contact, description, rating, reviews, events } = req.body;

  const newCommunity = new Community({
    id,
    name,
    address,
    meetingTime,
    contact,
    description,
    rating,
    reviews,
    events
  });

  try {
    const savedCommunity = await newCommunity.save();
    res.status(201).json(savedCommunity);
  } catch (err) {
    res.status(500).json({ message: "Error creating community", error: err });
  }
};
