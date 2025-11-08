import Event from "../models/eventModel.js";

export const getEvents = async (req, res) => {
  const events = await Event.find().populate("createdBy", "name email");
  res.json(events);
};

export const createEvent = async (req, res) => {
  const { title, description, date, location } = req.body;
  const event = new Event({ title, description, date, location, createdBy: req.user._id });
  const created = await event.save();
  res.status(201).json(created);
};

export const getEventById = async (req, res) => {
  const event = await Event.findById(req.params.id).populate("createdBy", "name");
  event ? res.json(event) : res.status(404).json({ message: "Event not found" });
};
