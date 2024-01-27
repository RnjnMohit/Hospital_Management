const userModel = require('../models/userModels');
const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_SECRET;
const bcrypt = require('bcrypt');
const Doctor = require('../models/doctorModels');
const Patient = require('../models/patientModels');

module.exports.createUser = async function createUser(req, res) {
    try {
        // Extract relevant data from request body
        const { name, email, phone, role, password, department, disease } = req.body;
        console.log(role);

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);

        // Create data object for user creation
        const userData = {
            name,
            email,
            phone,
            role,
            password: secPass,
            department, // Assuming department is applicable for doctors only
            disease,
        };

        // Check the role to decide which database to save the user
        if (role === 'patient') {
            const newUser = await Patient.create(userData);
            saveUserAndRespond(newUser, res);
        } else if (role === 'doctor') {
            const newUser = await Doctor.create(userData);
            saveUserAndRespond(newUser, res);
        } else {
            res.status(400).json({
                message: "Invalid role",
            });
        }
    } catch (error) {
        res.status(400).json({
            msg: error.message,
        });
    }
};

// Helper function to respond after saving user data
function saveUserAndRespond(userData, res) {
    if (userData) {
        let uid = userData['_id'];
        let token = jwt.sign({ payload: uid }, JWT_KEY);
        res.cookie('login', token);
        return res.json({
            message: "signUp successful",
            data: userData,
        });
    } else {
        res.json({
            message: "user not created",
        });
    }
}


exports.doctorsList = async (req,res) => {
    try{
        //get data
        const doctors = await Doctor.find();

        //send the list of doctor as a response
        res.status(200).json({
            success:true,
            message:'Doctor list retrives Successfully',
            data: doctors,
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            message:'Internal server error',
        });
    }
}


exports.patientList = async (req,res) => {
    try{
        const patients = await Patient.find();

        res.status(200).json({
            success:true,
            message:'Patient List retrived successfully',
            data: patients,
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            message:'Internal server error',
        });
    }
}