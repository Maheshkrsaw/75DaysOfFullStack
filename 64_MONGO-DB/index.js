const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();
const jwt_SECRET = "Mahesh123";

app.use(express.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://Mahesh:MaheshMahi@cluster0.cjdwieg.mongodb.net/testing"
);

// Signup route
app.post("/signup", async function (req, res) {
  const { email, password, name } = req.body;

  await UserModel.create({
    email: email,
    password: password,
    name: name,
  });

  res.json({
    message: "You are signed up",
  });
});

// Signin route
app.post("/signin", function (req, res) {
  // Signin logic goes here
});

// Add a new todo
app.post("/todo", function (req, res) {
  // Todo creation logic goes here
});

// Get all todos
app.get("/todos", function (req, res) {
  // Fetch todos logic goes here
});

// Start server
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
