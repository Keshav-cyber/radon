const express = require('express');
const router = express.Router();
 let players =  [
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ],
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ],
    },
]

router.post("/player-api", function(req, res) {
   
    let newPlayer = req.body
    let newPlayerName = req.body.name
    const a = players.find(x=> x.name===newPlayer.name)
    if(a===undefined){players.push(newPlayer)
            res.send(players)
    }
    else if (a!==undefined){
        res.send("player already exist")
        
    }
    
    
})





module.exports = router;