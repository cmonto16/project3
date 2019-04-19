const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: { type: String, required: true },
  photo_link: { type: String, required: true },
  address: { type: Number, required: true },
  city: { type: [String], required: true },
  state: { type: String, required: true },
  objective: { type: String, required: true },
  reporting_member: { type: String, required: true },
  mission_report: { type: String, required: true },
    
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;