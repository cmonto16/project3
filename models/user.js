const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  member_number: { type: [String], required: true },
  date: {type: Date, default: Date.now },
  nickname: { type: String, required: true },
  link: { type: String, required: true },
  
});

const User = mongoose.model("User", userSchema);

module.exports = User;
