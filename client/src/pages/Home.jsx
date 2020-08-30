import React from 'react';
import { Nav, Navbar, Form, Container, Carousel } from 'react-bootstrap';

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
              className="d-block w-500"
              src="C:\Users\Kendrick\Desktop\wyncode\final\C38_just_play\client\src\context\Images\rsz_brazilian-1145775_1280.jpg"
              alt="Caslisthenics and Cardio"
            />

            <Carousel.Caption>
              <h3>Caslisthenics and Cardio</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="client\src\context\Images\US_Navy_090611-N-3271W-003_Local_area_children_test_their_fitness_skills_during_a_Junior_Seal_Fitness.jpg"
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
              src="C:\Users\Kendrick\Desktop\wyncode\final\C38_just_play\client\src\context\Images\stock-photo-devostock-sport-action-energy-balance-daylight-boys-street-4k-177183.jpg"
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
