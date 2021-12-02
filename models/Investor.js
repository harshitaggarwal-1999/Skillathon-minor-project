const mongoose = require('mongoose');

const investorSchema = new mongoose.Schema(
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
        investment_budget: {
            type:Number,
            required:false
        },
        expected_return: {
            type:Number,
            required:false
        },
        profit_sharing:{
            type:Boolean,
            required:false
        },
        preferred_field_first: {
            type: String,
            required: false,
            lowercase: true,
            // enum:['science and technology','arts','social entrepreneurship','women empowerment','education','health sector','safety']
        },
        preferred_field_second: {
            type: String,
            required: false,
            lowercase: true,
            // enum:['science and technology','arts','social entrepreneurship','women empowerment','education','health sector','safety']
        },
        preferred_qualification: {
            type: String,
            required: false,
            lowercase: true,
        },
        session_id:{
            type:String
        }


    }
)

const investor = mongoose.model('investor',investorSchema);
module.exports = investor;