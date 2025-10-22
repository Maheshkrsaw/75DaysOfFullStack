// index.js
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect to MongoDB "testing" database
mongoose.connect(
  "mongodb+srv://Mahesh:MaheshMahi@cluster0.cjdwieg.mongodb.net/testing"
)
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// Define User schema and model
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String
});

const UserModel = mongoose.model("users", UserSchema);

// POST /signup route
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // Check DB connection
  if (mongoose.connection.readyState !== 1) {
    return res.status(500).json({ error: "Database not connected" });
  }

  // Check if user already exists
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists. Please sign in." });
  }

  // Create new user
  await UserModel.create({ name, email, password });

  res.json({ message: "You are signed up" });
});

// Start server
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
