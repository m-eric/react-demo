import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./Header.css";
import actions from "../../../store/actions";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <nav id="Header-navbar" className="navbar navbar-expand bg-white">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li
          id="Header-toggle-sidebar"
          className="nav-item"
          onClick={() => dispatch(actions.misc.toggleSidebar())}
        >
          <i className="fas fa-bars"></i>
        </li>
      </ul>

      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        <NavLink className="Header-nav-link" to="/profil" exact>
          <li className="Header-nav-item nav-item">
            <i className="fas fa-user-cog"></i> Профил
          </li>
        </NavLink>
        <NavLink className="Header-nav-link" to="/logout" exact>
          <li className="Header-nav-item nav-item">
            <i className="fas fa-user-slash"></i> LOGOUT
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default React.memo(Header);
