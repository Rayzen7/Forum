import React from 'react'
import './CSS/learning.css'
import { Link } from 'react-router-dom'

const Learning = () => {
  return (
    <div className='learning' id='learning' data-aos="fade-up">
        <h1>Materi</h1>
        <p>Materi mengenai Organisasi MPK SMK Negeri 26 Jakarta</p>
        <Link to="/Learning" style={{textDecoration:"none", color:"black"}}><button>Belajar</button></Link>
    </div>
  )
}

export default Learning