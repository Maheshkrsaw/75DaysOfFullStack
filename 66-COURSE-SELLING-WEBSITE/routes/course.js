const {Router}=require("express")
const courseRouter=Router();

  app.post("/purchase", (req, res) => {
    res.json({
      message: "-purchase-endpoint",
    });
  });
  app.get("/preview", (req, res) => {
    res.json({
      message: "courses-endpoint",
    });
  });


module.exports = {
  courseRouter: courseRouter,
};
