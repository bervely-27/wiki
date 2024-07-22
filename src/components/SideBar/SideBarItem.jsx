import React from "react";
import "../../styles/SideBar/SideBarItem.css";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
const SideBarItem = ({ menuTitle, menuItems, activeMenus, setActiveMenus }) => {
  const toggleMenu = () => {
    if (activeMenus.includes(menuTitle)) {
      setActiveMenus(activeMenus.filter((menu) => menu !== menuTitle));
    } else {
      setActiveMenus((prev) => [...prev, menuTitle]);
    }
  };

  const { pathname } = useLocation();
  const isActiveMenu = activeMenus.includes(menuTitle);
  return (
    <div className="menu-item">
      <div className="title-arrow">
        <h3>{menuTitle}</h3>
        <button className="menu-toggler" onClick={toggleMenu}>
          {isActiveMenu && <IoIosArrowDown />}
          {!isActiveMenu && <IoIosArrowForward />}
        </button>
      </div>
      {isActiveMenu && (
        <div className="subtitles">
          {menuItems.map((menuItem, idx) => (
            <Link
              to={menuItem.path}
              key={idx}
              className={`item ${pathname === menuItem.path && "active-item"}`}
            >
              {menuItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBarItem;
