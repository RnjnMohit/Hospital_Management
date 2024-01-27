const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
    password:{
        type:String,
        required:true
    },
    role: {
        type: String,
        required: true,
        enum: ['patient', 'doctor'],
    },
    // Additional fields based on the role
    disease: {
        type: String,  // For patients
    },
    department: {
        type: String,  // For doctors
    }
});

module.exports =  mongoose.model("user", userSchema);

