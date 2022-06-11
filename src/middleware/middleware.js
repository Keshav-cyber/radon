


const middleware = function(req,res,next){
     var current = new Date()
    var dateTime =  current.getDate()+"-"
                    + (current.getMonth()+1)+"-"
                    + current.getFullYear()+" "
                    + current.getHours()+":"
                    + current.getMinutes()+":"
                    + current.getSeconds()+":"

    const url = req.originalUrl
    const ip = req.ip
    console.log(`${dateTime} ${ip} ${url}`)
      

    next()


}

module.exports.middleware = middleware