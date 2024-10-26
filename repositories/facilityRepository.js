const fs = require('fs');
const path = require('path');

const facilitiesFilePath = path.join(__dirname, '../facilities.json');

const getAllFacilities = () => JSON.parse(fs.readFileSync(facilitiesFilePath));

const getFacilityById = (id) => getAllFacilities().find((facility) => facility.id === id);

module.exports = {
  getAllFacilities,
  getFacilityById,
};