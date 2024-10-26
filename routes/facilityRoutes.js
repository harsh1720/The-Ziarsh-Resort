const express = require('express');
const facilityController = require('../controllers/facilityController');

const router = express.Router();

router.get('/', facilityController.getAllFacilities); 
// ... (Add routes for other facility operations)

module.exports = router;
