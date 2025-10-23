const {Router}=require("express");

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
adminRouter.post("/course",(req,res)=>{
    res.json({
      message: "course point ",
    });
})
adminRouter.post("/course/bulk",(req,res)=>{
    res.json({
      message: "course bulk - point ",
    });
})

module.exports={
    adminRouter:adminRouter
}