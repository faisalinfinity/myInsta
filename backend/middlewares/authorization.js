const jwt = require("jsonwebtoken");
require("dotenv").config();
const authorization = async (req, res, next) => {
  var token = req.headers?.authorization?.split(" ")[1];
  if (!token) return res.send("please pass token in headers");

  try {
    var decoded = jwt.verify(token, process.env.SECRET_KEY);
  } catch (error) {
    res.send(error.message);
  }

  if (!decoded) return res.send("invalid secret_key")
  
  if(req.method=="get" && req.url=="/posts"){
    req.body.requesterId=decoded.userId
    next()
    return
  }else if(req.method=="post" && req.url=="/posts"){
    req.body.userId=decoded.userId
    next()
    return
  }else if(req.method=="post" && req.url=="/postLikes"){
       req.body.likerId=decoded.userId
       next()
       return
  }else if(req.method=="post" && req.url=="/postComments"){
    req.body.commentorId=decoded.userId
    next()
    return
}else {
    req.body.userId=decoded.userId
    next()
}

};

module.exports={
    authorization
}
