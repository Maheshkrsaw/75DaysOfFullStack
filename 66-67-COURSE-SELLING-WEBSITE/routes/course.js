const { Router } = require("express");
const { CourseModel, PurchaseModel } = require("../db");
const { userMiddleware } = require("../middleware/users");

const courseRouter = Router();

// 🔹 Purchase Course
courseRouter.post("/purchase", userMiddleware, async (req, res) => {
  const userId = req.userId;
  const courseId = req.body.courseId;

  await PurchaseModel.create({ UserId: userId, creatorid: courseId });
  res.json({ message: "You have successfully bought the course" });
});

// 🔹 Preview Courses
courseRouter.get("/preview", async (req, res) => {
  const courses = await CourseModel.find({});
  res.json({ courses });
});

module.exports = { courseRouter };
