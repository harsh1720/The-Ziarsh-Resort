const fs = require('fs');
const path = require('path');

const feedbacksFilePath = path.join(__dirname, '../feedbacks.json');

const getAllFeedbacks = () => JSON.parse(fs.readFileSync(feedbacksFilePath));

const getFeedbackById = (id) => getAllFeedbacks().find((feedback) => feedback.id === id);

const addFeedback = (newFeedback) => {
  const feedbacks = getAllFeedbacks();
  feedbacks.push(newFeedback);
  fs.writeFileSync(feedbacksFilePath, JSON.stringify(feedbacks, null, 2));
};

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  addFeedback,
};