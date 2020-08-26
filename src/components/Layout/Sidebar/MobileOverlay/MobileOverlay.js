import React from "react";
import { useDispatch } from "react-redux";

import actions from "../../../../store/actions";

const SidebarMobileOverlay = props => {
  const dispatch = useDispatch();

  return (
    <div
      id="Sidebar-mobile-overlay"
      className="fixed top-0 md:hidden z-40 w-screen h-screen"
      onClick={() => dispatch(actions.misc.toggleSidebar())}
    ></div>
  );
};

export default React.memo(SidebarMobileOverlay);
