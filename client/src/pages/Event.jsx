import React, { useState, useEffect } from 'react';
import Eventcard from '../components/EventCard';
import axios from 'axios';
const Event = () => {
  const [events, setEvents] = useState([]);
  const getEvents = () => {
    axios
      .get('/api/events', { withCredentials: true })
      .then((res) => setEvents(res.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <div>
      {events.map((event) => {
        return <Eventcard key={event._id} event={event} />;
      })}
    </div>
  );
};
export default Event;
