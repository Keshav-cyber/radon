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
   let data = await bookModel.find( {price : { $gte: 50, $lte: 100}}  ).select({author_id:1,_id:0})
   let result = []
   for(let i = 0;i<data.length;i++){
    let rest = await authorModel.findOne(data[i]).select({authorName:1,_id:0})
      result.push(rest)
   }
   res.send(result)

}
const booksByAuthorID = async function (req, res) {
   let author_id= req.params.authorid
   let bookList = await bookModel.find({author_id:author_id}).select({bookName:1,_id:0})

      res.send(bookList)
}
    
const authorByAge = async function (req, res) {
    
    let authors = await authorModel.find({age:{$gt:50}}).select({authorName:1,age:1,author_id:1,_id:0})
        let arr= []
     for(let i= 0 ;i<authors.length;i++){
         let rating = await bookModel.find()
     }

       res.send(arr)
 }

module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.getChetanBook=getChetanBook
module.exports.updatedPrice=updatedPrice
module.exports.reqPriceRange = reqPriceRange
module.exports.booksByAuthorID = booksByAuthorID
module.exports.authorByAge= authorByAge