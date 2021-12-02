const mongoose = require('mongoose');
const job_provider_main = require('./models/job_provider_main');

mongoose.connect('mongodb://localhost/Skillathon_job_provider_main', { useNewUrlParser: true }).then(() => {
    console.log("Mongo connection open!")
}).catch(err => {
    console.log("Mongo connection error")
    console.log(err)
});

const job_providers_main = [
    {
    org_name:"Reviance",
    name: "Nikita Poonia",
    phoneNo: 9865467890,
    email: "npoonia@gmail.com",
    password: "NPoonia!",
    vacancies: 20,
    job_profiles: "Frontend developer, software engineer",
    total_compensation:200000
    }
]

job_provider_main.insertMany(job_providers_main).then(res => {
    console.log(res)
    console.log("job provider main data insertion successful")
}).catch(e => {
    console.log(e)
})