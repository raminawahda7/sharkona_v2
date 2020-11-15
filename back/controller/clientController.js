const Client = require('../model/projSchema').client;
exports.signup = (req , res)=>{
    //res.send("this is Home israa ");
    // Client.findOne({email:req.body.email})
    // .exec((error, client) => {
    //     if (client) return res.status(400).json({
    //       message: 'client Already registered'
    //     });
    // })
    const {
        name,
        email,
        password,
        location,
        phoneNumber
      } = req.body;
      const _client = new Client({
        name,
        email,
        password,
        location,
        phoneNumber
      });
      _client.save((error, data) => {
          console.log(_client)
        if (error) {
          //400 for bad request
          return res.status(400).json({
            message: 'somthing went wrong'
          })
        }
        if (data) {
          //201 request success
          return res.status(201).json({
            message: 'client created succesfully'
          })
        }
      })
}
