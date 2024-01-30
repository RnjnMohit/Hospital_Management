const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT || 4000;

require('./config/doctorDatabase').connect();
require('./config/patientDatabase').connect();

app.use(express.json());

// Use CORS middleware
app.use(cors());

const user = require('./routes/userRoutes');
const auth = require('./routes/authRoutes');
const appointments = require('./routes/appointmentRoutes');
const patientrecord = require('./routes/patientRecord');
app.use("/hospital", user);
app.use('/user', auth);
app.use('/user/doctor', appointments);
app.use('/hospital/patient', patientrecord);

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})

//ggtg