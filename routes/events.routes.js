const express = require("express");
const {
  getEvent,
  getUserSpecified,
  postEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events.controllers");
const router = express.Router();

router.get("/", getEvent);
router.get("/:id", getUserSpecified);
router.post("/", postEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
