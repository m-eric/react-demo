import * as actionTypes from "./actionTypes";
import * as storage from "../../utility/localStorage";

export const setSidebarToggled = toggled => {
  return {
    type: actionTypes.MISC_SET_SIDEBAR_TOGGLED,
    payload: toggled
  };
};

export const toggleSidebar = () => (dispatch, getState) => {
  const prevSidebarToggled = getState().misc.isSidebarToggled;
  storage.setSidebarToggled(!prevSidebarToggled);
  dispatch({ type: actionTypes.MISC_TOGGLE_SIDEBAR });
};
