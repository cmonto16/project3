const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Member Schema created in the database to be called
const memberSchema = new Schema({
 nickname: { type: String, required: true },
 member_number: { type:Number, required: true},
 hours: {type:Number, required: true}

});

// Adding Events Schema and calling in our memberSchema for more information needed
const eventSchema = new Schema({
 name: { type: String, required: true },
 photo_link: { type: String, required: true },
 address: { type: String, required: true },
 city: { type: String, required: true },
 state: { type: String, required: true },
 objective: { type: String, required: true },
 reporting_member: { type: String, required: true },
 mission_report: { type: String, required: true },
 members: [memberSchema]

});


const Event = mongoose.model("Event", eventSchema);


module.exports = Event;