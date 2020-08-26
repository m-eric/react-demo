import * as actionTypes from "../actions/actionTypes";
import * as storage from "../../utility/localStorage";

const initalState = {
  isSidebarToggled: !!storage.getSidebarToggled()
};

const reducer = (state = initalState, actions) => {
  switch (actions.type) {
    case actionTypes.MISC_TOGGLE_SIDEBAR:
      return { ...state, isSidebarToggled: !state.isSidebarToggled };
    case actionTypes.MISC_SET_SIDEBAR_TOGGLED:
      return { ...state, isSidebarToggled: actions.payload };
    default:
      return state;
  }
};

export default reducer;
