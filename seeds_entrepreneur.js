const mongoose = require('mongoose');
const entrepreneur = require('./models/entrepreneur');
const investor = require('./models/entrepreneur');

mongoose.connect('mongodb://localhost/Skillathon_entrepreneur', { useNewUrlParser: true }).then(() => {
    console.log("Mongo connection open!")
}).catch(err => {
    console.log("Mongo connection error")
    console.log(err)
});

const entrepreneurs = [
    {
    name: "Nikita Poonia",
    phoneNo: 9865467890,
    email: "npoonia@gmail.com",
    password: "NPoonia!",
    venture_name: "Saakaar",
    team_leader: "Nikita Poonia",
    brief_idea_overview: "Provide basic facilities to all",
    funding_required: 100000,
    category: "social entrepreneurship",
    start_date_of_venture: 1-11-2020,
    current_number_of_employees: 30,
    working_location: "Delhi",
    idea_phase: false,
    current_annual_turnover: 2000,
    job_provider: false
    }
]

entrepreneur.insertMany(entrepreneurs).then(res => {
    console.log(res)
    console.log("Entrepreneur data insertion successful")
}).catch(e => {
    console.log(e)
})