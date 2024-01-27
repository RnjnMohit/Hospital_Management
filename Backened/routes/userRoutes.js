const express = require('express')
const router = express.Router();

const { createUser, doctorsList, patientList } = require('../Controllers/userController');

router.post('/signup', createUser);
router.get('/doctorsList', doctorsList);
router.get('/patientsList', patientList)

module.exports = router;