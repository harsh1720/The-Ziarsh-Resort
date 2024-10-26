const bookingRepository = require('../repositories/bookingRepository');
const Booking = require('../models/bookingModel');

const getAllBookings = () => bookingRepository.getAllBookings();

const addBooking = (bookingData) => {
  const bookings = bookingRepository.getAllBookings();
  const nextId = bookings.length > 0 ? Math.max(...bookings.map(b => b.id)) + 1 : 1;

  const newBooking = new Booking(
    nextId, // Assign the next ID
    bookingData.guestName,
    bookingData.roomNumber,
    bookingData.checkInDate,
    bookingData.checkOutDate,
    bookingData.numberOfGuests,
  );
  bookingRepository.addBooking(newBooking);
  return newBooking;
};

const getBookingById = (id) => bookingRepository.getBookingById(id);

const updateBooking = (id, bookingData) => {
  const booking = bookingRepository.getBookingById(id);
  if (booking) {
    booking.guestName = bookingData.guestName || booking.guestName;
    booking.roomNumber = bookingData.roomNumber || booking.roomNumber;
    booking.checkInDate = bookingData.checkInDate || booking.checkInDate;
    booking.checkOutDate = bookingData.checkOutDate || booking.checkOutDate;
    booking.numberOfGuests = bookingData.numberOfGuests || booking.numberOfGuests;
    bookingRepository.updateBooking(id, booking);
    return booking;
  }
  return null;
};

const deleteBooking = (id) => bookingRepository.deleteBooking(id);

// Delete booking by room number
const deleteBookingByRoomNumber = (roomNumber) => {
  const bookings = bookingRepository.getAllBookings();
  const updatedBookings = bookings.filter(
    (booking) => booking.roomNumber !== roomNumber
  );
  if (updatedBookings.length !== bookings.length) {
    // Update the bookings file with the filtered bookings
    bookingRepository.updateBookings(updatedBookings);
    return true;
  }
  return false;
};

// Delete booking by customer name
const deleteBookingByguestName = (cguestName) => {
  const bookings = bookingRepository.getAllBookings();
  const updatedBookings = bookings.filter(
    (booking) => booking.guestName!== guestName
  );
  if (updatedBookings.length !== bookings.length) {
    // Update the bookings file with the filtered bookings
    bookingRepository.updateBookings(updatedBookings);
    return true;
  }
  return false;
};

const cancelBooking = (id) => {
  const booking = bookingRepository.getBookingById(id);
  if (booking) {
    booking.status = 'canceled';
    bookingRepository.updateBooking(id, booking);
    return booking;
  }
  return null;
};


module.exports = {
  getAllBookings,
  addBooking,
  getBookingById,
  updateBooking,
  deleteBooking,
  deleteBookingByRoomNumber, // Add this line
  deleteBookingByguestName, // Add this line
  cancelBooking,
};
