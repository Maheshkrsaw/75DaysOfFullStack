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



// Using Fetch
fetch("http://localhost:3001/sum", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ a: 5, b: 10 })
})
  .then(response => response.json())   // parse JSON manually
  .then(data => console.log("Sum (Fetch):", data.answer))
  .catch(err => console.error(err));


  // Using Axios
axios.post("http://localhost:3001/sum", { a: 5, b: 10 })
  .then(({ data }) => console.log("Sum (Axios):", data.answer)) // JSON auto-parsed
  .catch(err => console.error(err));
