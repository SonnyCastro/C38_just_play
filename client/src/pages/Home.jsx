import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import BackgroundVideo from '../components/justplay.mp4';

const Home = () => {
  return (
    <>
      <Button
        variant="primary"
        className="mt-4"
        size="lg"
        block
        as={Link}
        to="/login"
      >
        Login
      </Button>
      <Button
        variant="primary"
        className="mt-4"
        size="lg"
        block
        as={Link}
        to="/signup"
      >
        Create Account
      </Button>

      <div className="video-bg-container">
        <div>
          <video
            class="video-bg"
            loop="true"
            autoplay="autoplay"
            controls="controls"
            muted
          >
            <source src={BackgroundVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <Container>
        <Button
          variant="primary"
          className="mt-4"
          size="lg"
          block
          href="./login"
        >
          Learn More "Animation"
        </Button>
      </Container>
    </>
  );
};

export default Home;
