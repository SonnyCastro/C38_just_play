import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  admin: requiresAdmin,
  ...rest
}) => {
  const user = sessionStorage.getItem('user');
  // we may need to call JSON.parse on this user obj

  const isAdmin = requiresAdmin ? user?.admin : true;

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !user && isAdmin ? (
          <Redirect to="/login" />
        ) : (
          <Component {...routeProps} />
        )
      }
    />
  );
};

export default PrivateRoute;
