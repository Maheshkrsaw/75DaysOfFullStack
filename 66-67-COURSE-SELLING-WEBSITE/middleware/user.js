const jwt=require("jsonwebtoken");
const {JWT_User_SECRET}=require("../config") ;

function userMiddleware(req,res,next){
    const token = req.headers.token;
    const decoded=jwt.verify(token,JWT_User_SECRET);
    if(decoded){
        req.userId=decoded.id;
        next()
    }else{
        res.status(403).json({
            message:"you are not signed in "
        })
    }
}

module.exports={
    userMiddleware:userMiddleware
}