import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
const CreateAccount = () => {
  return (
    <Container>
      <h1>Create An Account</h1>
      <Form.Group controlID="Name">
        <Form.Label>Full Name</Form.Label>
      </Form.Group>
      <Form.Control type="name" placeholder="Enter Name" />
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
      </Form.Group>
      <Form.Control type="email" placeholder="Enter Email" />
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
export default CreateAccount;
