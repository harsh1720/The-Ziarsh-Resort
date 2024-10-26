const fs = require('fs');
const path = require('path');

const bookingsFilePath = path.join(__dirname, '../bookings.json');

const getAllBookings = () => JSON.parse(fs.readFileSync(bookingsFilePath));

const getBookingById = (id) => getAllBookings().find((booking) => booking.id === id);

const addBooking = (newBooking) => {
  const bookings = getAllBookings();
  bookings.push(newBooking);
  fs.writeFileSync(bookingsFilePath, JSON.stringify(bookings, null, 2));
};

const updateBooking = (id, updatedBooking) => {
  const bookings = getAllBookings();
  const index = bookings.findIndex((booking) => booking.id === id);
  if (index !== -1) {
    bookings[index] = updatedBooking;
    fs.writeFileSync(bookingsFilePath, JSON.stringify(bookings, null, 2));
  }
};

const deleteBooking = (id) => {
  const bookings = getAllBookings();
  const newBookings = bookings.filter((booking) => booking.id !== id);
  if (newBookings.length !== bookings.length) {
    fs.writeFileSync(bookingsFilePath, JSON.stringify(newBookings, null, 2));
    return true;
  }
  return false;
};

module.exports = {
  getAllBookings,
  getBookingById,
  addBooking,
  updateBooking,
  deleteBooking,
};
