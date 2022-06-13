
const mid1= async function ( req, res, next) {
    let data2 = req.headers.isfreeappuser
    let myBool = (data2 === 'true');
    if(!data2){
        return res.send("request is missing a mandatory header")
    }
    else{
        req.body.isFreeAppUser = myBool
        next()
    }
    
}

module.exports.mid1= mid1
