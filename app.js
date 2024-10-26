const express = require('express');
const bookingRoutes = require('./routes/bookingRoutes');
const facilityRoutes = require('./routes/facilityRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();
app.use(express.json());

app.use('/api/bookings', bookingRoutes);
app.use('/api/facilities', facilityRoutes);
app.use('/api/feedbacks', feedbackRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

