const express = require('express');

const router = express.Router();

router.get('/sol-1', function (req, res) {
      let arr = [1,2,3,5,6,7]
      let n = arr[arr.length-1]
      let sum = 0 
       arr.forEach(x =>{
          sum+= x;
      })
      let missingNumber = (n*(n+1)/2) - sum

    res.send({data:missingNumber})
});

router.get('/sol-2', function (req, res) {
    let arr = [33,34,35,37,38]
    let n = arr.length +1
    let first = arr[0]
    let last = arr[arr.length-1]
    let sum = 0 
     arr.forEach(x =>{
        sum+= x;
    })
    let missingNumber = (n*(first+last)/2) - sum

  res.send({data:missingNumber})
});

module.exports = router;
// adding this comment for no reason