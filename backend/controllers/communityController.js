const Community = require('../models/communityModel');

// Get all communities
async function getAllCommunities(req, res) {
  try {
    const communities = await Community.getAll();
    res.json(communities);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch communities' });
  }
}

// Create a new community
async function createCommunity(req, res) {
  try {
    const newCommunity = await Community.create(req.body);
    res.status(201).json(newCommunity);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create community' });
  }
}

// delete an existing community
// async function deleteCommunity(req, res) {
//   try {
//     const deletedCommunity = await Community.delete(req.body);
//     res.status(201).json(deletedCommunity);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete community' });
//   }
// }
module.exports = { getAllCommunities, createCommunity, deleteCommunity};