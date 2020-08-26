import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "axios";

import { logout } from "../../store/actions/authActions";

export const LogoutRoute = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
    axios.post("/auth/logout", {});
  }, [dispatch]);

  return <Redirect to="/login" />;
};
