const express = require('express');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.get('/', bookingController.getAllBookings);
router.post('/', bookingController.addBooking);
router.get('/:id', bookingController.getBookingById);       // New route to get booking by ID
router.put('/:id', bookingController.updateBooking);        // New route to update booking
router.delete('/:id', bookingController.deleteBooking);     // New route to delete booking
router.patch('/:id/cancel', bookingController.cancelBooking); // New route to cancel booking

module.exports = router;
