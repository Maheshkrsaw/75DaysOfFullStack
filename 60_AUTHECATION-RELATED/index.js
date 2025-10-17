const express = require('express')
const app = express();
app.use(express.json());

const users=[];

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

app.post("/signin",(req,res)=>{

})


app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
