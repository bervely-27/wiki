import React from "react";
import { IoSearch } from "react-icons/io5";
import { appMenus } from "./SideBar/SideBar";
import SideBarItem from "./SideBar/SideBarItem";

function MobileMenu() {
  const [search, setSearch] = React.useState("");

  const [activeMenus, setActiveMenus] = React.useState(
    appMenus.map((menu) => menu.menuTitle)
  );

  return (
    <div className="sidebar-wrapper">
      <div className="search-input">
        <IoSearch fontSize={20} className="look" />
        <label htmlFor="search menu">search menu</label>
        <input
          id="search"
          type="text"
          placeholder="Recherche rapide..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        {/* <span>CtrlK</span> */}
      </div>

      <div className="menu">
        {appMenus.map((menu) => (
          <SideBarItem
            key={menu.menuTitle}
            menuTitle={menu.menuTitle}
            menuItems={menu.menuItem}
            activeMenus={activeMenus}
            setActiveMenus={setActiveMenus}
          />
        ))}
      </div>
    </div>
  );
}

export default MobileMenu;
