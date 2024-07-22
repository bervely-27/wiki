import React from "react";
import "../styles/layout.css";
import SideBar, { appMenus } from "./SideBar/SideBar";
import FooterDoc from "../FooterDoc/FooterDoc";
import { useLocation } from "react-router-dom";
const Layout = ({ children }) => {
  const { pathname } = useLocation();

  const routes = appMenus.map((menu) => menu.menuItem).flat();

  return (
    <div className="layout">
      <SideBar />
      <div style={{ width: "100%" }}>
        <div className="doc-content">
          <p>
            Home &nbsp;› &nbsp;Documentation &nbsp;› &nbsp;
            {routes.find((route) => route.path === pathname).name}
          </p>
          {children}
        </div>
        <FooterDoc />
      </div>
    </div>
  );
};

export default Layout;
