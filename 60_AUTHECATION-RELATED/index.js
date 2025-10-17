const express = require("express");
const app = express();
app.use(express.json());

const users = [];

// 🔹 Function to generate random token
function generateToken() {
  const options = [
    "A","B","C","D","E","F","K","L","M","N","P",
    "R","S","U","V","W","X","Y",
    "0","1","2","3","4","5","6","7","8","9"
  ];
  let token = "";
  for (let i = 0; i < 32; i++) {
    token += options[Math.floor(Math.random() * options.length)];
  }
  return token;
}

// 🔹 SIGNUP route
app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return res.status(400).json({
      message: "❌ Username already exists! Please choose another."
    });
  }

  users.push({ username, password });
  res.json({ message: "✅ You are signed up successfully!" });
});

// 🔹 SIGNIN route 
app.post("/signin", (req, res) => {
  const { username, password } = req.body;

  const foundUser = users.find(u => u.username === username && u.password === password);
  if (foundUser) {
    const token = generateToken();
    foundUser.token = token;
    res.json({ message: "✅ Sign-in successful!", token });
  } else {
    res.status(401).json({ message: "❌ Invalid username or password" });
  }
});


app.get("/me",(req,res)=>{
  const token = req.headers.token;

  const foundUser=users.find(u=>u.token===token);
  if(foundUser){
    res.json({
      username:foundUser.username,
      password: foundUser.password
    })
  }else{
    res.json({
      message:"sorry your account not found"
    })
  }
})

// 🔹 Start server
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
