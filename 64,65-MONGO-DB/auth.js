// auth.js
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Mahesh123";

function auth(req, res, next) {
    const token = req.headers.authorization || req.headers.token;

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (err) {
        res.status(403).json({ message: "Invalid or expired token" });
    }
}

module.exports = {
    auth,
    JWT_SECRET
};
