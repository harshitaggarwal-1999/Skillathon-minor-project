
const mongoose = require('mongoose');
const job_provider_profiles = require('./models/job_provider_profiles');

mongoose.connect('mongodb://localhost/Skillathon_job_provider_profiles', { useNewUrlParser: true }).then(() => {
    console.log("Mongo connection open!")
}).catch(err => {
    console.log("Mongo connection error")
    console.log(err)
});

const job_providers_profile = [
    {
    org_name:"Reviance",
    job_profile: "software engineer",
    vacancies: 20,
    profile_compensation: 50000,
    profile_location: "Canada",
    brief_overview_of_profile: "Developing new and exciting softwares",
    req_tenth:1,
    req_twelfth:1,
    req_graduation_degree:"B.Tech",
    req_post_graduation_degree:"MBA",
    gold_required:"None",
    silver_required:"None",
    bronze_required:"None",
    job_profiles: "Frontend developer, software engineer",
    total_compensation:200000
    }
]

job_provider_profiles.insertMany(job_providers_profile).then(res => {
    console.log(res)
    console.log("job provider main data insertion successful")
}).catch(e => {
    console.log(e)
})