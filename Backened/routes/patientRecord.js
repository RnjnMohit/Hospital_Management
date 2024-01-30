const express = require('express');
const router = express.Router();

const { createRecords } = require('../Controllers/patientRecordController');

router.post('/patientRecord', createRecords);

module.exports = router;