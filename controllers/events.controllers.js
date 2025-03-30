const event = require("../models/events");

//get full database
const getEvent = async (req, res) => {
  try {
    const getevents = await event.find({});
    res.status(200).json(getevents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//user specified retrieval
const getUserSpecified = async (req, res) => {
  try {
    const { id } = req.params;
    const user_event = await event.findById(id);
    res.status(200).json(user_event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//post method
const postEvent = async (req, res) => {
  try {
    const events = await event.create(req.body);
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update items
const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const update_event = await event.findByIdAndUpdate(id, req.body);

    if (!update_event) {
      res.status(404).json({ message: "event not listed" });
    }

    const updated_event = await event.findById(id);
    res.status(200).json(updated_event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete items
const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteevent = await event.findByIdAndDelete(id);

    if (!deleteevent) {
      res.status(404).json({ message: "event not listed" });
    }

    res.status(200).json({ message: "event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEvent,
  getUserSpecified,
  postEvent,
  updateEvent,
  deleteEvent,
};
