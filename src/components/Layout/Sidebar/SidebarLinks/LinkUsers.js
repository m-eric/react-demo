import React from "react";
import { NavLink } from "react-router-dom";

const LinkDashboard = props => {
  return (
    <NavLink to="/korisnici" exact className="Sidebar-navlink" onClick={props.onClickLink}>
      <i className="fas fa-users-cog"></i>
      <span>Корисници</span>
    </NavLink>
  );
};

export default React.memo(LinkDashboard);
