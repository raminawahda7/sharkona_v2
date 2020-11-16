const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const joi = require("@hapi/joi");
//const { client } = require("../model/projSchema");
const Client = require('../model/projSchema').Client;
//this schema to validate data from the client before saved it in database  
const clientSchema = joi.object({
  name: joi.string().min(6).required(),
  email: joi.string().min(6).required().email(),
  password: joi.string().min(6).required(),
  location: joi.string().required(),
  phoneNumber: joi.string().min(6).required(),
});
const loginSchema = joi.object({
  email: joi.string().min(6).required().email(),
  password: joi.string().min(6).required(),

});
//this signup method for post requeset from client to save data in database 
exports.signup = async (req, res) => {
// this validate methode to check the requirement data
  const { error } = clientSchema.validate(req.body)
  if (error) return res.send(error.details[0].message)
//findOne to check if email exit or not in database
  const isEmailExsist = await Client.findOne({ email: req.body.email })
  if (isEmailExsist) return res.status(400).send("email already exist")
 // to hashPassword to be more secure
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(req.body.password, salt)
//make make new document(client) in mongoDB 
  const client = new Client({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
    location:req.body.location,
    phoneNumber:req.body.phoneNumber
  });

  try {
    //save document(client) in mongoDB
    const savedClient = await client.save();
    res.send(savedClient);
  }
  catch (err) {
    res.status(400).send(err);
  }


}

exports.signin =  async (req, res) => {
  //res.send("sing in page");
  const {error} = loginSchema.validate(req.body);
  if(error) res.send(error.details[0].message);

  const client = await Client.findOne({email:req.body.email});
  console.log(client);
  if( !client) return res.status(400).send("email dose not exist");

  const validPassword = await bcrypt.compare(req.body.password,client.password);
  if( !validPassword) return res.status(400).send("password is wrong");

  const token = jwt.sign({_id:client._id},process.env.TOKEN);
  console.log(token);
  res.header("login",token).send(token);
}