require('dotenv').config();
console.log(process.env.mongoUrl);
const express = require("express");
const mongoose=require("mongoose");
const app = express();
const {  userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const {adminRouter}=require("./routes/admin")
app.use(express.json());

//manually routes using impoer export 
// createUserRoute(app);
// courseRoute(app);
//now express routes 
app.use("/user",userRouter);
app.use("/course",courseRouter);
app.use("/admin",adminRouter);

async function main() {
  await mongoose.connect(process.env.mongoUrl);
  app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
})
 }
main();
