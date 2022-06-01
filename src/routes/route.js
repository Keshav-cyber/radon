const express = require('express');
const externalModule = require('../logger/logger')
const externalutil = require('../util/helper')
const externalValidar = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule.welcome()
     externalutil.printDate()
   externalutil.printMonth()
    externalutil.getBatchInfo()
   externalValidar.trim(" functionup ")
   externalValidar.changeToLowerCase("FUnctionUp")
   externalValidar.changeToUpperCase("functionup")
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason