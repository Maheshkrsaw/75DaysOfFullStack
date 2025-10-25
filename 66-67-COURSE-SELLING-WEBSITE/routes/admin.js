const { Router } = require("express");
const { AdminModel, CourseModel } = require("../db");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const { adminMiddleware } = require("../middleware/admin");

const adminRouter = Router();

// 🔹 Signup
adminRouter.post("/signup", async (req, res) => {
  const { email, password, firstname, lastname } = req.body;
  const schema = z.object({
    email: z.string().email().min(3).max(100),
    password: z.string().min(3).max(100),
    firstname: z.string().min(2).max(50),
    lastname: z.string().min(2).max(50),
  });

  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: "❌ Invalid input", errors: parsed.error });

  const existingAdmin = await AdminModel.findOne({ email });
  if(existingAdmin) return res.status(400).json({ message: "❌ Admin already exists" });

  const hashedPassword = await bcrypt.hash(password, 5);
  await AdminModel.create({ email, password: hashedPassword, firstname, lastname });

  res.json({ message: "✅ Admin signed up successfully!" });
});

// 🔹 Signin
adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const admin = await AdminModel.findOne({ email });
  if(!admin) return res.status(403).json({ message: "Admin does not exist" });

  const passMatch = await bcrypt.compare(password, admin.password);
  if(!passMatch) return res.status(403).json({ message: "Incorrect password" });

  const token = jwt.sign({ id: admin._id.toString() }, process.env.JWT_ADMIN_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// 🔹 Create Course
adminRouter.post("/course", adminMiddleware, async (req, res) => {
  const adminId = req.userId;
  const { title, description, imageUrl, price } = req.body;

  const course = await CourseModel.create({ title, description, imageUrl, price, creatorid: adminId });
  res.json({ message: "Course created", courseId: course._id });
});

// 🔹 Update Course
adminRouter.put("/course", adminMiddleware, async (req, res) => {
  const adminId = req.userId;
  const { title, description, imageUrl, price, courseId } = req.body;

  await CourseModel.updateOne({ _id: courseId, creatorid: adminId }, { title, description, imageUrl, price });
  res.json({ message: "Course updated", courseId });
});

// 🔹 Get Courses
adminRouter.get("/course/bulk", adminMiddleware, async (req, res) => {
  const adminId = req.userId;
  const courses = await CourseModel.find({ creatorid: adminId });
  res.json({ courses });
});

module.exports = { adminRouter };
