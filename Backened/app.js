const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

require('./config/doctorDatabase').connect();
require('./config/patientDatabase').connect();

app.use(express.json());

// const doctor = require('./routes/doctorRoutes');
// const patients = require('./routes/patientRoutes');
const user = require('./routes/userRoutes');
// app.use("/hospital", doctor);
// app.use("/hospital", patients);
app.use("/hospital", user);

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})

//ggtg