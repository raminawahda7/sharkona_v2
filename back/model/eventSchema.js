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
        type:Number,
        required:true,
    },
    endDate:{
        type:Number,
        required:true
    },
    location:{
        type:String,

    },phoneNumber:{
        type : String
    },
    Clients :[{
        type : mongoose.Schema.Types.ObjectId ,
         ref:"clientSchema"}]

})


const Event = mongoose.model('event', eventSchema);


module.exports = {Event};
