import React, { useState, useEffect } from 'react';
import Eventcard from '../components/EventCard';
import Navigation from '../components/Navigation';
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
      <Navigation />
      <h1 className="d-flex justify-content-center mt-5">Events</h1>
      <div className="cardContainer">
        {events.map((event) => {
          return <Eventcard key={event._id} event={event} />;
        })}
      </div>
    </>
  );
  // className="container d-flex justidy-content-center align-items-center .card-deck flex-wrap"
};
export default Event;
