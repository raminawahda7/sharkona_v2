const Company = require('../model/companySchema').Company;
const Client = require('../model/clientSchema').Client;
const auth = require ("./auth")
const event = require('../model/eventSchema').Event

// exports.retrieveOneEvent = async (req,res)=> {
//     try{
//      const event = await Event.findById(req.params.id)
//      res.json(event)
//     }catch(err){
//      res.send('Error' , err)
//     } 
//   }
exports.bookEvent =  ((req,res)=>{
   //const client = 
   res.send(req.token)

})