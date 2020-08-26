import React from "react";

const SidebarBrandLink = () => {
  return (
    <a
      href={process.env.REACT_APP_BRAND_LINK}
      id="Sidebar-brand-custom"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/img/logo-32x32.png" alt="Logo" />
      <span>{process.env.REACT_APP_BRAND_NAME}</span>
    </a>
  );
};

export default React.memo(SidebarBrandLink);
