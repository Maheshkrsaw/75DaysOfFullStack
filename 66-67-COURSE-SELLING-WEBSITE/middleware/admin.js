const jwt=require("jsonwebtoken");
const {JWT_Admin_SECRET}=require("../config") ;

function adminMiddleware(req,res,next){
    const token = req.headers.token;
    const decoded=jwt.verify(token,JWT_Admin_SECRET);
    if(decoded){
        req.adminId=decoded.id;
        next()
    }else{
        res.status(403).json({
            message:"you are not signed in "
        })
    }
}

module.exports={
    adminMiddleware:adminMiddleware
}