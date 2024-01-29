const mongoose = require('mongoose');
const Appointment = require('../models/appointmentsModel');
const Patient = require('../models/patientModels');
const Doctors = require('../models/doctorModels');

exports.createAppointment = async (req, res) => {
    try{
        const { doctorName ,totalPatient, patientId } = req.body;

        const patient = await Patient.findById(patientId);
        const doctor = await Doctors.findOne({name: doctorName});

        if(!doctor){
            return res.status(400).json({
                message:'Doctor not found',
            });
        }

        if(!patient){
            return res.status(404).json({
                message:'Patient not Found',
            });
        }

        const appointmentData = {
            doctorName,
            totalPatient,
            patient: patientId,
        };

        const newAppointment = await Appointment.create(appointmentData);

        res.status(201).json({
            success:true,
            message:'Appointment Created',
            data: newAppointment,
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            message:'Internal server error',
        });
    }
}