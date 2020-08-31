import React from 'react';
import './EventCard.css';
import Card from 'react-bootstrap/Card';
const EventCard = ({ event }) => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" className="w-25 h-25" src={event.image} />
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <Card.Text>{event.location}</Card.Text>
          <Card.Text>{event.time}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{event.price}</small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default EventCard;
