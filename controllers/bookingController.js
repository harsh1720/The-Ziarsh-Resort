const bookingService = require('../services/bookingService');

const getAllBookings = (req, res) => {
  const bookings = bookingService.getAllBookings();
  res.status(200).json(bookings);
};

const addBooking = (req, res) => {
  const bookingData = req.body;
  const newBooking = bookingService.addBooking(bookingData);
  res.status(201).json(newBooking);
};

const getBookingById = (req, res) => {
  const booking = bookingService.getBookingById(req.params.id);
  if (booking) {
    res.status(200).json(booking);
  } else {
    res.status(404).json({ message: 'Booking not found' });
  }
};

const updateBooking = (req, res) => {
  const updatedBooking = bookingService.updateBooking(req.params.id, req.body);
  if (updatedBooking) {
    res.status(200).json(updatedBooking);
  } else {
    res.status(404).json({ message: 'Booking not found' });
  }
};

const deleteBooking = (req, res) => {
  const isDeleted = bookingService.deleteBooking(req.params.id);
  if (isDeleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Booking not found' });
  }
};

const cancelBooking = (req, res) => {
  const canceledBooking = bookingService.cancelBooking(req.params.id);
  if (canceledBooking) {
    res.status(200).json(canceledBooking);
  } else {
    res.status(404).json({ message: 'Booking not found' });
  }
};

module.exports = {
  getAllBookings,
  addBooking,
  getBookingById,
  updateBooking,
  deleteBooking,
  cancelBooking,
};
