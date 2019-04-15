const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  memberNum: { type: [String], required: true },
  memberDate: { type: String, required: true },
  nickName: { type: String, required: true },
  link: { type: String, required: true },
  
});

const User = mongoose.model("User", userSchema);

module.exports = User;
