import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const ResetPassword = () => {
  const [email, setEmail] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    axios
      .get(`/api/password?email=${email}`)
      .then((res) => {
        console.log(res);
        form.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <body id="background" style={{ color: 'white' }}>
      <Container className="d-flex flex-column align-items-center justify-content-center fullscreen">
        <h1 className="mt-5">Reset Password</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label className="mt-3">Email address</Form.Label>
            <Form.Control
              type="email"
              required
              autoComplete="off"
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Button className="mt-1" type="submit">
              Send Email
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </body>
  );
};

export default ResetPassword;
