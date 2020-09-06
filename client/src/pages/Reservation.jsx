import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Reservation.css';
import swal from 'sweetalert';
import PaymentInputs from '../components/StripeInput';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Reservation = () => {
  const history = useHistory();
  const [price, setPrice] = useState('Free');

  useEffect(() => {
    axios
      .get(`/api/events/${history.location.pathname.split('/')[2]}`)
      .then((data) => setPrice(data.data.price))
      .catch((err) => console.log(err));
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    fetch('/events/reservation', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
      .then((res) => {
        swal({
          title: 'Reserved!',
          icon: 'success',
        });
        form.reset();
      })
      .catch((error) => {
        console.log(error.toString());
      });
  };

  return (
    <>
      <h1 className="container d-flex flex-column mt-5 align-items-center justify-content-center">
        Event Reservation
      </h1>
      <Form
        onSubmit={handleSubmit}
        className="container d-flex flex-column mt-5 align-items-center justify-content-center"
      >
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              required
              className="input"
              autoComplete="off"
              name="name"
              placeholder="Enter Name"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              required
              className="input"
              autoComplete="off"
              name="email"
              placeholder="Enter email"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group id="pn" as={Col}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              required
              className="input"
              autoComplete="off"
              name="phoneNumber"
              placeholder="Enter phone number"
            />
          </Form.Group>
        </Form.Row>

        {price == 'Free' ? null : (
          <>
            <Form.Row>
              <Form.Group className="mt-2">
                <Form.Label className="mr-2 ">Payment Info</Form.Label>
                <PaymentInputs className="ml-5 input" />
              </Form.Group>
            </Form.Row>
          </>
        )}

        <Form.Row>
          <Button variant="outline-primary" className="mt-3 btn" type="submit">
            Submit
          </Button>
        </Form.Row>
      </Form>
    </>
  );
};

export default Reservation;
