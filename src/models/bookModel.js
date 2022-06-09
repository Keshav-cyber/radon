const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    bookName: String,
    author: {
        type: ObjectId,
        ref: "KeshavAuthor"
    },
    price: Number,
    ratings: Number,
    publisher: {
        type: ObjectId,
        ref: "KeshavPublisher"
    },
    isHardCover:{
        type:Boolean,
        default:false
    }

}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
