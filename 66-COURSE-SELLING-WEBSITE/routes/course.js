function courseRoute(app) {
  app.post("/course/purchase", (req, res) => {
    res.json({
      message: "course-purchase-endpoint",
    });
  });
  app.get("/courses/preview", (req, res) => {
    res.json({
      message: "courses-endpoint",
    });
  });
}

module.exports = {
  courseRoute: courseRoute,
};
