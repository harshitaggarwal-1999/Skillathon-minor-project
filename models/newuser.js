const mongoose = require('mongoose');

const newUserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        phoneNo: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        confirmed: {
            type: Boolean,
            defaultValue: false,
          },
        category: {
            type: String,
            required: true,
            lowercase: true,
            enum: ['investor', 'entrepreneur','job-seeker', 'job-provider']
        }


    }
)

const newUser = mongoose.model('newUser',newUserSchema);
module.exports = newUser;