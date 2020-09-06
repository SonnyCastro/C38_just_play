import React, { useState, useContext, createRef } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import './createEvent.css';
import Spinner from 'react-bootstrap/Spinner';
import Navigation from '../components/Navigation';

import axios from 'axios';
const CreateEvent = ({ history }) => {
  const [eventData, setEventData] = useState({});
  const [eventImage, setEventImage] = useState(null);
  const [preview, setPreview] = useState(
    'https://files.willkennedy.dev/wyncode/wyncode.png',
  );
  const { loading, setLoading, currentUser } = useContext(AppContext);
  const imgRef = createRef(null);

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleFormControll = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setEventImage(e.target.files[0]);
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

    axios
      .post('/api/events/all', eventForm, {
        withCredentials: true,
        'content-type': 'multipart/form-data',
      })
      .then((res) => {
        setEventData({});
        form.reset();
        setLoading(false);
        history.push('/events');
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Navigation />
      <Container>
        {loading ? (
          <Spinner animation="border" id="loader" />
        ) : (
          currentUser?.admin && (
            <>
              <h1 className="d-flex justify-content-center mt-5">
                Creat an Event!
              </h1>
              <div id="createEvent-container">
                <Form
                  className="d-flex flex-column align-items-start justify-content-center"
                  onSubmit={handleEventSubmission}
                >
                  <Form.Group className="mt-5 mb-5">
                    <Form.Label htmlFor="description" id="eventThumb">
                      Event Thumbnail
                    </Form.Label>
                    {/* <div>
                    {eventImage && (
                      <img src={preview} alt={preview} id="eventImg" />
                    )}
                  </div> */}
                    <Form.Control
                      type="file"
                      accept="image/*"
                      name="image"
                      required
                      autoComplete="off"
                      onChange={(e) => handleFormControll(e)}
                      ref={imgRef}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="description">Title</Form.Label>
                    <Form.Control
                      id="description"
                      type="textbox"
                      name="title"
                      className="input"
                      autoComplete="off"
                      required
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="dueDate">Description</Form.Label>
                    <Form.Control
                      id="description"
                      type="text"
                      required
                      className="input"
                      autoComplete="off"
                      name="description"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="dueDate">Location</Form.Label>
                    <Form.Control
                      id="location"
                      type="text"
                      required
                      className="input"
                      autoComplete="off"
                      name="location"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="time">Date & Time</Form.Label>
                    <Form.Control
                      id="time"
                      type="text"
                      name="time"
                      required
                      autoComplete="off"
                      className="d-flex flex-wrap input"
                      placeholder="Wednesday, August 26, 2020 6:45 PM"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="dueDate">Price</Form.Label>
                    <Form.Control
                      id="price"
                      type="text"
                      name="price"
                      required
                      className="input"
                      autoComplete="off"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Button
                      type="submit"
                      className="mt-2"
                      variant="outline-primary"
                    >
                      Create Event!
                    </Button>
                  </Form.Group>
                </Form>

                <Card className="card" id="createEvent-card">
                  <Card.Img
                    variant="top"
                    src={preview}
                    id="createEvent-cardImg"
                  />
                  <Card.Body>
                    <Card.Title>{eventData.title}</Card.Title>
                    <Card.Text>{eventData.description}</Card.Text>
                    <Card.Text>{eventData.location}</Card.Text>
                    <Card.Text>{eventData.time}</Card.Text>
                    <Card.Text>{eventData.price}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </>
          )
        )}
      </Container>
    </>
  );
};
export default CreateEvent;
