const patientRecord = require('../models/patientRecordModel');
const Appointment = require('../models/appointmentsModel');
const Patient = require('../models/patientModels');
const Doctors = require('../models/doctorModels');
const { prettyDOM } = require('@testing-library/react');

exports.createRecords = async(req,res) => {
    try{
        const {patientId, admissionDate, dischargeDate, roomNumber,  totalAppointments, status, drVisited} = req.body;

        const patient = await Patient.findById(patientId);
        const doctor = await Doctors.findById(drVisited);
        const pRecord = await patientRecord.findOne({patient: patientId});

        if(pRecord){
            return res.status(404).json({
                message:'Patient Record Already Exist',
                data:pRecord.status,
            });
        }

        if(!doctor){
            return res.status(400).json({
                message:'Doctor Not Found',
            });
        }

        if(!patient){
            return res.status(404).json({
                message:'Patient Not found',
            });
        }

        const patientRecordData = {
            patient: patientId,
            admissionDate: new Date(),
            dischargeDate: new Date(),
            roomNumber,
            totalAppointments,
            status,
            drVisited
        };

        const newRecord = await patientRecord.create(patientRecordData);

        res.status(200).json({
            success:true,
            message:`Patient Record Created of ${patient.name}`,
            date:newRecord,
        });
        console.log(patient.name);

    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Internal server error',
        });
    }
};