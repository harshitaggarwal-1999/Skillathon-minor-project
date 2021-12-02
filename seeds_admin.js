const mongoose = require('mongoose');
const admin = require('./models/admin');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/Skillathon_newUser', { useNewUrlParser: true }).then(() => {
    console.log("Mongo connection open!")
}).catch(err => {
    console.log("Mongo connection error")
    console.log(err)
});


//const hash_pwd =   bcrypt.hash("Ishan",26);

const admins = [
    {
    name: "Ishan",
    phoneNo: 7017837270,
    email: "ishan@gmail.com",
    password: "Ishan26"
    }
]

admin.insertMany(admins).then(res => {
    console.log(res)
    console.log("admin data insertion successful")
}).catch(e => {
    console.log(e)
})