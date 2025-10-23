const express = require("express");
const mongoose=require("mongoose");
const app = express();
const {  userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const {adminRouter}=require("./routes/admin")
//manually routes using impoer export 
// createUserRoute(app);
// courseRoute(app);
//now express routes 
app.use("/user",userRouter);
app.use("/course",courseRouter);
app.use("/admin",adminRouter);

async function main() {
  await mongoose.connect("mongodb+srv://Mahesh:MaheshMahi@cluster0.cjdwieg.mongodb.net/Course-Selling-db");
  app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
})
}
main();