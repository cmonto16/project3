const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({

 nickname: { type: String, required: true },
 member_number: { type:String, required: true},
 hours: {type:Number, required: true}

});

const eventSchema = new Schema({
 name: { type: String, required: true },
 photo_link: { type: String, required: true },
 address: { type: Number, required: true },
 city: { type: [String], required: true },
 state: { type: String, required: true },
 objective: { type: String, required: true },
 reporting_member: { type: String, required: true },
 mission_report: { type: String, required: true },
 members: [memberSchema]

});


const Event = mongoose.model("Event", eventSchema);


module.exports = Event;