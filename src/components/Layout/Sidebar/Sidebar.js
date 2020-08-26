import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import actions from "../../../store/actions";
import "./Sidebar.css";
import AsideHOC from "./AsideHOC/AsideHOC";
import NavHOC from "./NavHOC/NavHOC";
import BrandLink from "./BrandLink/BrandLink";
import MobileOverlay from "./MobileOverlay/MobileOverlay";

import LinkDashboard from './SidebarLinks/LinkDashboard'
import LinkUsers from './SidebarLinks/LinkUsers'

const Sidebar = () => {
  const authRole = useSelector(state => state.auth.user.role);
  const toggled = useSelector(state => state.misc.isSidebarToggled);

  const dispatch = useDispatch();

  // On click link (only on mobile): toggle off sidebar
  const onClickLink = useCallback(() => {
    if (document.getElementById("Sidebar-mobile-overlay")) {
      dispatch(actions.misc.toggleSidebar());
    }
  }, [dispatch]);

  return (
    <>
      <AsideHOC>
        <BrandLink />

        <NavHOC>
          <LinkDashboard onClickLink={onClickLink} />
          {authRole === "SYSADMIN" && <LinkUsers onClickLink={onClickLink} />}
        </NavHOC>
      </AsideHOC>

      {toggled && <MobileOverlay />}
    </>
  );
};

export default Sidebar;
