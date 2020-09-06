import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const UpdatePassword = ({ history }) => {
  const [password, setPassword] = useState(null);

  const handleChange = (event) => {
    setPassword({ ...password, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.password !== password.confirmPassword) {
      alert('Passwords must match!');
      return;
    }
    axios
      .put(
        '/api/password',
        { password: password.password },
        { withCredentials: true },
      )
      .then((res) => {
        //add alert
        history.push('/login');
      })
      .catch((error) => console.log(error));
  };
  return (
    <body id="background" style={{ color: 'white' }}>
      <Container className="d-flex flex-column align-items-center justify-content-center fullscreen">
        <h1 className="mt-5">Update Password</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label className="mt-2">New Password</Form.Label>
            <Form.Control
              type="password"
              onChange={handleChange}
              name="password"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="mt-1">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              onChange={handleChange}
              name="confirmPassword"
            />
          </Form.Group>
          <Form.Group>
            <Button type="submit" className="mt-2">
              Update Password
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </body>
  );
};

export default UpdatePassword;
