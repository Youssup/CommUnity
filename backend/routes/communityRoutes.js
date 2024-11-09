const express = require('express');
const router = express.Router();
const communityController = require('../controllers/communityController');

// Get all communities
router.get('/getAllCommunities', communityController.getAllCommunities);

// Add a new community
router.post('/createCommunity', communityController.createCommunity);

// Delete a community
// router.delete('/', communityController.deleteCommunity);

module.exports = router;