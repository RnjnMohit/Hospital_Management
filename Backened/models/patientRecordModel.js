const mongoose  = require('mongoose');

const patientRecord = new mongoose.Schema({
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient',
        required:true,
    },
    admissionDate:{
        type:Date,
        required:true,
    },
    dischargeDate:{
        type:Date,
    },
    roomNumber:{
        type:String,
    },
    drVisited:{
        type:mongoose.Schema.Types.ObjectId,
    },
    totalAppointments:{
        type:Number,
    },
    status:{
        type:String,
        enum:['Discharged', 'Admitted', 'Pending'],
        default:'Admitted',
    },
})

module.exports  = mongoose.model('PatientRecord', patientRecord);