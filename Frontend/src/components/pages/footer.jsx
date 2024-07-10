import React from 'react'
import './CSS/footer.css'
import logo from '../../assets/img/home/MPK-nobg.png'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={logo} alt="" />
        <p>@Copyright MPK 16 SMKN 26 Jakarta</p>
    </div>
  )
}

export default Footer
