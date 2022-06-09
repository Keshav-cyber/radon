const PubModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await PubModel.create(publisher)
    res.send({data: publisherCreated})
}

module.exports.createPublisher = createPublisher