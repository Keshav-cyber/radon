const bookModel = require("../models/userModel")
const authorModel = require("../models/authorModel")


const createBook = async function (req, res) {
    let data = req.body
    let savedBook = await bookModel.create(data)
    res.send({ msg: savedBook })
}

const createAuthor = async function (req, res) {
    let data = req.body
    let savedBook = await authorModel.create(data)
    res.send({ msg: savedBook })
}
const getChetanBook = async function (req, res) {
    let list = await authorModel.findOne({authorName:"Chetan bagath"})
    let id = list.author_id
    let bookList = await bookModel.find({author_id:id})
    res.send({ msg: bookList })
}
const updatedPrice =async function (req, res) {
     let author = await bookModel.findOneAndUpdate({bookName:"Two states"},{$set:{price:100}},{new:true})
     let id = author.author_id
     let Uprice = author.price
     let authorN = await authorModel.findOne({author_id:id})

     res.send({ msg: [authorN.authorName,Uprice] })
 }
const reqPriceRange =async function (req, res) {
   let priceRangeBooks =await bookModel.find( {price : { $gte: 50, $lte: 100}}  ).select({author_id:1,_id:0})
}
module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.getChetanBook=getChetanBook
module.exports.updatedPrice=updatedPrice
module.exports.reqPriceRange = reqPriceRange