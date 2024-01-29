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
    }
});

module.exports = mongoose.model('Appointment', appointmentSchema);