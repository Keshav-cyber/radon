const express = require('express');
const lodash = require('lodash');
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


router.get('/hello', function (req, res) {
    const Months = ['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec']
    console.log(lodash.chunk(Months,3))

    const Num = [1,2,3,4,5,6,7,8,9]

    console.log(lodash.tail(Num))
    res.send('My first ever api!')

})
router.get('/union', function (req, res) {
    const arr1 = [1,2,3,3,4]
    const arr2 = [2,3,4,4,5]
    const arr3 = [3,4,5,4]
    const arr4 = [5,6,7,8]
    const arr5 = [6,6,7,7,9]

    const result = lodash.union(arr1,arr2,arr3,arr4,arr5)
     console.log(result)
     res.send('My first ever api!')
})
router.get('/from-pair', function (req, res) {
    const arrV = [['horror','bhoot'],['action','fury'],['drama','tom'],['comedy','club']]
    
    
    const rest = lodash.fromPairs(arrV)
    console.log(rest)
    
    
    res.send('My first ever api!')})
module.exports = router;
// adding this comment for no reason