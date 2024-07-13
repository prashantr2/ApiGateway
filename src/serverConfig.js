require('dotenv').config();

module.exports = {
    FLIGHTS_SERVICE_URL: process.env.FLIGHTS_SERVICE_URL, 
    AUTH_SERVICE_URL: process.env.AUTH_SERVICE_URL, 
    BOOKING_SERVICE_URL: process.env.BOOKING_SERVICE_URL, 
    REMINDER_SERVICE_URL: process.env.REMINDER_SERVICE_URL,
}