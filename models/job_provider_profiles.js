const mongoose = require('mongoose');

const providerProfilesSchema = new mongoose.Schema(
    {
        org_name: {
            type: String,
            required: false
        },
        job_profile: {
            type: String,
            required: false
        },
        vacancies: {
            type: Number,
            required: false
        },
        profile_compensation: {
            type: Number,
            required: false
        },
        profile_location: {
            type: String,
            required: false
        },
        brief_overview_of_profile: {
            type: String,
            required: false
        },
        req_tenth: {
            type: Boolean,
            required: false
        },
        req_twelfth: {
            type: Boolean,
            required: false
        },
        req_graduation_degree: {
            type: String,
            required: false
        },
        req_post_graduation_degree: {
            type: String,
            required: false
        },
        gold_required: {
            type: String,
            required: false
        },
        silver_required: {
            type: String,
            required: false
        },
        bronze_required: {
            type: String,
            required: false
        },
        session_id:{
            type:String
        }

    }
)

const providerProfiles = mongoose.model('providerProfiles',providerProfilesSchema);
module.exports = providerProfiles;