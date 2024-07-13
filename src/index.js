const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit');
const authorizeUser = require('./authorizeUser');
const { FLIGHTS_SERVICE_URL, BOOKING_SERVICE_URL, REMINDER_SERVICE_URL } = require('./serverConfig');

const limiter = rateLimit({
    windowMs: 2*60*1000,   
    max: 500000,
})

const app = express();
app.use(morgan('combined'))
app.use(limiter);

// Flights
app.use('/flightservice', authorizeUser);
app.use('/flightservice', createProxyMiddleware({ target: FLIGHTS_SERVICE_URL, changeOrigin: true }));

// Booking
app.use('/bookingservice', authorizeUser);
app.use('/bookingservice', createProxyMiddleware({ target: BOOKING_SERVICE_URL, changeOrigin: true }));

// Reminder
app.use('/reminderservice', authorizeUser);
app.use('/reminderservice', createProxyMiddleware({ target: REMINDER_SERVICE_URL, changeOrigin: true }));

const PORT = 3004;

app.listen(PORT, () => {
    console.log(`Server up and running on PORT: ${PORT}`);
})