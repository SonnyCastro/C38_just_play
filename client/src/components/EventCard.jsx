import React from 'react';
import Card from 'react-bootstrap/Card';
import { CardDeck } from 'react-bootstrap';
const EventCard = ({ event }) => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <CardDeck>
        <Card className="d-flex">
          <Card.Img variant="top" src="holder.js/100px160" />
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
      </CardDeck>
    </div>
  );
};

export default EventCard;
