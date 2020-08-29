import React, { useState, useContext } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import EventImage from '../components/EventImage';
import axios from 'axios';
import './createEvent.css';

const CreateEvent = ({ history }) => {
  const [eventData, setEventData] = useState({});
  const [imageData, setImageData] = useState(null);
  const { setLoading } = useContext(AppContext);

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEventSubmission = (e) => {
    const form = e.target;
    setLoading(true);
    e.preventDefault();
    
    axios
      .post('/api/events/entire', imageData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
        body: eventData,
      })
      .then((res) => {
        console.log(res);
        setEventData(null);
        form.reset();
        setLoading(false);
        history.push('/events');
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Form
        className="d-flex flex-column align-items-start justify-content-center"
        id="eventForm-container"
        onSubmit={handleEventSubmission}
      >
        <EventImage setImageData={setImageData} />
        <Form.Group>
          <Form.Label htmlFor="description">Title</Form.Label>
          <Form.Control
            id="description"
            type="textbox"
            name="title"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="dueDate">Description</Form.Label>
          <Form.Control
            id="description"
            type="text"
            name="description"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="dueDate">Location</Form.Label>
          <Form.Control
            id="location"
            type="text"
            name="location"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="dueDate">Time</Form.Label>
          <Form.Control
            id="time"
            type="text"
            name="time"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="dueDate">Type</Form.Label>
          <Form.Control
            id="type"
            type="date"
            name="type"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="dueDate">Price</Form.Label>
          <Form.Control
            id="price"
            type="text"
            name="price"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Button type="submit">Create Event!</Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default CreateEvent;
