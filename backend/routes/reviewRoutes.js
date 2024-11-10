const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController.js');

// Route to create a new review
router.post('/', reviewController.createReview);

module.exports = router;
