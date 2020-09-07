import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Play from '../images/playicon.png';
import '../Styles/Navigation.css';

const Navigation = () => {
  const history = useHistory();

  const logout = () => {
    fetch('/api/users/logout', {
      method: 'post',
    })
      .then((res) => {
        sessionStorage.removeItem('user');
        sessionStorage.clear();
        history.push('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="navbar" style={{ backgroundColor: '#0d324c' }}>
        <Nav.Link style={{ color: 'white' }} href="/events">
          <h4 className="mt-2">Events</h4>
        </Nav.Link>

        <Nav.Link style={{ color: 'white' }} href="/reservation">
          <h4 className="mt-2">Reservations</h4>
        </Nav.Link>

        <Nav.Link href="/">
          <img className="logo" src={Play} alt="play" />
        </Nav.Link>

        <Nav.Link style={{ color: 'white' }} as={Link} to="/profile">
          <h4 className="mt-2">Profile</h4>
        </Nav.Link>

        <Nav className="mt-2" style={{ color: 'white' }}>
          <Nav.Link onClick={logout} style={{ color: 'white' }}>
            <h4 className="mt-2">Logout</h4>
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default Navigation;
