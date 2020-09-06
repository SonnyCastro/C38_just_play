import React from 'react';
import { Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Logo from '../images/favicon.png';
import '../Styles/Navigation.css';

const Navigation = () => {
  const history = useHistory();

  const handleClick = (e) => {
    console.log(e.target.name);
  };

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
      <div className="navbar" bg="dark">
        <Nav.Link
          onClick={handleClick}
          style={{ color: 'white' }}
          href="/events"
        >
          <h6 className="mt-2">Events</h6>
        </Nav.Link>

        <Nav.Link
          onClick={(e) => handleClick(e)}
          style={{ color: 'white' }}
          href="/reservation"
        >
          <h6 className="mt-2">Reservations</h6>
        </Nav.Link>

        <Nav.Link href="/">
          <img className="logo" src={Logo} alt="logo" />
        </Nav.Link>

        <Nav.Link
          onClick={handleClick}
          style={{ color: 'white' }}
          href="/profile"
        >
          <h6 className="mt-2">Profile</h6>
        </Nav.Link>

        <Nav className="mt-2" style={{ color: 'white' }}>
          <Nav.Link onClick={logout} style={{ color: 'white' }}>
            <h6 className="mt-2">Logout</h6>
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default Navigation;
