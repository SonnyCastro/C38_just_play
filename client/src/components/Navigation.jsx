import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

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
      <Navbar bg="dark">
        <Navbar.Brand as={Link} style={{ color: 'white' }} to="/">
          Task Manager
        </Navbar.Brand>
        <Nav className="ml-auto" style={{ color: 'white' }}>
          <Nav.Link onClick={logout} style={{ color: 'white' }} href="#home">
            <h5 className="mt-2">Logout</h5>
          </Nav.Link>
          <Nav.Link
            style={{ color: 'white' }}
            as={Link}
            to="/events"
            href="#features"
          >
            <svg
              width="2.5em"
              height="2.5em"
              viewBox="0 0 16 16"
              className="bi bi-bicycle"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443l-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057L9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z"
              />
            </svg>
          </Nav.Link>
          <Nav.Link style={{ color: 'white' }} as={Link} to="/profile">
            <svg
              width="2.3em"
              height="2.3em"
              viewBox="0 0 16 16"
              className="bi bi-person-circle"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
              <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path
                fillRule="evenodd"
                d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
              />
            </svg>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;
