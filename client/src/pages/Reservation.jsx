import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Reservation = () => {
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
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        form.reset();
      })
      .catch((error) => {
        console.log(error.toString());
      });
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        className="container d-flex flex-column mt-5 align-items-center justify-content-center"
      >
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>
        </Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            size="small"
            name="phoneNumber"
            placeholder="Enter phone number"
          />
        </Form.Group>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Reservation;
