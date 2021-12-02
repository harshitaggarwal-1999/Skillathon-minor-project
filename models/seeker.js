const mongoose = require('mongoose');

const seekerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: false
        },
        phoneNo: {
            type: String,
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
        tenth: {
            type: Boolean,
            required: false
        },
        tenth_org: {
            type: String,
            required: false
        },
        twelfth: {
            type: Boolean,
            required: false
        },
        twelfth_org: {
            type: String,
            required: false
        },
        graduation: {
            type: Boolean,
            required: false
        },
        graduation_degree: {
            type: String,
            required: false
        },
        graduation_org: {
            type: String,
            required: false
        },
        post_graduation: {
            type: Boolean,
            required: false
        },
        post_graduation_degree: {
            type: String,
            required: false
        },
        post_graduation_org: {
            type: String,
            required: false
        },
        gold_badge: {
            type: String,
            required: false
        },
        silver_badge: {
            type: String,
            required: false
        },
        bronze_badge: {
            type: String,
            required: false
        },
        session_id:{
            type:String
        }

    }
)

const seeker = mongoose.model('seeker',seekerSchema);
module.exports = seeker;
