import { axiosSetToken, axiosRemoveToken } from "../../utility/axios/token";

import * as actionTypes from "./actionTypes";
import * as storage from "../../utility/localStorage";

export const setUser = user => {
  return {
    type: actionTypes.AUTH_SET_USER,
    payload: user
  };
};

export const setToken = token => dispatch => {
  if (token) {
  }

  return {
    type: actionTypes.AUTH_SET_TOKEN,
    payload: token
  };
};

export const setTokenExpire = tokenExpire => {
  return {
    type: actionTypes.AUTH_SET_TOKEN_EXPIRE,
    payload: tokenExpire
  };
};

export const clearAll = () => {
  return {
    type: actionTypes.AUTH_CLEAR_ALL
  };
};

export const login = (user, token, tokenExpire, remember) => dispatch => {
  dispatch(setToken(token));
  dispatch(setTokenExpire(tokenExpire));
  dispatch(setUser(user));
  axiosSetToken(token);
  dispatch(setAutologout(tokenExpire));

  if (remember) {
    storage.setAuth({ user, token, tokenExpire });
  } else {
    storage.removeAuth();
  }
};

export const logout = () => dispatch => {
  dispatch(clearAll());
  axiosRemoveToken();
};

export const autologin = () => dispatch => {
  const auth = storage.getAuth();
  if (!auth) {
    return;
  }

  dispatch(setToken(auth.token));
  dispatch(setTokenExpire(auth.tokenExpire));
  dispatch(setUser(auth.user));

  axiosSetToken(auth.token);

  dispatch(setAutologout(auth.tokenExpire));
};

export const setAutologout = tokenExpire => dispatch => {
  setTimeout(() => {
    dispatch(clearAll());
    axiosRemoveToken();
  }, tokenExpire - new Date().getTime());
};
