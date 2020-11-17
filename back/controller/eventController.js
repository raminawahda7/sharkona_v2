

const Event = require('../model/eventSchema').Event;

//this signup method for post requeset from client to save data in database 
exports.addEvent = async (req, res) => {

  //make make new event in mongoDB 
  const event = new Event({
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    location: req.body.location,
    phoneNumber: req.body.phoneNumber
  });


  try {
    //save event in mongoDB
    const savedEvent = await event.save();

    res.send({ savedEvent });

  }
  catch (err) {
    res.status(400).send(err);
  }


}
exports.addEvent = async (req, res) => {

}