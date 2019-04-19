const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/attendus"
);

const userSeed = [
  {
    first_name: "Sam",
    last_name: "Rockwell",
    member_number: 8473,
    approval_date: "05/13/2002",
    nickname: "Jaegermesiter",
    hours: 34,
    image: "http://mandalorianmercs.org/forum/index.php?action=dlattach;attach=42920;type=avatar"
},
{
    first_name: "Logan",
    last_name: "Fitzgerald",
    member_number: 2481,
    approval_date: "02/19/2009",
    nickname: "Thunderstruck",
    hours: 23,
    image: "http://mandalorianmercs.org/forum/index.php?action=dlattach;attach=42680;type=avatar"
},
{
    first_name: "Jenny",
    last_name: "McDonald",
    member_number: 4873,
    approval_date: "10/02/2011",
    nickname: "Eagle Eye",
    hours: 20,
    image: "http://mandalorianmercs.org/forum/index.php?action=dlattach;attach=43061;type=avatar"
},
{
    first_name: "Trevor",
    last_name: "Oakland",
    member_number: 3765,
    approval_date: "12/22/2015",
    nickname: "Overwatch",
    hours: 21,
    image: "http://mandalorianmercs.org/forum/index.php?action=dlattach;attach=41916;type=avatar"
}
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  const eventsSeed = [
    {
      "name": "Primary Children's Hospital Fundraiser",
      "photo_link": "http://i.imgur.com/MyPSVxX.jpg",
      "address": "123 Hospital Lane",
      "city": "Sandy",
      "state": "UT",
      "objective": "To raise awareness about Super Cancer.",
      "reporting_member": "Jaegermesiter",
      "mission_report": "Lots of donations received!",
    }];
  
  
  db.Event
    .remove({})
    .then(() => db.Event.collection.insertMany(eventsSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });