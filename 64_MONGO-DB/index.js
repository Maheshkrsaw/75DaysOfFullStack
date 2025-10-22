const express = require("express");
const { UserModel, TodoModel } = require("./db");
// const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();
const JWT_SECRET = "Mahesh123";

app.use(express.json());

// Connect to MongoDB
mongoose.connect(
    "mongodb+srv://Mahesh:MaheshMahi@cluster0.cjdwieg.mongodb.net/testing"
)
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Signup route
app.post("/signup", async function (req, res) {
    const { email, password, name } = req.body;

    await UserModel.create({
        email: email,
        password: password,
        name: name,
    });

    res.json({
        message: "You are signed up",
    });
});

// Signin route
app.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({
        email: email,
        password: password,
    });

    if (user) {
        const token = jwt.sign(
            { id: user._id.toString() },
            JWT_SECRET
        );

        res.json({
            token: token,
        });
    } else {
        res.status(403).json({
            message: "Incorrect credentials",
        });
    }
});

// Add a new todo
app.post("/todo", auth, function (req, res) {
    const userId = req.userId;
    res.json({
        userId: userId
    });
});

// Get all todos
app.get("/todos", auth, function (req, res) {
    const userId = req.userId;
    res.json({
        userId: userId
    });
});

// Auth middleware
function auth(req, res, next) {
    const token = req.headers.token;
    const decodeddata = jwt.verify(token, JWT_SECRET);
    if (decodeddata) {
        req.userId = decodeddata.id;
        next();
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        });
    }
}

// Start server
app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});
