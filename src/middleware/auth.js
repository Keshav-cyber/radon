const jwt = require("jsonwebtoken")



const middleware = function(req,res,next){
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken) return res.send({ status: false, msg: "token is invalid" });
    
    next() 
}


module.exports.middleware=middleware