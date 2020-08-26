import React from "react";

import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="Footer">
      © {currentYear} {process.env.REACT_APP_WEBSITE_NAME}
    </footer>
  );
};

export default React.memo(Footer);
