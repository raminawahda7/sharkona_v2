
const express = require('express')
const router = express.Router();
const sign= require('../controller/clientController');


router.post('/signup' ,sign.signup)

module.exports = router;