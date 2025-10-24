const { Router } = require("express");
const userRouter = Router();
const { UserModel } = require("../db");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const JWT_User_SECRET="Mahesh@123"




// 🔹 Signup Endpoint
userRouter.post("/signup", async (req, res) => {
  const { email, password, firstname, lastname } = req.body;

  // 🧩 1️⃣ Define validation schema using Zod
  const schema = z.object({
    email: z.string().email().min(3).max(100),
    password: z.string().min(3).max(100),
    firstname: z.string().min(2).max(50),
    lastname: z.string().min(2).max(50),
  });

  // 🧩 2️⃣ Validate input safely
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    return res
      .status(400)
      .json({ message: "❌ Invalid input format", errors: parsed.error });
  }

  try {
    // 🧩 3️⃣ Check if email already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message:   " ❌ User already exists" });
    }

    // 🧩 4️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 5);

    // 🧩 5️⃣ Create new user
    await UserModel.create({
      email,
      password: hashedPassword,
      firstname,
      lastname,
    });

    res.json({ message: "✅ You are signed up successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "❌ Internal server error" });
  }
});

userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(403).json({ message: "User does not exist" });
  }

  const passMatch = await bcrypt.compare(password, user.password);
  if (!passMatch) {
    return res.status(403).json({ message: "Incorrect password" });
  }

  const token = jwt.sign({ id: user._id.toString() }, JWT_User_SECRET);
  res.json({ token });
});

userRouter.get("/purchases", (req, res) => {
  res.json({
    message: "user purcaheses-endpoint",
  });
});
module.exports = {
  userRouter: userRouter,
};
