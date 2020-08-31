import React, { useState, useContext, createRef } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
const CreateEvent = ({ history }) => {
  const [eventData, setEventData] = useState({});
  const { loading, setLoading } = useContext(AppContext);
  const [eventImage, setEventImage] = useState(null);
  const imgRef = createRef(null);
  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleEventSubmission = (e) => {
    const form = e.target;
    setLoading(true);
    e.preventDefault();

    const eventForm = new FormData();
    eventForm.append('image', eventImage, `${eventData.title}.jpg`);
    for (let keys in eventData) {
      eventForm.append(keys, eventData[keys]);
    }
    console.log('Event Form', eventForm);

    

    axios
      .post('/api/events/all', eventForm, {
        withCredentials: true,
        'content-type': 'multipart/form-data',
      })
      .then((res) => {
        console.log('Then Post: ', res);
        setEventData(null);
        form.reset();
        setLoading(false);
        history.push('/events');
      })
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      {loading ? (
        <Spinner animation="border" className="d-flex justify-content-center" />
      ) : (
        <Form
          className="d-flex flex-column align-items-start justify-content-center"
          onSubmit={handleEventSubmission}
        >
          <Form.Group className="mt-5 mb-5">
            <Form.Label htmlFor="description">Event Thumbnail</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              name="image"
              onChange={(e) => setEventImage(e.target.files[0])}
              ref={imgRef}
            />
          </Form.Group>
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
      )}
    </Container>
  );
};
export default CreateEvent;
