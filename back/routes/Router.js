
const express = require('express')
const router = express.Router();
const signClient= require('../controller/clientController');
const signCompany= require('../controller/companyController');
const event= require('../controller/eventController');
const auth = require("../controller/auth")




router.post('/signupClient' ,signClient.signup);
router.post('/signinClient' ,signClient.signin);
router.post('/clientlogout' ,signClient.clientlogout);


router.post('/signupCompany' ,signCompany.signup);
router.post('/signinCompany' ,signCompany.signin);
router.post('/companylogout' ,signCompany.companylogout);


router.post('/addEvent' ,event.addEvent);
router.delete('/deleteEvent/:id' ,event.deleteEvent);
router.delete('/delete' , event.delete);
router.get('/retrieveEvent', event.retrieveEvent)
router.get('/retrieveOneEvent/:id', event.retrieveOneEvent)
router.put('/updateEvent/:id', event.updateEvent)




module.exports = router;