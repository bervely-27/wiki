import React from 'react'
import '../styles/header/NavBar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className="hamburger"><GiHamburgerMenu />
      <RxCross2 /></div>
      <ul className='navbar-list'>
       <a><li className='list-item'>Documentation</li></a> 
       <a><li className='list-item'>Telegram</li></a> 
       <a><li className='list-item'>Accéder à CASHGEN</li></a> 
      </ul>
    </nav>
  )
}

export default NavBar
