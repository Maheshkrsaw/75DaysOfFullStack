const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON body

// ✅ Serve static frontend files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// ✅ API Route
app.post("/sum", (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  res.json({ answer: a + b });
});

// ✅ Start server
app.listen(3001, () => {
  console.log("🚀 Server running on http://localhost:3001");
});
