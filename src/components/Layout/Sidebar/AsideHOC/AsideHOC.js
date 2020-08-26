import React from "react";
import { useSelector } from "react-redux";

const SidebarAsideHOC = props => {
  const toggled = useSelector(state => state.misc.isSidebarToggled);

  return (
    <div id="Sidebar">
      <aside
        className={`min-h-screen flex-1 overflow-hidden z-50 aside-custom ${
          toggled ? "toggled" : null
        }`}
      >
          {props.children}
      </aside>
    </div>
  );
};

export default React.memo(SidebarAsideHOC);
