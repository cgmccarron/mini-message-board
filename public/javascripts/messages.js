const moment = require("moment");
let date = moment().startOf("day").fromNow();
let date2 = moment().startOf("hour").fromNow();

// default messages shown in index
const messages = [
  {
    title: "Poodles are Great!",
    description:
      "I personally think Poodles are a great start when looking at puppies. They're super smart, playful, and don't shed. But you should also consider adopting a puppy from a shelter.",
    username: "GooseThePoodle4343",
    date: date2,
  },
  {
    title: "New Puppy Questions",
    description:
      "Hello I am thinking about getting a puppy, what are some things I should know? What breed would y'all recommend?",
    username: "Ann1234",
    date: date,
  },
];

module.exports = messages;
