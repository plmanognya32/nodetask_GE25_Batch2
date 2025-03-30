const express = require("express");
const mongoose = require("mongoose");
const eventsroutes = require("./routes/events.routes");
const eventscontrollers = require("./controllers/events.controllers");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

//routes
app.use("/api/events", eventsroutes);

app.listen(3000, () => {
  console.log("server running on 3000");
});

app.get("/", function (req, res) {
  res.send("This is the node response sent");
});

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to mongodb Successfully");
  })
  .catch((err) => {
    console.log(err);
    console.log("Conncection has failed");
  });
