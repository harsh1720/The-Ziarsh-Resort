Node.js service to manage hotel bookings, using Express with a local JSON file as a database.

Hotel-booking-service
├── bookings.json        // JSON file to store bookings
├── app.js               // Main application file
├── routes
│   └── bookingRoutes.js // Routes file
├── controllers
│   └── bookingController.js // Controllers file
├── services
│   └── bookingService.js    // Services file
├── repositories
│   └── bookingRepository.js // Repository file
└── models
    └── bookingModel.js      // Model file

Step 1: Initialize Project
First, initialize a new Node.js project and install required dependencies.

Step 2: Create bookings.json
In the project root, create bookings.json, which will hold booking data in a JSON array format.

Step 3: Code Implementation
1. app.js (Main Application File) the entry point for your application.

2. models/bookingModel.js Defines the structure for a booking object.

3. routes/bookingRoutes.js Defines the routes for bookings.
  
4. controllers/bookingController.js Handles requests and responses for bookings.

5. services/bookingService.js Contains business logic for booking operations
   
6. repositories/bookingRepository.js Interacts with the bookings.json file to read and write booking data.
   Add functions to retrieve, update, and delete bookings in bookings.json.

Step 4: Run the Application

Step 5: API Endpoints
GET /api/bookings - Retrieve all bookings.

POST /api/bookings - Add a new booking.
![image](https://github.com/user-attachments/assets/d775e367-a4c3-4f57-9687-eec96c843334)
