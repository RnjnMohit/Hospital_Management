const mongoose = require('mongoose');
const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v);
            }
        }
    },
    disease: {
        type: String,
        required: true,
    },
    prescriptions: {
        type: String,
        minlength:1
    },
    role: {
        type: String,
        default: 'patient', // Set a default value if needed
        enum: ['patient'],  // Optional: Specify valid roles
    }
});

module.exports = mongoose.model("Patient", patientSchema);
