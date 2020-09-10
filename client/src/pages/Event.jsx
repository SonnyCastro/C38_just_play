import React, { useState, useEffect } from 'react';
import Eventcard from '../components/EventCard';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Event.css';
import Navigation from '../components/Navigation';
import axios from 'axios';

const safeParse = (item) => {
  try {
    return JSON.parse(item);
  } catch {
    return null;
  }
};

const Event = () => {
  const [events, setEvents] = useState([]);
  const [user] = useState(safeParse(sessionStorage.getItem('user')));

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
    <div id="backgroundEvent">
      <Navigation />
      <h1
        className="d-flex justify-content-center mt-5"
        style={{ color: 'white' }}
      >
        Events
      </h1>
      {!user?.admin ? null : (
        <div>
          <Button
            as={Link}
            to="/createEvent"
            className="d-flex float-right mr-5"
          >
            Create Event
          </Button>
        </div>
      )}

      <div id="test" className="cardContainer">
        {events.map((event) => {
          return <Eventcard key={event._id} event={event} />;
        })}
      </div>
    </div>
  );
};
export default Event;
