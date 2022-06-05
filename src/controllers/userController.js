const UserModel= require("../models/userModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedBook= await UserModel.create(data)
    res.send({msg: savedBook})
}

const getBooksData= async function (req, res) {
    let allBooks= await UserModel.find()
    res.send({msg: allBooks})
}

module.exports.createBook = createBook
module.exports.getBooksData= getBooksData