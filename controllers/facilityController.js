const facilityService = require('../services/facilityService');

const getAllFacilities = (req, res) => {
  const facilities = facilityService.getAllFacilities();
  res.status(200).json(facilities);
};

// ... (Add controllers for adding, updating, deleting facilities if needed)

module.exports = {
  getAllFacilities,
  // ...
};
