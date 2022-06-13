
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")
const orderModel = require("../models/orderModel")

const createOrder = async function (req, res) {
    let userid = req.body.userId
    let productid = req.body.productId

    if (!userid) {
        res.send("enter user id ")
    }
    else if (!productid) {
        res.send("enter product id")
    }
    else {
        let finduser = await userModel.findById(userid)
        let findproduct = await productModel.findById(productid)
        
        if (!finduser || !findproduct) {
            res.send("user and product not in db")

        }
        else {

            let userType = req.headers.isfreeappuser
            if (userType === 'true') {
                let data = req.body
                data.amount = 0
                data.isFreeAppUser = true
                let savedData = await orderModel.create(data)
                res.send({ msg: savedData })
            }
            else {
                let price = findproduct.price
                let balance = finduser.balance
                if(balance>price){
                let updatedBalance = await userModel.updateOne({ _id: userid }, { $inc: { balance: -price } })
                let data = req.body
                data.amount = price
                let savedData = await orderModel.create(data)
                res.send({ msg: savedData })}
                else{
                    res.send("insufisiant balance")
                }
            }
        }
    }
}

module.exports.createOrder = createOrder
