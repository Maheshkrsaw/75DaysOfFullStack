const express = require("express");
const app = express();
app.use(express.json());

const users = [];

function generateToken() {
  let options = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "K",
    "L",
    "M",
    "N",
    "D",
    "P",
    "0",
    "R",
    "S",
    "U",
    "U",
    "V",
    "w",
    "x",
    "Y",
    "2",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let token = "";
  for (let i = 0; i < 132; i++) {
    token = token + options[Math.floor(Math.random() * options.length)];
  }
  return token;
}

app.post("/signup",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    users.push({
        username:username,
        password:password
    })

    res.json({
        messgae: "you are sign in"
    })
})

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // find user from the list
  const foundUser = users.find(
    (u) => u.username === username && u.password === password
  );

  if (foundUser) {
    const token =generateToken();
    foundUser.token=token;
    res.json({ message: "✅ Sign-in successful!" , token });
  } else {
    res.status(401).json({ message: "❌ Invalid username or password" });
  }
}); 

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
 