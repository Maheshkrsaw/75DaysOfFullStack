const { Router } = require("express");
const { AdminModel } = require("../db");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const jwt = require("jsonwebtoken");

const adminRouter = Router();
const JWT_Admin_SECRET =  "Mahesh@825406";

// 🔹 Signup Endpoint
adminRouter.post("/signup", async (req, res) => {
  const { email, password, firstname, lastname } = req.body;

  const schema = z.object({
    email: z.string().email().min(3).max(100),
    password: z.string().min(3).max(100),
    firstname: z.string().min(2).max(50),
    lastname: z.string().min(2).max(50),
  });

  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: "❌ Invalid input format", errors: parsed.error });
  }

  try {
    const existingAdmin = await AdminModel.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "❌ Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    await AdminModel.create({ email, password: hashedPassword, firstname, lastname });

    res.json({ message: "✅ Admin signed up successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "❌ Internal server error" });
  }
});

// 🔹 Signin Endpoint
adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const admin = await AdminModel.findOne({ email });
  if (!admin) return res.status(403).json({ message: "Admin does not exist" });

  const passMatch = await bcrypt.compare(password, admin.password);
  if (!passMatch) return res.status(403).json({ message: "Incorrect password" });

  const token = jwt.sign({ id: admin._id.toString() }, JWT_Admin_SECRET);
  res.json({ token });
});

adminRouter.put("/", (req, res) => res.json({ message: "Course point" }));
adminRouter.get("/bulk", (req, res) => res.json({ message: "Course bulk point" }));

module.exports = { adminRouter };
