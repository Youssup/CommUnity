const Community = require('../models/communityModel.js');

// Create a new review for a community
exports.createReview = async (req, res) => {
    const { communityId, comment, date, rating } = req.body;

    try {
        const community = await Community.findById(communityId);
        if (!community) {
            return res.status(404).json({ message: "Community not found" });
        }
        const newReview = {
            id: community.reviews.length + 1,
            comment,
            date,
            rating,
        };
        community.reviews.push(newReview);
        const updatedCommunity = await community.save();
        res.status(201).json(updatedCommunity);
    } catch (err) {
        console.error("Error creating review:", err);
        res.status(500).json({ message: "Error creating review", error: err });
    }
};
