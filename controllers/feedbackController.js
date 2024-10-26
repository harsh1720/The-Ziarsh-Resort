const feedbackService = require('../services/feedbackService');

const getAllFeedbacks = (req, res) => {
  const feedbacks = feedbackService.getAllFeedbacks();
  res.status(200).json(feedbacks);
};

const addFeedback = (req, res) => {
  const feedbackData = req.body;
  const newFeedback = feedbackService.addFeedback(feedbackData);
  res.status(201).json(newFeedback);
};

module.exports = {
  getAllFeedbacks,
  addFeedback,
};