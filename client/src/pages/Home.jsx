import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Logo from '../images/logo.png';
import './Home.css';

const Home = () => {
  return (
    <div id="background">
      <div>
        <div>
          <div id="Logocontainer">
            <img src={Logo} id="logo" alt={Logo} />
          </div>
        </div>

        <div id="welcomeText">
          <h1 style={{ color: 'white' }}>Join the Movement</h1>
        </div>

        <div id="subText">
          <ul style={{ color: 'white' }}>
            <li>
              <h3>
                <span role="img">✅</span> Create an account
              </h3>
            </li>
            <li>
              <h3>
                <span role="img">🧘🏽‍♀️</span> Select from a number of ongoing
                activities
              </h3>
            </li>
            <li>
              <h3>
                <span role="img">⛹️‍♀️</span> Get moving
              </h3>
            </li>
          </ul>
        </div>

        <div className="container">
          <CardDeck>
            <Card id="cardBorder">
              <Card.Img
                variant="top"
                id="cardImg"
                className="rounded"
                src="https://images.unsplash.com/photo-1576426846595-64bac8ffd3a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
              />
              <Card.Body>
                <Card.Title>Players</Card.Title>
                <Card.Text>
                  Easily reserve a spot and get ready to sweat. JustPlay users
                  can rest assured that activities are as fun as they're meant
                  to be. Hurry, spots are limited!
                </Card.Text>
                <Button as={Link} to="/signup">
                  Join as Player
                </Button>
              </Card.Body>
            </Card>
            <Card id="cardBorder">
              <Card.Img
                variant="top"
                id="cardImg"
                className="rounded"
                src="https://images.unsplash.com/photo-1528310560603-c57f1683b21c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              />
              <Card.Body>
                <Card.Title>Hosts</Card.Title>
                <Card.Text>
                  Become a host and earn a cut from the activities you organize.
                  Players are incentivized to show up or risk losing they're
                  reservation fee.
                </Card.Text>
                <Button as={Link} to="/signup">
                  Join as Host
                </Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </div>
    </div>
  );
};
export default Home;
