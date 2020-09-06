import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import EventPage from './pages/Event';
import Profile from './components/Profile';
import Reservation from './pages/Reservation';
import PrivateRoute from './components/PrivateRoute';
import CreateEvent from './pages/CreateEvent';
import ResetPassword from './pages/ResetPassword';
import UpdatePassword from './pages/UpdatePassword';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/events" component={EventPage} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/update-password" component={UpdatePassword} />
          <Route exact path="/reservation/:id?" component={Reservation} />
          <PrivateRoute exact path="/createEvent" component={CreateEvent} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
