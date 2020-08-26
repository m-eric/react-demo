import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const GuestRoute = ({ component: Component, auth, ...rest }) => {
  const authUser = useSelector(state => state.auth.user);

  return (
    <Route
      {...rest}
      render={props =>
        !authUser ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
