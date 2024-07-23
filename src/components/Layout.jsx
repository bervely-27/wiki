import React from "react";
import "../styles/layout.css";
import SideBar, { appMenus } from "./SideBar/SideBar";
import FooterDoc from "../FooterDoc/FooterDoc";
import { useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import useWindowSize from "../hooks/useWindowSize";
const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const { isMobile } = useWindowSize();

  const routes = appMenus.map((menu) => menu.menuItem).flat();

  const [isActiveMobileMenu, setIsActiveMobileMenu] = React.useState(false);

  const toggleMobileMenu = () => setIsActiveMobileMenu(!isActiveMobileMenu);

  return (
    <div className="layout">
      <SideBar />
      <div style={{ width: "100%" }}>
        <div className="doc-content">
          <button onClick={toggleMobileMenu} className="mobile-menu-toggler">
            Toogle docs menu
          </button>
          <p>
            Home &nbsp;› &nbsp;Documentation &nbsp;› &nbsp;
            {routes.find((route) => route.path === pathname).name}
          </p>
          {isActiveMobileMenu && isMobile && <MobileMenu />}
          {!isActiveMobileMenu && children}
        </div>
        <FooterDoc />
      </div>
    </div>
  );
};

export default Layout;
