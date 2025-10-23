const express = require("express");
const app = express();
const { createUserRoute } = require("./routes/user");
const { courseRoute } = require("./routes/user");

createUserRoute(app);
courseRoute(app);

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
