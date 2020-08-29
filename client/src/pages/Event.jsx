import React, { useState, useEffect } from 'react';
import Eventcard from '../components/EventCard';
import { CardDeck } from 'react-bootstrap';
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
    <>
      <CardDeck>
        {events.map((event) => {
          return <Eventcard key={event._id} event={event} />;
        })}
      </CardDeck>
    </>
  );
};

export default Event;
