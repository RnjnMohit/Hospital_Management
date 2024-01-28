const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

require('./config/doctorDatabase').connect();
require('./config/patientDatabase').connect();

app.use(express.json());

const user = require('./routes/userRoutes');
const auth = require('./routes/authRoutes');
app.use("/hospital", user);
app.use('/user', auth);

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})

//ggtg