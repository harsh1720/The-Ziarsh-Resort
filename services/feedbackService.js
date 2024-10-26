const feedbackRepository = require('../repositories/feedbackRepository');
const Feedback = require('../models/feedbackModel');

const getAllFeedbacks = () => feedbackRepository.getAllFeedbacks();

const addFeedback = (feedbackData) => {
  const feedbacks = feedbackRepository.getAllFeedbacks();
  const nextId = feedbacks.length > 0 ? Math.max(...feedbacks.map(f => f.id)) + 1 : 1;

  const newFeedback = new Feedback(
    nextId,
    feedbackData.guestName,
    feedbackData.feedbackText,
    feedbackData.rating
  );
  feedbackRepository.addFeedback(newFeedback);
  return newFeedback;
};

module.exports = {
  getAllFeedbacks,
  addFeedback,
};