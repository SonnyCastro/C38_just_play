import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Image } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import Logout from './Logout';

const Navigation = () => {
  const { currentUser } = AppContext;

  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Event">
          Event
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Logout">
          Logout
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Logout />
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
