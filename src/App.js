import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Redirect } from "react-router-dom";

import { autologin } from "./store/actions/authActions";

import {
  GuestRoute,
  AuthRoute,
  SysadminRoute,
  LogoutRoute
} from "./utility/guards";
import Layout from "./hoc/Layout/Layout";
import Login from "./containers/Login/Login";
import Dashboard from "./containers/Dashboard/Dashboard";
import Profile from "./containers/Profile/Profile";
import Users from './containers/Users/Users'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autologin());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Switch>
          <AuthRoute path="/" component={Dashboard} exact />
          <AuthRoute path="/profil" component={Profile} exact />
          <SysadminRoute path="/korisnici" component={Users} />
          <GuestRoute path="/login" component={Login} exact />
          <LogoutRoute />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </>
  );
};

export default App;
