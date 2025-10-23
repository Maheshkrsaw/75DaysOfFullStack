const express = require("express");
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

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
