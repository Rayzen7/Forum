import React from 'react'
import './CSS/HomeAdmin.css'
import Upload from './pages/upload.jsx'
import FileList from './pages/ReadDocument.jsx'
import { Link } from 'react-router-dom'

const HomeAdmin = () => {
  return (
    <div className='homeAdmin' data-aos="fade-up">
        <Upload/>
        <FileList/>
        <Link to="/admin" style={{textDecoration:"none", color:"white"}}><button>Keluar</button></Link>
    </div>
  )
}

export default HomeAdmin