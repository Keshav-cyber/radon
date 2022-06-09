const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const PubModel = require("../models/publisherModel")

const createBook = async function (req, res) {
    let data = req.body
    if (!data.author) {
        res.send("authorid is required")
    }
    else if (!data.publisher) {
        res.send("publisherid is required")
    }
    else {

        let authorid = await authorModel.findById(data.author)
        let publisherid = await PubModel.findById(data.publisher)
        if (!authorid && !publisherid) {
            res.send("not present")
        }
        else {
            let createdBook = await bookModel.create(data)
            res.send({ msg: createdBook })
        }
    }

}

const getAllBookDetails = async function (req, res) {

    let books = await bookModel.find().populate('author publisher')

    res.send(books)

}







const updateDetails = async function (req, res) {
    
    let reqBook = await bookModel.find().populate('author publisher').updateMany({'publisher.Name':"Penguin"},{$set:{isHardCover:true}})
    res.send({ data: reqBook })

}

module.exports.createBook = createBook
module.exports.getAllBookDetails = getAllBookDetails
module.exports.updateDetails = updateDetails
