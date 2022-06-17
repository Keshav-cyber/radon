const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const {authenticate, authorization} =require("../middleware/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.post("/users/:userId/posts",authenticate,authorization, userController.postMessage)

router.get("/users/:userId",authenticate,authorization ,userController.getUserData)

router.put("/users/:userId",authenticate,authorization, userController.updateUser)

router.delete("/users/:userId",authenticate,authorization, userController.deleteUser)

module.exports = router;