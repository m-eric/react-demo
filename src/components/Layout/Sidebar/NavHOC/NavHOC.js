import React from "react";

const NavHOC = props => {
  return <nav className="py-6 px-2">{props.children}</nav>;
};

export default NavHOC;
