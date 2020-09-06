import React from 'react';
import { Container, Button, ButtonGroup } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import '../App.css';
import BackgroundVideo from '../components/justplay.mp4';

const Home = () => {
  return (
    <div>
      <div className="inline-buttons" block="true">
        <ButtonGroup className="mr-2" aria-label="First group">
          <Button
            className="button1"
            variant="primary"
            size="lg"
            href="./login"
          >
            Login
          </Button>
        </ButtonGroup>

        <ButtonGroup className="mr-2" aria-label="First group">
          <Button variant="primary" size="lg" inline href="./Signup">
            Create Account
          </Button>
        </ButtonGroup>
      </div>
      <div class="video-bg-container">
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
    </div>
  );
};
export default Home;
