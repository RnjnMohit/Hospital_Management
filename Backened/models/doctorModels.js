    const mongoose = require('mongoose');
    const doctorSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true,
            trim:true,
        },
        email:{
            type:String,
            required:true,
        },
        phone:{
            type:Number,
            required:true,
            validate:{
                validator: function(v) {
                    return /^\d{10}$/.test(v);
                }
            }
        },
        password:{
            type:String,
            required:true
        },
        department:{
            type:String,
            required:true,
            enum: ['Cardiology', 'Orthopedics', 'Pediatrics', 'Neuro', 'Others'],
        },
        awards:{
            type:String,
        },
        role: {
            type: String,
            default: 'doctor', // Set a default value if needed
            enum: ['doctor'],  // Optional: Specify valid roles
        }
    });

    module.exports = mongoose.model("doctor", doctorSchema);