import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';
import './Signup.css';

const SignUp = ({ history }) => {
  const [formData, setFormData] = useState('');
  const { setCurrentUser } = useContext(AppContext);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/api/users/', formData)
      .then((response) => {
        sessionStorage.setItem('user', JSON.stringify(response.data));
        setCurrentUser(response.data);
        history.push('/');
      })
      .catch((error) => swal('Error', 'Please check the inputs', 'warning'));
  };

  return (
    <body id="gradient">
      <div>
        <Container className="container d-flex flex-column align-items-center s ">
          <h1 className="mb-4 box">Create Account!</h1>
          <Form style={{ width: 300 }} onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="fullName">Full Name</Form.Label>
              <Form.Control
                id="fullName"
                type="text"
                required
                className="input"
                autoComplete="off"
                placeholder="Full Name"
                name="name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email">Email Address</Form.Label>
              <Form.Control
                id="email"
                type="email"
                required
                className="input"
                autoComplete="off"
                placeholder="Email Address"
                name="email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                id="password"
                type="password"
                required
                className="input"
                autoComplete="off"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="admin">Account Type</Form.Label>
              <Form.Control
                id="admin"
                as="select"
                name="admin"
                className="input"
                required
                autoComplete="off"
                onChange={handleChange}
              >
                <option>Account Type</option>
                <option value="true">Admin</option>
                <option value="false">Guest</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="d-flex justify-content-center">
              <Button
                type="submit"
                className="mt-3"
                as={Link}
                to="/events"
                variant="outline-primary"
              >
                Create Account
              </Button>
            </Form.Group>
          </Form>
          <Link className="mt-1" to="/login">
            Already have an account? Login.
          </Link>
        </Container>
      </div>
    </body>
  );
};

export default SignUp;
