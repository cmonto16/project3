const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: { type: String, required: true },
  link: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: [String], required: true },
  state: { type: String, required: true },
    
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;