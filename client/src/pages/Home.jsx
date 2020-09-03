import React from 'react';
import { Container, Button } from 'react-bootstrap';
// import BeachSoccer from '../context/Images/BeachSoccer.jpg';
// import Calisthenics from '../context/Images/Calisthenics.jpg';
// import SkateWithGreats from '../context/Images/SkateWithGreats.jpg';
import '../App.css';
import BackgroundVideo from '../components/justplay.mp4';

const Home = () => {
  return (
    <>
      <Button variant="primary" className="mt-4" size="lg" block href="./login">
        Login
      </Button>
      <Button
        variant="primary"
        className="mt-4"
        size="lg"
        block
        href="./Signup"
      >
        Create Account
      </Button>
      {/* <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        data-toggle="affix"
      >
        <div class="container flex-sm-nowrap justify-content-center">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbars4"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse text-center" id="navbars4">
            <ul class="navbar-nav nav-fill w-100">
              <li class="nav-item active">
                <a class="nav-link" href="./events">
                  Events
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./reservations">
                  Pricing
                </a>
              </li>
              <li>
                <a class="navbar-brand" href="./">
                  Just Play
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./profile">
                  Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./components/Logout">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <div class="video-bg-container">
        <div>
          <video class="video-bg" loop autoPlay>
            <source src={BackgroundVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* <Container>
        <Form.Group>
          <Form.Control
            size="lg"
            className="mt-4"
            type="text"
            placeholder="Search for an Event"
          />
        </Form.Group>

        <Container className="mt-4">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-300 l-300"
                src={Calisthenics}
                alt="Caslisthenics and Cardio"
                height="600"
              />

              <Carousel.Caption>
                <h3>Caslisthenics and Cardio</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-300 l-300"
                src={BeachSoccer}
                alt="Soccer on the Beach"
                height="600"
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
                height="600"
              />

              <Carousel.Caption>
                <h3>Skate with a Great!</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> */}
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
