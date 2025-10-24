const {Router}=require("express")
const courseRouter=Router();
const {CourseModel}=require('../db')

  courseRouter.post("/purchase", (req, res) => {
    res.json({
      message: "-purchase-endpoint",
    });
  });
  courseRouter.get("/preview", (req, res) => {
    res.json({
      message: "courses-endpoint",
    });
  });


module.exports = {
  courseRouter: courseRouter,
};
