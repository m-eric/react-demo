import * as actionTypes from "../actions/actionTypes";

const initalState = {
  user: null,
  token: null,
  tokenExpire: null,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SET_USER:
      return { ...state, user: action.payload };
    case actionTypes.AUTH_SET_TOKEN:
      return { ...state, token: action.payload };
    case actionTypes.AUTH_SET_TOKEN_EXPIRE:
      return { ...state, tokenExpire: action.payload };
    case actionTypes.AUTH_CLEAR_ALL:
      return { ...state, ...initalState };
    default:
      return state;
  }
};

export default reducer;
