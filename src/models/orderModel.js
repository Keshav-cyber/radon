const mongoose = require('mongoose');
const objectid = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {
    userId:{
        type:objectid,
        ref: "User"
    },
    productId:{
        type:objectid,
        ref: "Product"
    },
    amount:0,
    isFreeAppUser:{
        type:Boolean,
        default:false
    },
    date: Date
    
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema) 



