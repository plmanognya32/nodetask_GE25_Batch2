const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the name of the customer"],
    },
    eventtype: {
      type: String,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    guests: {
      type: Number,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
