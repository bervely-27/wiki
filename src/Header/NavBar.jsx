import React from "react";
import "../styles/header/NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="hamburger">
        <GiHamburgerMenu />
        <RxCross2 />
      </div>
      <ul className="navbar-list">
        <li
          style={{ borderBottom: "3px solid #1289f8", color: "#1289f8" }}
          className="list-item"
        >
          Documentation
        </li>
        <li className="list-item">Telegram</li>
        <li className="list-item">Accéder à CASHGEN</li>
      </ul>
    </nav>
  );
};

export default NavBar;
