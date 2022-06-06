const UserModel= require("../models/userModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedBook= await UserModel.create(data)
    res.send({msg: savedBook})
}

const getBooksData= async function (req, res) {
    let allBooks= await UserModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg: allBooks})
}
const getBooksInYear = async function (req, res) {
    let Year = req.body.Year
    let allBooks= await UserModel.find({year:{$eq:Year}})
    res.send({msg: allBooks})
}
// const getParticularBooks = async function (req, res) {
//     let data = req.body
//    const {a} = data
//    console.log(a)
//     let allBooks= await UserModel.find()
//     res.send({msg: allBooks})
// }
const getXINRBooks = async function (req, res) {
    
     let allBooks= await UserModel.find({'prices.Indianprice': {$in:[100,200,500]}})
     res.send({msg: allBooks})
 }
const getRandomBooks = async function (req, res) {
    
    let allBooks= await UserModel.find({stockAvailable:true,totalPages:{$gt:500}})
    res.send({msg: allBooks})
}

module.exports.createBook = createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksInYear=getBooksInYear
//module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks =getRandomBooks