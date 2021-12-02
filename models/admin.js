const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: false
        },
        phoneNo: {
            type: Number,
            required: false
        },
        email: {
            type: String,
            required: false,
            unique: true
        },
        password: {
            type: String,
            required: false
        },
        session_id:{
            type:String
        }


    }
)

const admin = mongoose.model('admin',adminSchema);
module.exports = admin;