const express=require("express");
const app=express();

app.post("/user/signup",(req,res)=>{
    res.json({
        message:"signup-endpoint"
    })
})
app.post("/user/signin",(req,res)=>{
    res.json({
        message:"signin-endpoint"
    })
})
app.get("/user/purchases",(req,res)=>{
    res.json({
        message:"user purcaheses-endpoint"
    })
})
app.post("/course/purchase",(req,res)=>{
    res.json({
        message:"course-purchase-endpoint"
    })
})
app.get("/courses",(req,res)=>{
    res.json({
        message:"courses-endpoint"
    })
})

app.listen(3000,()=>{
   console.log("🚀 Server running on http://localhost:3000");
})