import React from 'react'
import './CSS/learning.css'

const Learning = () => {
  return (
    <div className='learning' id='learning' data-aos="fade-up">
        <h1>Materi</h1>
        <p>Materi mengenai Organisasi MPK SMK Negeri 26 Jakarta</p>
        <button><a href="/Learning" style={{textDecoration:"none", color:"black"}}>Belajar</a></button>
    </div>
  )
}

export default Learning