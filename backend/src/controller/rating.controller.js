const ratingService = require("../services/rating.service.js");

const createRating = async (req, res) => {
  const user = req.user;
  try {
    const rating = await ratingService.createRating(req.body, user);
    return res.status(201).send(rating);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllRatings = async (req, res) => {
  const productId = req.params.productId;
  const user = req.user;
  try {
    const reviews = await ratingService.getAllRatings(productId);
    return res.status(201).send(reviews);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createRating,
  getAllRatings,
};
