import React from "react";
import "../styles/header/Header.css";
import NavBar from "./NavBar";
import { TbBrandTabler } from "react-icons/tb";
import tabler from './tabler.svg'
const Header = () => {
  const style = {fontSize:'40px', color:'#1f6dc0',}
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="logo-tabler">
          <div className="logo">
         <img src={tabler}/>
          </div>
          <p>wiki</p>
        </div>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
