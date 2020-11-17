
const express = require('express')
const router = express.Router();
const signClient= require('../controller/clientController');
const signCompany= require('../controller/companyController');
const event= require('../controller/eventController');




router.post('/signupClient' ,signClient.signup);
router.post('/signinClient' ,signClient.signin);

router.post('/signupCompany' ,signCompany.signup);
router.post('/signinCompany' ,signCompany.signin);

router.post('/addEvent' ,event.addEvent);


module.exports = router;