const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());
const JWT_SECRET = "my_super_secret_key";
const users = [];

//  Function to generate random token
// this is manually done ans rreplaced by the jwts token

/*
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
*/


function logger(req,res,next){
  console.log(`${req.method} requested came`);
  next()
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // note: / instead of ./
});

// 🔹 SIGNUP route
app.post("/signup",logger, (req, res) => {
  const { username, password } = req.body;

  const existingUser = users.find((u) => u.username === username);
  if (existingUser) {
    return res.status(400).json({
      message: "❌ Username already exists! Please choose another.",
    });
  }

  users.push({ username, password });
  res.json({ message: "✅ You are signed up successfully!" });
});

// 🔹 SIGNIN route
app.post("/signin",logger, (req, res) => {
  const { username, password } = req.body;

  const foundUser = users.find(
    (u) => u.username === username && u.password === password
  );
  if (foundUser) {
    const token = jwt.sign(
      { username: foundUser.username }, // payload
      JWT_SECRET
    );
    // foundUser.token = token;
    res.json({ message: "✅ Sign-in successful!", token });
  } else {
    res.status(401).json({ message: "❌ Invalid username or password" });
  }
});

function auth(req,res,next){
  const token = req.headers.token;
  const decoded = jwt.verify(token, JWT_SECRET);
  if(decoded.username){
    req.username=decoded.username;
    next()
  }else{
    res.json({
      message:"you are not loged in "
    })
  }
}

app.get("/me",logger,auth, (req, res) => {

  let foundUser = null;
  for (i = 0; i < users.length; i++) {
    if (users[i].username == req.username) {
      foundUser = users[i];
    }
  }


    res.json({
      username: foundUser.username,
      password: foundUser.password,
    })
  //  else {
  //   res.json({
  //     message: "❌ Sorry, your account was not found.",
  //   });
  // }
});

// 🔹 Start server
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
