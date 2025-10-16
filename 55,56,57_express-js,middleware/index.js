// // const express = require('express')
// // const app=express();
// // app.get('/',(req,res)=>{
// //     res.send('🚀 Hello, Express.js is running!');
// // })

// // app.get("/contact",(req,res)=>{
// //     res.send('this is hello from contact route');
// // })

// // app.listen(3000,()=>{
// //      console.log('Server started on http://localhost:3000');
// // })

// // performing push ,get, put , delete action

// // const express=require("express")
// // const app=express();

// // app.use(express.json());

// // // Dummy data (acts like database)
// // let users = [
// //   { id: 1, name: "Mahesh", role: "Developer" },
// //   { id: 2, name: "Ravi", role: "Tester" },
// // ];

// // app.get("/",(req,res)=>{
// //     res.status(200).json (users);
// // })

// // app.post("/",(req,res)=>{
// //   const newusers=req.body;
// //   users.push(newusers);
// //   res.json({message:"scucesfully added ", users})
// // })

// // app.put("/:id",(req,res)=>{
// //   const userid=parseInt(req.params.id);
// //   const updatedata=req.body;

// //   const userindex=users.findIndex((u)=>u.id==userid);

// //   if(userindex !==-1){
// //     users[userindex] = { ...users[userindex], ...updatedata };
// //     res.json({ message: "User updated", user: users[userindex] });
// //   } else {
// //     res.status(404).json({ message: "User not found" });
// //   }
// // });

// // app.listen(3000, () => {
// //   console.log("🚀 Server running on http://localhost:3000");
// // })

// const express = require("express");
// const app = express();


// function isageenoughmiddleware(req,res,next){
//   const age=req.query.age;

//    if (age > 18) {
//    next();
//   } else {
//     res.json({
//       msg:"sorry you are not eligible",
//     })
//   }

// }

// // app.get("/ride1",(req,res)=>{
// //   if(isagenough(req.query.age)){
// //     res.json({
// //       msg:"your ride1 sucessfully 🚀🚀"
// //     })
// //   } else{
// //     res.status(411).json({
// //             msg:"sorry , your ride1 not sucessfully 🚀🚀"

// //     })
// //   }

// // })

// app.get("/ride1", isageenoughmiddleware, (req, res) => {
//   if (isageenoughmiddleware(req.query.age)) {
//     res.json({
//       msg: "Your ride1 was successful 🚀🚀",
//     });

//   }
// });

// app.get("/ride2",isageenoughmiddleware, (req, res) => {
//   if (isageenoughmiddleware(req.query.age)) {
//     res.json({
//       msg: "Your ride2 was successful 🚀🚀",
//     });
  
//   }
// });

// app.listen(3000, () => {
//   console.log("🚀 Server running on http://localhost:3000");
// });







// const express = require('express');
// const app = express();

// // ✅ Middleware to check age
// function checkAge(req, res, next) {
//   const age = parseInt(req.query.age);
//   if (age > 18) {
//     next(); // pass control to next route handler
//   } else {
//     res.status(411).json({ msg: "Sorry, you are not old enough for this ride 🚫" });
//   }
// }
// app.use(checkAge);
// // ✅ Apply middleware on specific routes
// app.get("/ride1", (req, res) => {
//   res.json({ msg: "Your ride1 was successful 🚀🚀" });
// });

// app.get("/ride2", (req, res) => {
//   res.json({ msg: "Your ride2 was successful 🚀🚀" });
// });

// app.listen(3000, () => {
//   console.log("🚀 Server running on http://localhost:3000");
// });





const express = require('express');
const app = express();

const checkAuth = (req, res, next) => {
  const token = req.headers["authorization"];  // read token from header
  if (token === "mysecrettoken") next();       // if correct, allow
  else res.status(403).json({ message: "Access Denied" }); // else block
};

app.get("/dashboard", checkAuth, (req, res) => {
  res.send("Welcome to the dashboard!");
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});