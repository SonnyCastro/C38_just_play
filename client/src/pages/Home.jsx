import React from 'react';
import { Nav, Navbar, Form, Container, Carousel } from 'react-bootstrap';
import BeachSoccer from '../context/Images/BeachSoccer.jpg';
import Calisthenics from '../context/Images/Calisthenics.jpg';
import SkateWithGreats from '../context/Images/SkateWithGreats.jpg';

const Home = () => {
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Just Play!</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Events</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>

      <Form.Group>
        <Form.Control size="lg" type="text" placeholder="Search for an Event" />
      </Form.Group>

      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-300 l-300"
              src={Calisthenics}
              alt="Caslisthenics and Cardio"
            />

            <Carousel.Caption>
              <h3>Caslisthenics and Cardio</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-300 l-300"
              src={BeachSoccer}
              alt="Soccer on the Beach"
            />

            <Carousel.Caption>
              <h3>Soccer on the Beach</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={SkateWithGreats}
              alt="Skate with a Great"
            />

            <Carousel.Caption>
              <h3>Skate with a Great!</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  );
};

export default Home;
