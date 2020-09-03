import React from 'react';
import Button from 'react-bootstrap/Button';
import './cardStyle.css';
import { useHistory } from 'react-router-dom';

const EventCard = ({ event }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/reservation');
  };

  return (
    <div className="card">
      <div className="bgColor">
        <img src={event.image} className="img" alt={event.image} />
      </div>
      <div className="card_info">
        <h2>{event.title}</h2>
        <h4>{event.description}</h4>
        <h4>{event.location}</h4>
        <h4>{event.time}</h4>
        <h4>{event.price}</h4>
        <Button
          variant="primary"
          size="md"
          className="btn"
          onClick={handleClick}
        >
          Reserve
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
