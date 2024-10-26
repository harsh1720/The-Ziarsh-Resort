const facilityRepository = require('../repositories/facilityRepository');
const Facility = require('../models/facilityModel');

const getAllFacilities = () => facilityRepository.getAllFacilities();

// ... (Add services for adding, updating, deleting facilities if needed)

module.exports = {
};
