import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import eventService from '../services/eventService';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const fetchedEvent = await eventService.getEventById(id);
      setEvent(fetchedEvent);
    };
    fetchEvent();
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <div className="event-details">
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <p>{event.date}</p>
      <h3>Attendees</h3>
      <ul>
        {event.attendees.map(att => (
          <li key={att._id}>{att.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventDetails;
