const mongoose = require('mongoose');
const clientSchema = require('./eventSchema').Client;
const eventSchema = mongoose.Schema({
    name :{
        type:String,
        required:true,
        min : 6,
        max : 255
    },
    startDate:{
        type:String,
        required:true,
    },
    startTime:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true,
    },
    endTime:{
        type:String,
        required:true
    },
    location:{
        type:String,
    },
    phoneNumber:{
        type : String
    },
    clients :[{
        type : mongoose.Schema.Types.ObjectId ,
         ref:"clientSchema"}]
})

const Event = mongoose.model('event', eventSchema);
module.exports = {Event};
