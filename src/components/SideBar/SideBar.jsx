import React from 'react'
import SideBarItem from './SideBarItem'
import '../../styles/SideBar/SideBar.css'
import { IoSearch } from "react-icons/io5";
const SideBar = () => {
    const [item,setItem] = React.useState('')
    const menus = [
      {
        menuTitle:'Pour commencer',
        menuItem:['Introduction','Securité du site','FAQ']
      },
      {
        menuTitle:'Cartes bancaire',
        menuItem:["Utilisation d'une CC",'Comprendre les plafonds','Comprendre les sécurités','Comprendre les caractéristiques','Utilisation du Checker']
      },
      {
        menuTitle:'Cryptomonnaie',
        menuItem:['Dépots de fonds','Utilisation de la crypto ','Obtenir de la crypto']
      },
      {
        menuTitle:'Anonymat',
        menuItem:['Conserver son anonymat',"Utilisatiob d'un VPN du site"]
      }
    ]
  return (
    <div className='sidebar'>
      <div className='sidebar-wrapper'>
         <div className='search-input'>
            <IoSearch fontSize={20} className='look'/>
            <label htmlFor='search menu'>search menu</label>
            <input id='search' type='text' placeholder='Recherche rapide...'  value={item} onChange={(e)=>setItem(e.target.value)}></input>
            <span>CtrlK</span>
         </div>

         <div className='menu'>
          {menus.map(menu=>
            <SideBarItem key={menu.menuTitle} menuTitle={menu.menuTitle} menuItems={menu.menuItem}/>
          )}
         </div>
      </div>
      
    </div>
  
  )
}

export default SideBar
