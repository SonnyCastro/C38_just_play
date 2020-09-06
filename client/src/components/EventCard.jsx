import React from 'react';
import Button from 'react-bootstrap/Button';
import './cardStyle.css';
import { useHistory } from 'react-router-dom';

const EventCard = ({ event }) => {
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/reservation/${id}`, { event });
  };

  return (
    <div className="card">
      <div>
        <img src={event.image} className="img" alt={event.image} />
      </div>
      <div className="card_info">
        <h2 className="text1">
          <strong>{event.title}</strong>
        </h2>
        <h4>{event.description}</h4>
        <h5>{event.location}</h5>
        <p>{event.time}</p>
        <h4>{event.price}</h4>
        <Button
          variant="primary"
          size="md"
          id="btn"
          onClick={() => handleClick(event._id)}
        >
          Reserve
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
