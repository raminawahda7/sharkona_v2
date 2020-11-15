const mongoose = require('mongoose');
const { isEmail } = require('validator')
// const { string } = require('prop-types')


const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [35, "Maximum name length is 35 char"]
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters']
    },
    location: String,
    phoneNumber: Number
})
const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        maxlength: [35, "Maximum name length is 35 char"]
    },
    startDate: Number,
    endDate: Number,
    startTime: Number,
    endTime: Number,
    clients: [clientSchema]
})
const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [35, "Maximum name length is 35 char"]
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters']
    },
    location: String,
    phoneNumber: Number,
    events:[eventSchema]
})


const Company = mongoose.model('company', companySchema);
const Event = mongoose.model('event', eventSchema);
const client = mongoose.model('client', clientSchema);


//module.exports = {Event,Company,client};
module.exports = client;