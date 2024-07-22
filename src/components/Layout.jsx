import React from 'react'
import '../styles/layout.css'
import SideBar from './SideBar/SideBar'
import FooterDoc from '../FooterDoc/FooterDoc'
const Layout = ({children}) => {
  return (
    <div className='layout'>
     <SideBar/>
     <div>
        <div>{children}</div>
        <FooterDoc/>
     </div>
     
    </div>
  )
}

export default Layout
