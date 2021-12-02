const mongoose = require('mongoose');

const providerMainSchema = new mongoose.Schema(
    {
        org_name: {
            type: String,
            required: false
        },
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
        confirmed: {
            type: Boolean,
            defaultValue: false,
          },
        vacancies: {
            type: Number,
            required: false
        },
        job_profiles: {
            type: String,
            required: false
        },
        total_compensation: {
            type: Number,
            required: false
        },
        session_id:{
            type:String
        }
    }
)

const providerMain = mongoose.model('job_provider_main',providerMainSchema);
module.exports = providerMain;