const {Router}=require("express");
const{AdminModel}=require("../db")
const adminRouter=Router();

adminRouter.post("/signup",(req,res)=>{
    res.json({
      message: "admin signup point ",
    });
})
adminRouter.post("/signin",(req,res)=>{
    res.json({
      message: "admin signin point ",
    });
})
adminRouter.put("/",(req,res)=>{
    res.json({
      message: "course point ",
    });
})
adminRouter.get("/bulk",(req,res)=>{
    res.json({
      message: "course bulk - point ",
    });
})

module.exports={
    adminRouter:adminRouter
}