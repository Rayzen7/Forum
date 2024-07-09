import React from 'react'
import './CSS/hero.css'
import logo from '../../assets/img/home/MPK-nobg.png'

const Hero = () => {
  return (
    <div className='hero' data-aos="fade-up">
        <img src={logo} alt="" data-aos="fade-up"/>
        <h1>Selamat Datang di Forum MPK SMKN 26 Jakarta</h1>
        <button><a href="#learning">Mulai</a></button>
    </div>
  )
}

export default Hero