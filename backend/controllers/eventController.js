const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  const { name, description, date } = req.body;
  try {
    const newEvent = new Event({ name, description, date });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: 'Error creating event' });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('attendees');
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching events' });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('attendees');
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching event' });
  }
};
