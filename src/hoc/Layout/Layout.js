import React from "react";
import { useSelector } from "react-redux";

import "./Layout.css";
import Header from "../../components/Layout/Header/Header";
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import Footer from "../../components/Layout/Footer/Footer";

const Layout = props => {
  const authUser = useSelector(state => state.auth.user);

  return (
    <>
      {authUser && (
        <div id="Layout">
          <Sidebar />

          <div id="Layout-main-container">
            <Header />

            <div id="Layout-page-content">{props.children}</div>

            <Footer />
          </div>
        </div>
      )}

      {/* No layout for unauthorized user */}
      {!authUser && props.children}
    </>
  );
};

export default Layout;
