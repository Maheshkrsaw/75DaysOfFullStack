// db.js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const Todo = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
    title: { type: String, required: true },
    done: { type: Boolean, default: false }
});

const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);

module.exports = {
    UserModel,
    TodoModel
};
