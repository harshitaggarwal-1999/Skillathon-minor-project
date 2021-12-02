const mongoose = require('mongoose');

const entrepreneurSchema = new mongoose.Schema(
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
        confirmed: {
            type: Boolean,
            defaultValue: false,
          },
        venture_name: {
            type:String,
            required:false
        },
        team_leader: {
            type:String,
            required:false
        },
        brief_idea_overview:{
            type:String,
            required:false
        },
        funding_required: {
            type: Number,
            required: false
        },
        category: {
            type: String,
            required: false,
            lowercase: true,
            enum:['science and technology','arts','social entrepreneurship','women empowerment','education','health sector','safety','other']
        },
        start_date_of_venture: {
            type: Date,
            required: false
        },
        current_number_of_employees: {
            type: Number,
            required: false
        },
        working_location:{
            type:String,
            required:false
        },
        idea_phase:{
            type:Boolean,
            required:false
        },
        current_annual_turnover:{
            type:Number,
            required:false
        },
        job_provider:{
            type:Boolean,
            required:false
        },
        session_id:{
            type:String
        }


    }
)

const entrepreneur = mongoose.model('entrepreneur',entrepreneurSchema);
module.exports = entrepreneur;