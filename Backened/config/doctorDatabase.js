const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => {console.log('Doctor Database Connected Successfully')})
    .catch( (err) => {
        console.log('DB CONNECTION ISSUE');
        console.error(err);
        process.exit(1);
    });
}