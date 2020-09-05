import React from 'react';
import { Nav } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import '../Styles/Navigation.css';
import Logo from '../context/Images/favicon.png';

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

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Nav, Image } from 'react-bootstrap';
// // import { AppContext } from '../context/AppContext';
// import Logout from './Logout';

// const Navigation = () => {
//   return (
//     <Nav justify variant="tabs" defaultActiveKey="/home">
//       <Nav.Item>
//         <Link as={Link} to="/">
//           Home
//         </Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Link as={Link} to="/event">
//           Event
//         </Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Link as={Link} to="/logout">
//           Logout
//         </Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Logout />
//       </Nav.Item>
//     </Nav>
//   );
// };

// export default Navigation;
