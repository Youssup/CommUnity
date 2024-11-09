const express = require('express');
const router = express.Router();
const communityController = require('../controllers/communityController');

// Get all communities
router.get('/', communityController.getAllCommunities);

// Add a new community
router.post('/', communityController.createCommunity);

// Delete a community
// router.delete('/', communityController.deleteCommunity);

module.exports = router;