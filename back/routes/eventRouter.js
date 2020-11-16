
const express = require('express')
const router = express.Router();
const sign= require('../controller/clientController');


router.post('/signup' ,sign.signup);
router.post('/signin' ,sign.signin);


module.exports = router;