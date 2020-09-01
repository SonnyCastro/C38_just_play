import React from 'react';
import Button from 'react-bootstrap/Button';
import './cardStyle.css';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const EventCard = ({ event }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/reservation');
  };

  return (
    <div>
      <Card id="card">
        <Card.Img variant="top" id="img" src={event.image} />
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <Card.Text>{event.location}</Card.Text>
          <Card.Text>{event.time}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{event.price}</small>
          <Button
            variant="primary"
            size="md"
            onClick={handleClick}
            className="ml-5"
          >
            Reserve
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default EventCard;
