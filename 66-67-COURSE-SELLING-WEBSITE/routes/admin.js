const { Router } = require("express");
const { AdminModel, CourseModel } = require("../db");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const jwt = require("jsonwebtoken");

const adminRouter = Router();
const { JWT_Admin_SECRET } = require("../config");
const { adminMiddleware } = require("../middleware/admin");

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
    return res
      .status(400)
      .json({ message: "❌ Invalid input format", errors: parsed.error });
  }

  const existingAdmin = await AdminModel.findOne({ email });
  if (existingAdmin) {
    return res.status(400).json({ message: "❌ Admin already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  await AdminModel.create({
    email,
    password: hashedPassword,
    firstname,
    lastname,
  });

  res.json({ message: "✅ Admin signed up successfully!" });
});

// Make sure to load .env at the top of your server or config file
require('dotenv').config();

adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  // Check if admin exists
  const admin = await AdminModel.findOne({ email });
  if (!admin) return res.status(403).json({ message: "Admin does not exist" });

  // Check password
  const passMatch = await bcrypt.compare(password, admin.password);
  if (!passMatch) return res.status(403).json({ message: "Incorrect password" });

  // Check if JWT secret exists
  if (!process.env.JWT_ADMIN_SECRET) {
    return res.status(500).json({ message: "JWT secret not set in .env" });
  }

  // Generate JWT
  const token = jwt.sign({ id: admin._id.toString() }, process.env.JWT_ADMIN_SECRET, {
    expiresIn: "1h", // optional: token expiry
  });

  // Send response
  res.json({ token });
});

adminRouter.post("/course", adminMiddleware, async function(req, res) {
    const adminId = req.userId;

    const { title, description, imageUrl, price } = req.body;

    // creating a web3 saas in 6 hours
    const course = await CourseModel.create({
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price, 
        creatorId: adminId
    })

    res.json({
        message: "Course created",
        courseId: course._id
    })
})

adminRouter.put("/course", adminMiddleware, async function(req, res) {
    const adminId = req.userId;

    const { title, description, imageUrl, price, courseId } = req.body;

    // creating a web3 saas in 6 hours
    const course = await CourseModel.updateOne({
        _id: courseId, 
        creatorId: adminId 
    }, {
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price
    })

    res.json({
        message: "Course updated",
        courseId: course._id
    })
})

adminRouter.get("/course/bulk", adminMiddleware,async function(req, res) {
    const adminId = req.userId;

    const courses = await CourseModel.find({
        creatorId: adminId 
    });

    res.json({
        message: "Course updated",
        courses
    })
})

module.exports = {
    adminRouter: adminRouter
}