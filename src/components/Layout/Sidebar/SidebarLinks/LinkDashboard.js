import React from "react";
import { NavLink } from "react-router-dom";

const LinkDashboard = props => {
  return (
    <NavLink to="/" exact className="Sidebar-navlink" onClick={props.onClickLink}>
      <i className="fas fa-tachometer-alt"></i>
      <span>Панел</span>
    </NavLink>
  );
};

export default React.memo(LinkDashboard);
