const mongoose = require('mongoose');
//const { isEmail } = require('validator')
// const { string } = require('prop-types')


// const clientSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
        
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         lowercase: true
//         //validate: [isEmail, 'Please enter a valid email']
//     },
//     password: {
//         type: String,
//         required: true
        
//     },
//     location: String,
//     phoneNumber: Number
// })
const clientSchema = mongoose.Schema({

    name :{
        type:String,
        required:true,
        min : 6,
        max : 255
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        min : 6,
        max : 255
    },
    location:{
        type:String,
        

    },phoneNumber:{
        type : String
    }

})

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 35
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
        maxlength: 35
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        //validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    location: String,
    phoneNumber: Number,
    events:[eventSchema]
})


const Company = mongoose.model('company', companySchema);
const Event = mongoose.model('event', eventSchema);
const Client = mongoose.model('client', clientSchema);


module.exports = {Event,Company,Client};
//module.exports = client;