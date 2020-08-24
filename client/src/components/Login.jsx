import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
const Login = () => {
  return (
    <Container>
      <h1>Login</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
      </Form.Group>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
      </Form.Group>
      <Form.Control type="password" placeholder="Enter Password" />
      <div>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </div>
    </Container>
  );
};
export default Login;
