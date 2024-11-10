const express = require('express');
const router = express.Router();
const communityController = require('../controllers/communityController.js');

// Route to get all communities
router.get('/', communityController.getAllCommunities);

// Route to get a community by ID
router.get('/:id', communityController.getCommunityById);

// Route to create a new community
router.post('/', communityController.createCommunity);

module.exports = router;
