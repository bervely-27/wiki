import React from 'react'
import '../styles/FooterDoc/FooterDocItem.css'
const FooterDocItem = ({icon,question,link}) => {
  return (
    <div className='footer-doc-item'>
      <p>{icon}</p>
      <p>{question}</p>
      <a  href="#link">{link} </a>
    </div>
  )
}

export default FooterDocItem
