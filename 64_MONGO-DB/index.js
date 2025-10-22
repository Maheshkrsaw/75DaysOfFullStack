// index.js
const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://Mahesh:MaheshMahi@cluster0.cjdwieg.mongodb.net/testing"
  )
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Signup route
let errorthrown = false;
app.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  try {
    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 5);

    await UserModel.create({
      email,
      password: hashedPassword,
      name,
    });
  } catch (e) {
    res.json({
      message: "user already exists",
    });
    errorthrown = true;
  }
  if (!errorthrown) {
    res.json({ message: "You are signed up" });
  }
});

// Signin route
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(403).json({ message: "User does not exist" });
  }

  const passMatch = await bcrypt.compare(password, user.password);
  if (!passMatch) {
    return res.status(403).json({ message: "Incorrect password" });
  }

  const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET);
  res.json({ token });
});

// Add a new todo
app.post("/todo", auth, async (req, res) => {
  const userId = req.userId;
  res.json({
    userId: userId,
  });
});

// Get all todos
app.get("/todos", auth, async (req, res) => {
  const userId = req.userId;
  res.json({
    userId: userId,
  });
});

// Start server
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
