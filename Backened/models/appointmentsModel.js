const mongoose = require('mongoose');
const appointmentSchema = new mongoose.Schema({
    doctorName:{
        type:String,
        required:true,
    },
    totalPatient:{
        type:Number,
        required:true,
    },
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Patient,'
    },
    date: {
        type:Date,
        required:true,
    },
});

module.exports = mongoose.model('Appointment', appointmentSchema);