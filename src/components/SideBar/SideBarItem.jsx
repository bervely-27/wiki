import React from 'react'
import '../../styles/SideBar/SideBarItem.css'
import { IoIosArrowDown } from "react-icons/io";
const SideBarItem = ({menuTitle,menuItems}) => {
  return (
    <div className='menu-item'>
      <div className='title-arrow'>
        <h3>{menuTitle}</h3>
        <IoIosArrowDown />
        </div>
        <div className='subtitles'>
           {menuItems.map(menuItem=> <p className='item'>{menuItem}</p>)} 
        </div>
    </div>
  )
}

export default SideBarItem
