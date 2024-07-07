import React from 'react'
import './CSS/footer.css'
import logo from '../../assets/img/home/MPK-nobg.png'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={logo} alt="" />
        <p>@Copyright Rayzen7 MPK 16</p>
    </div>
  )
}

export default Footer