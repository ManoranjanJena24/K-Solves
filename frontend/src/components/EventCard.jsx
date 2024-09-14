import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => (
  <div className="event-card">
    <h2>{event.name}</h2>
    <p>{event.date}</p>
    <Link to={`/events/${event._id}`}>View Details</Link>
  </div>
);

export default EventCard;
