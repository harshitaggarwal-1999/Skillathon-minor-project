const mongoose = require('mongoose');
const newUser = require('./models/newuser');

mongoose.connect('mongodb://localhost/Skillathon_newUser', { useNewUrlParser: true }).then(() => {
    console.log("Mongo connection open!")
}).catch(err => {
    console.log("Mongo connection error")
    console.log(err)
});

const u = new newUser({
    name: "Ted Mosby",
    phoneNo: 9876780987,
    email: "tedmosby@gmail.com",
    password: "ted@123",
    category: "investor"
})

u.save().then(u => {
    console.log(u),
    console.log("Data insertion successful!")
}).catch(e => {
    console.log(e)
})

const seedUsers = [
    {
        name: "Julie Andrews",
        phoneNo: 9876780787,
        email: "juliea@gmail.com",
        password: "juliexyzz",
        category: "job-seeker"
    },
    {
        name: "Darth Vader",
        phoneNo: 9876750987,
        email: "darthv@gmail.com",
        password: "d@123",
        category: "job-provider"
    },
    {
        name: "Harry Potter",
        phoneNo: 9836780987,
        email: "harryptr@gmail.com",
        password: "potter@317",
        category: "investor"
    },
    {
        name: "Ted Mosby",
        phoneNo: 9876780987,
        email: "tedmosby1@gmail.com",
        password: "ted@123",
        category: "entrepreneur"
    },
    {
        name: "Clark Kent",
        phoneNo: 9876780987,
        email: "clarkkent@gmail.com",
        password: "superman",
        category: "job-seeker"
    }

]

newUser.insertMany(seedUsers).then(res =>{
    console.log(res)
    console.log("Data insertion successful")
}).catch(e =>{
    console.log(e)
})