const mongoose = require('mongoose');
const investor = require('./models/Investor');

mongoose.connect('mongodb://localhost/Skillathon_investor', { useNewUrlParser: true }).then(() => {
    console.log("Mongo connection open!")
}).catch(err => {
    console.log("Mongo connection error")
    console.log(err)
});

const investors = [
    {
        name: "Alice Jones",
        phoneNo: 9876780897,
        email: "alice_jones@gmail.com",
        password: "alice@123",
        investment_budget: 400,
        expected_return: 10000,
        profit_sharing: true,
        preferred_field_first: 'science and technology',
        preferred_field_second: 'safety',
        preferred_qualification: 'b.tech'
    },
    {
        name: "Jake Cooper",
        phoneNo: 9864380987,
        email: "jcooper@gmail.com",
        password: "password",
        investment_budget: 20000,
        expected_return: 30000,
        profit_sharing: false,
        preferred_field_first: 'arts',
        preferred_field_second: 'education',
        preferred_qualification: 'b.com'
    },
    {
        name: "Lillian Jacob",
        phoneNo: 8876780987,
        email: "jacoblillian@gmail.com",
        password: "jcblil123",
        investment_budget: 100000,
        expected_return: 45000,
        profit_sharing: true,
        preferred_field_first: 'education',
        preferred_field_second: 'science and technology',
        preferred_qualification: 'b.tech'
    },
    {
        name: "Sanya Singh",
        phoneNo: 8876780987,
        email: "singhsanya98@gmail.com",
        password: "sanya98",
        investment_budget: 20000,
        expected_return: 10000,
        profit_sharing: false,
        preferred_field_first: 'social entrepreneurship',
        preferred_field_second: 'safety',
        preferred_qualification: 'b.sc'
    },
    {
        name: "Zain Khan",
        phoneNo: 9876787757,
        email: "zkhan78@gmail.com",
        password: "khan78z!",
        investment_budget: 400000,
        expected_return: 100000,
        profit_sharing: false,
        preferred_field_first: 'arts',
        preferred_field_second: 'safety',
        preferred_qualification: 'b.ba'
    }
]

investor.insertMany(investors).then(res =>{
    console.log(res)
    console.log("Investor data insertion successful")
}).catch(e =>{
    console.log(e)
})