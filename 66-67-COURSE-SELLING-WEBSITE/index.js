require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/users");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

async function main() {
  await mongoose.connect(process.env.mongoUrl);
  app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
}
main();
