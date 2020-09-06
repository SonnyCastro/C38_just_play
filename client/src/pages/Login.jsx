import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const Login = ({ history }) => {
  const [formData, setFormData] = useState(null);
  const { setCurrentUser } = useContext(AppContext);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/api/users/login', formData)
      .then((response) => {
        sessionStorage.setItem('user', JSON.stringify(response.data));
        setCurrentUser(response.data);
        history.push('/events');
      })
      .catch(() => swal('Oops!', 'something went wrong', 'warning'));
  };

  return (
    <body id="background" style={{ color: 'white' }}>
      <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
        <h1 className="mb-4 mt-5">Login</h1>
        <Form style={{ width: 300 }} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Control
              id="email"
              type="email"
              required
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
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
            <Button type="submit" variant="outline-primary">
              Login
            </Button>
          </Form.Group>
        </Form>
        <Link className="mt-2" to="/reset-password">
          Forgot Password?
        </Link>
        <Link className="mt-2" to="/signup">
          Need an Account? Sign up.
        </Link>
      </Container>
    </body>
  );
};

export default Login;
