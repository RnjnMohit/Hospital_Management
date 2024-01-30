const patientRecord = require('../models/patientRecordModel');
const Appointment = require('../models/appointmentsModel');
const Patient = require('../models/patientModels');
const Doctors = require('../models/doctorModels');

exports.createRecords = async(req,res) => {
    try{
        const {patientId, admissionDate, dischargeDate, roomNumber,  totalAppointments, status} = req.body;

        const patient = await Patient.findById(patientId);
        // const doctor = await Doctors.findById(drVisitedId);

        // if(!doctor){
        //     return res.status(400).json({
        //         message:'Doctor Not Found',
        //     });
        // }

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
        };

        const newRecord = await patientRecord.create(patientRecordData);

        res.status(200).json({
            success:true,
            message:'Patient Record Created',
            date:newRecord,
        });

    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Internal server error',
        });
    }
};