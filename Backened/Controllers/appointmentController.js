const mongoose = require('mongoose');
const Appointment = require('../models/appointmentsModel');
const Patient = require('../models/patientModels');
const Doctors = require('../models/doctorModels');

exports.createAppointment = async (req, res) => {
    try {
        const { doctorName, totalPatient, patientId } = req.body;

        const patient = await Patient.findById(patientId);
        const doctor = await Doctors.findOne({ name: doctorName });

        if (!doctor) {
            return res.status(400).json({
                message: 'Doctor not found',
            });
        }

        if (!patient) {
            return res.status(404).json({
                message: 'Patient not found',
            });
        }

        const appointmentData = {
            doctorName,
            totalPatient,
            patient: patientId,
            date: new Date(),
        };

        const newAppointment = await Appointment.create(appointmentData);

        // Check if doctor exists and has an 'appointments' array
        if (doctor && doctor.appointments && Array.isArray(doctor.appointments)) {
            doctor.appointments.push(patient);
            await doctor.save();
        } else {
            // Handle the case where the doctor or appointments array is not valid
            console.error('Invalid doctor object or appointments array.');
        }

        res.status(201).json({
            success: true,
            message: 'Appointment Created',
            data: newAppointment,
        });
        console.log(patient.name);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal server error',
        });
    }
};
