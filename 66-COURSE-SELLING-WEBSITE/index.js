const express = require("express");
const app = express();
const { createUserRoute } = require("./user");
const { courseRoute } = require("./user");

createUserRoute(app);
courseRoute(app);

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
