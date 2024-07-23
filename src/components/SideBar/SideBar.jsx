import React from "react";
import SideBarItem from "./SideBarItem";
import "../../styles/SideBar/SideBar.css";
import { IoSearch } from "react-icons/io5";

export const appMenus = [
  {
    menuTitle: "Pour commencer",
    menuItem: [
      { name: "Introduction", path: "/" },
      { name: "Securité du site", path: "/website-security" },
      { name: "FAQ", path: "/faq" },
    ],
  },
  {
    menuTitle: "Cartes bancaire",
    menuItem: [
      { name: "Utilisation d'une CC", path: "/cc-usage" },
      { name: "Comprendre les plafonds", path: "/understand-limits" },
      { name: "Comprendre les sécurités", path: "/understand-securities" },
      {
        name: "Comprendre les caractéristiques",
        path: "/understand-caracteristics",
      },
      { name: "Utilisation du Checker", path: "/checker-usage" },
    ],
  },
  {
    menuTitle: "Cryptomonnaie",
    menuItem: [
      { name: "Dépots de fonds", path: "/deposit" },
      { name: "Utilisation de la crypto ", path: "/crypto-usage" },
      { name: "Obtenir de la crypto", path: "/get-crypto" },
    ],
  },
  {
    menuTitle: "Anonymat",
    menuItem: [
      { name: "Conserver son anonymat", path: "/confidentiality" },
      { name: "Utilisation d'un VPN du site", path: "/use-website-vpn" },
    ],
  },
];
const SideBar = () => {
  const [search, setSearch] = React.useState("");

  const [activeMenus, setActiveMenus] = React.useState(
    appMenus.map((menu) => menu.menuTitle)
  );

  return (
    <div className="sidebar">
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
    </div>
  );
};

export default SideBar;
