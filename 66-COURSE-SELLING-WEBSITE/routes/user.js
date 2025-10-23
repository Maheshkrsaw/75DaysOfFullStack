const{Router}=require("express")
const userRouter=Router();
  app.post("/signup", (req, res) => {
    res.json({
      message: "signup-endpoint",
    });
  });
  app.post("/signin", (req, res) => {
    res.json({
      message: "signin-endpoint",
    });
  });
  app.get("/purchases", (req, res) => {
    res.json({
      message: "user purcaheses-endpoint",
    });
  });

module.exports = {
  userRouter: userRouter,
};
