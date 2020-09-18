import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      currentUser ? <Component {...rest} {...props} /> : <Redirect to="/user" />
    }
  />
);
export default PrivateRoute;
