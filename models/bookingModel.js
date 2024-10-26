class Booking {
    constructor(id, guestName, roomNumber, checkInDate, checkOutDate, numberOfGuests, status = 'confirmed') {
      this.id = id;
      this.guestName = guestName;
      this.roomName = roomName;
      this.roomNumber = roomNumber;
      this.checkInDate = checkInDate;
      this.checkOutDate = checkOutDate; 
      this.numberOfGuests = numberOfGuests;
      this.status = status;  // New property for booking status
    }
  }
  
  module.exports = Booking;
  