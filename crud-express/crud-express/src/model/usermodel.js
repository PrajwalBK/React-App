const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/crud_db');

const userSchema = new mongoose.Schema({
    fname: String,
    age: Number,
    addr: String
});

const User = mongoose.model("Users",userSchema)

module.exports = User