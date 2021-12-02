const mongoose = require('mongoose');
const seeker = require('./models/seeker');

mongoose.connect('mongodb://localhost/Skillathon_newUser', { useNewUrlParser: true }).then(() => {
    console.log("Mongo connection open!")
}).catch(err => {
    console.log("Mongo connection error")
    console.log(err)
});

const seekers = [
    {
    name: "Aditi Khandelwal",
    phoneNo: 980980990,
    email: "aditii@hotmail.com",
    password: "aditi/!",
    tenth: true,
    tenth_org: "DPS Noida",
    twelfth: true,
    twelfth_org: "DPS Noida",
    graduation_degree: "b.tech",
    graduation_org: "MAIT",
    post_graduation_degree: null,
    post_graduation_org: null,
    gold_badge:"python",
    silver_badge: "java",
    bronze_badge:"c++"
    }
]

seeker.insertMany(seekers).then(res => {
    console.log(res)
    console.log("Seeker data insertion successful")
}).catch(e => {
    console.log(e)
})