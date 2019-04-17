const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  member_number: { type: Number, required: true },
  approval_date: {type: Date, default: Date.now },
  nickname: { type: String, required: true },
  hours: { type: Number, required: true },
  image: { type: String, required: true },
  
});

const User = mongoose.model("User", userSchema);

module.exports = User;
