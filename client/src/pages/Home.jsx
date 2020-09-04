import React from 'react';
import { Container, Button, ButtonGroup } from 'react-bootstrap';
import '../App.css';
import HomeLayout from '../components/HomeLayout';

const Home = () => {
  return (
    <>
      <HomeLayout />
      <div>
        <div className="inline-buttons" block="true">
          <ButtonGroup className="mr-2" aria-label="First group">
            <Button className="button1" variant="dark" size="lg" href="./login">
              Login
            </Button>
          </ButtonGroup>
          <ButtonGroup className="mr-2" aria-label="First group">
            <Button
              className="button2"
              variant="dark"
              size="lg"
              inline
              href="./Signup"
            >
              Create Account
            </Button>
          </ButtonGroup>
        </div>

        <Container>
          <Button
            className="getstarted"
            variant="dark"
            size="lg"
            href="./login"
          >
            Get Started!
          </Button>
        </Container>
      </div>
    </>
  );
};
export default Home;
