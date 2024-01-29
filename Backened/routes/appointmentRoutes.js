const express = require('express');
const router = express.Router();

const { createAppointment } = require('../Controllers/appointmentController');

router.post('/appointments', createAppointment);

module.exports = router;