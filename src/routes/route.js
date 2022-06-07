const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")



router.post("/createBook", UserController.createBook  )

router.post("/createAuthor", UserController.createAuthor)        

router.get("/getChetanBook", UserController.getChetanBook)

router.get("/twoStateAuthor", UserController.updatedPrice)

router.get("/reqPriceRange", UserController.reqPriceRange)
module.exports = router;



    