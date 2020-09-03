import React, { useContext } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Logout = () => {
  const { setCurrentUser } = useContext(AppContext);
  const history = useHistory();

  const handleSignOut = async () => {
    try {
      await axios({
        method: 'POST',
        url: '/api/users/logout',
        withCredentials: true,
      });
      sessionStorage.removeItem('user');
      setCurrentUser(null);
      history.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return <NavLink> onClick={handleSignOut} Log Out</NavLink>;
};

export default Logout;
